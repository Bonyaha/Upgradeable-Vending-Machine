# Upgradeable Vending Machine Smart Contract

In this project, we will run through deploying smart contracts that use the transparent proxy pattern in order to be upgradeable. Deploying your contracts under a proxy can be useful in order to future-proof your smart contract functionality. You will be able to deploy a version 1 contract, add new functionality and then deploy a version 2 of that contract under the proxy, and so on...

### Commands, to use:
- `npx hardhat node`
- `npx hardhat run scripts/deployProxy.js --network localhost` (in separate terminal window)
- `npx hardhat run scripts/upgradeProxy.js --network localhost`