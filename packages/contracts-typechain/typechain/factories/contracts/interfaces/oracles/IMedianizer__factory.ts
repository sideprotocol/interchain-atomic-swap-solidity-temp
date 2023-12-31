/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMedianizer,
  IMedianizerInterface,
} from "../../../../contracts/interfaces/oracles/IMedianizer";

const _abi = [
  {
    inputs: [],
    name: "peek",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMedianizer__factory {
  static readonly abi = _abi;
  static createInterface(): IMedianizerInterface {
    return new utils.Interface(_abi) as IMedianizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMedianizer {
    return new Contract(address, _abi, signerOrProvider) as IMedianizer;
  }
}
