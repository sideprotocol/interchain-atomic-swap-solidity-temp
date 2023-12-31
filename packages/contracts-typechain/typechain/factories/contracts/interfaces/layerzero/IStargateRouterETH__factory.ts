/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStargateRouterETH,
  IStargateRouterETHInterface,
} from "../../../../contracts/interfaces/layerzero/IStargateRouterETH";

const _abi = [
  {
    inputs: [],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16",
      },
      {
        internalType: "address payable",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "to",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountLD",
        type: "uint256",
      },
    ],
    name: "swapETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IStargateRouterETH__factory {
  static readonly abi = _abi;
  static createInterface(): IStargateRouterETHInterface {
    return new utils.Interface(_abi) as IStargateRouterETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStargateRouterETH {
    return new Contract(address, _abi, signerOrProvider) as IStargateRouterETH;
  }
}
