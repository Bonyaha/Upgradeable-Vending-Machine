require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    }
  }
};

