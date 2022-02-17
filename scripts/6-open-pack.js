import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x4b32CB0A8AeDAb24afED317B87058eC7ec1cCdED';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}