const { ethers, network } = require("hardhat");
const { getNamedAccounts } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { assert } = require("chai");

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function () {
          let fundMe;
          let deployer;
          const sendValue = ethers.utils.parseEther("1");

          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer;

              const fundMeDeployment = await deployments.get("FundMe");
              fundMe = await ethers.getContractAt(
                  "FundMe",
                  fundMeDeployment.address
              );
          });

          it("allows people to fund and withdraw", async function () {
              await fundMe.fund({ value: sendValue });
              await fundMe.withdraw();
              const endingBalance = await ethers.provider.getBalance(
                  fundMe.address
              );
              assert.equal(endingBalance.toString(), "0");
          });
      });
// 12 hrs 14 mins
