import { ethers } from "ethers";

// Base Mainnet
const BASE_MAINNET_RPC = "https://mainnet.base.org";
const mainnetProvider = new ethers.JsonRpcProvider(BASE_MAINNET_RPC);

// Base Sepolia
const BASE_SEPOLIA_RPC = "https://sepolia.base.org";
const sepoliaProvider = new ethers.JsonRpcProvider(BASE_SEPOLIA_RPC);

async function main() {
  // Mainnet
  const mainnetBlock = await mainnetProvider.getBlockNumber();
  console.log("Base Mainnet block:", mainnetBlock);

  const mainnetFee = await mainnetProvider.getFeeData();
  console.log("Base Mainnet gas (wei):", mainnetFee.gasPrice.toString());

  // Sepolia
  const sepoliaBlock = await sepoliaProvider.getBlockNumber();
  console.log("Base Sepolia block:", sepoliaBlock);

  const sepoliaFee = await sepoliaProvider.getFeeData();
  console.log("Base Sepolia gas (wei):", sepoliaFee.gasPrice.toString());
}

main();
