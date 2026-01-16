import { ethers } from "ethers";

async function main() {
  // Base Sepolia RPC
  const provider = new ethers.JsonRpcProvider(
    "https://sepolia.base.org"
  );

  // Ganti dengan address apa saja (boleh address kamu)
  const address = "0x0000000000000000000000000000000000000000";

  const network = await provider.getNetwork();
  const blockNumber = await provider.getBlockNumber();
  const balance = await provider.getBalance(address);

  console.log("Network:", network.name);
  console.log("Chain ID:", network.chainId.toString());
  console.log("Latest Block:", blockNumber);
  console.log(
    "Balance:",
    ethers.formatEther(balance),
    "ETH"
  );
}

main().catch(console.error);
