# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
### Proxy contract address: 0x951025CEc6A25dE8006F44ab1d1Db8e4B38E5B5E
### Implementation contract address: 0x3928Da0bC8a9104Ef23bD21B7CdEF6967d32934d
### Upgraded address: 0xf37757d4a3a7e7fde14089b0641a5e6cffc9de19
### Commands:
- for deploying - `npx hardhat run scripts/deployProxy.js --network sepolia`
- for verifying VENDINGMACHINEV1 contract - `npx hardhat verify --network sepolia YOUR_VENDINGMACHINEV1_IMPLEMENTATION_ADDRESS`
- we can interact with our VendingMachineV1 Implementation contract directly via our Proxy contract using Etherscan:

    1. From you terminal, copy your Proxy contract address
    2. Paste it into Sepolia Etherscan
    3. Select the 'Contract' tab
    4. On the right-hand side, select 'More Options'
    5. Select 'Is this a proxy?'
    6. Select 'Verify'
    7. Select 'Save'
    8. Now, go back to your Proxy contract's Etherscan page
    You can now Read as Proxy and Write as Proxy
- upgrading proxy - `npx hardhat run scripts/upgradeProxy.js --network sepolia`
- for verifying VENDINGMACHINEV2 contract - `npx hardhat verify --network sepolia YOUR_VENDINGMACHINEV2_IMPLEMENTATION_ADDRESS`