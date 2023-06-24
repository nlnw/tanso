import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.providers.getDefaultProvider("sepolia");

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);

const schemas = {
  CCVA_attests_project_approval:
    "0x447cefc057bdd611bc853756d3fd633e495d4d8d75a1aaed7ae5598573984c13",
  CCVA_attests_CC_of_CCPD:
    "0xceaae4d7e69d6612de328f03af8414c9f0cf83c584ebad4dbec387b83ebdf5ec",
  CEVRP_attests_CE_of_CCE:
    "0x82a5b3d30bc24d0229954a8ec7993e68137791a51376c736d2cd2fb18161e60d",
  CCPD_attests_transfer_of_CC_to_CCE:
    "0x6329287e9ee8bf0c1cd7760f90eb440aeb6e5dfc6b79caaa8c7dfaca714d626c",
  CAE_attests_CCE_is_net_zero:
    "0xf7698882cf2e7bef1c0217e229303874bf2f86b77a6afd97e9c9b92c6eaab34d",
};

export { eas, schemas };
