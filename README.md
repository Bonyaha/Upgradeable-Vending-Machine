# Upgradeable Vending Machine Smart Contract

In this project, we will run through deploying smart contracts that use the transparent proxy pattern in order to be upgradeable. Deploying your contracts under a proxy can be useful in order to future-proof your smart contract functionality. You will be able to deploy a version 1 contract, add new functionality and then deploy a version 2 of that contract under the proxy, and so on...

### Proxy contract address: 0x951025CEc6A25dE8006F44ab1d1Db8e4B38E5B5E
### Implementation contract address: 0x3928Da0bC8a9104Ef23bD21B7CdEF6967d32934d
### Upgraded address: 0xf37757d4a3a7e7fde14089b0641a5e6cffc9de19
### Commands

1. Deploy the proxy contract:
   ```bash
   npx hardhat run scripts/deployProxy.js --network sepolia
   ```

2. Verify VENDINGMACHINEV1 contract:
   ```bash
   npx hardhat verify --network sepolia YOUR_VENDINGMACHINEV1_IMPLEMENTATION_ADDRESS
   ```

3. Interact with VendingMachineV1 Implementation contract via Proxy contract on Etherscan:
   1.From you terminal, copy your Proxy contract address
   2.Paste it into Sepolia Etherscan
   3.Select the 'Contract' tab
   4.On the right-hand side, select 'More Options'
   5.Select 'Is this a proxy?'
   6.Select 'Verify'
   7.Select 'Save'
   8.Now, go back to your Proxy contract's Etherscan page. You can now Read as Proxy and Write as Proxy

4. Upgrade the proxy:
   ```bash
   npx hardhat run scripts/upgradeProxy.js --network sepolia
   ```

5. Verify VENDINGMACHINEV2 contract:
   ```bash
   npx hardhat verify --network sepolia YOUR_VENDINGMACHINEV2_IMPLEMENTATION_ADDRESS
   ```