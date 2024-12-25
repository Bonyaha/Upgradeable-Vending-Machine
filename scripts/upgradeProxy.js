const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x951025CEc6A25dE8006F44ab1d1Db8e4B38E5B5E';

async function main() {
  try {
    console.log('Starting upgrade process...');
    
    // Step 1: Force import the proxy
    console.log('Importing proxy...');
    const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
    await upgrades.forceImport(proxyAddress, VendingMachineV1);
    console.log('Proxy imported successfully.');

    
    // Get the contract factory
    const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
    console.log('Contract factory created');

    // Perform the upgrade
    console.log('Upgrading proxy...');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);
    
    // Wait for the upgrade transaction to be mined
    console.log('Waiting for upgrade transaction to be mined...');
    await upgraded.waitForDeployment();
    
    // Get the implementation address
    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
      proxyAddress
    );

    // Get the current owner (make sure to await the promise)
    const owner = await upgraded.owner();
    
    console.log('Upgrade completed successfully!');
    console.log('Proxy contract address: ' + proxyAddress);
    console.log('New implementation contract address: ' + implementationAddress);
    console.log('The current contract owner is: ' + owner);

    // Verify that we can call new V2 functions
    try {
      // Check if sodaPurchases mapping exists (this function only exists in V2)
      await upgraded.sodaPurchases(owner);
      console.log('Successfully verified V2 functionality');
    } catch (error) {
      console.error('Failed to verify V2 functionality:', error.message);
    }

  } catch (error) {
    console.error('Error during upgrade process:', error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });