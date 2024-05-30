require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const TESTBSC_API_KEY = process.env.TESTBSC_API_KEY;
const TESTBSC_RPC_URL = process.env.TESTBSC_RPC_URL;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      }
    ],
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    ganache: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY]
    },
    // mumbai: {
    //   url: MUMBAI_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 80001,
    // },
    // polygon: {
    //   url: TESTBSC_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 137,
    // }
  },
  paths: {
    artifacts: "./artifacts"
  },
  gasReporter: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      bscTestnet: TESTBSC_API_KEY,
    }
  }
};
