const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMeDeployment = await deployments.get("FundMe");
    const fundMe = await ethers.getContractAt(
        "FundMe",
        fundMeDeployment.address
    );
    console.log("Funding...");
    const transactionResponse = await fundMe.withdraw();
    await transactionResponse.wait(1);
    console.log("Funds withdrawn!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
