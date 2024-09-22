import { getWalletTokenBalancesWithSol } from "@monaco-protocol/client";
import { PublicKey } from "@solana/web3.js";
import { getProgram, getProcessArgs, logResponse } from "./utils";
import * as bip39 from "bip39";
const solanaWeb3 = require('@solana/web3.js');

async function getBalances(tokenMints: PublicKey[]) {
    const program = await getProgram();
    const response = await getWalletTokenBalancesWithSol(program, tokenMints);
    logResponse(response);
}

const exampleTokens = [
    new PublicKey("Qegj89Mzpx4foJJqkj6B4551aiGrgaV33Dtcm7WZ9kf"),
    new PublicKey("Aqw6KyChFm2jwAFND3K29QjUcKZ3Pk72ePe5oMxomwMH")
];

const mnemonic =
    "fly tenant need fiscal gold can assault indoor silent miss rate napkin";
const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
const keypair = solanaWeb3.Keypair.fromSeed(seed.subarray(0, 32));

// console.log(keypair.secretKey.toBytes())

getProcessArgs([], "npm run getBalances");
getBalances(exampleTokens);