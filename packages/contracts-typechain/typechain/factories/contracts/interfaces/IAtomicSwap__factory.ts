/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAtomicSwap,
  IAtomicSwapInterface,
} from "../../../contracts/interfaces/IAtomicSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daoShare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burned",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
] as const;

export class IAtomicSwap__factory {
  static readonly abi = _abi;
  static createInterface(): IAtomicSwapInterface {
    return new utils.Interface(_abi) as IAtomicSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAtomicSwap {
    return new Contract(address, _abi, signerOrProvider) as IAtomicSwap;
  }
}