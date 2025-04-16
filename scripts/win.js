// add the game address here and update the contract name if necessary
const gameAddr = "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9";
const contractName = "Game5";

async function main() {
  // attach to the game
  try {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx1 = await game.giveMeAllowance(20001);
    const tx2 = await game.mint(10000);
    const tx3 = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx3.wait();
    if (receipt.status === 1) {
      console.log("🎉 You won! Receipt:", receipt);
    } else {
      console.log("❌ Transaction reverted (expected). Receipt:", receipt);
    }
    //console.log(receipt);
  } catch (error) {
    // Catches JS errors (e.g., network issues)
    console.error("Script failed:", error);
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
