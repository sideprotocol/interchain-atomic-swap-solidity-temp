/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IStargateRouter {
  export type LzTxObjStruct = {
    dstGasForCall: PromiseOrValue<BigNumberish>;
    dstNativeAmount: PromiseOrValue<BigNumberish>;
    dstNativeAddr: PromiseOrValue<BytesLike>;
  };

  export type LzTxObjStructOutput = [BigNumber, BigNumber, string] & {
    dstGasForCall: BigNumber;
    dstNativeAmount: BigNumber;
    dstNativeAddr: string;
  };
}

export interface IStargateRouterInterface extends utils.Interface {
  functions: {
    "addLiquidity(uint256,uint256,address)": FunctionFragment;
    "instantRedeemLocal(uint16,uint256,address)": FunctionFragment;
    "quoteLayerZeroFee(uint16,uint8,bytes,bytes,(uint256,uint256,bytes))": FunctionFragment;
    "redeemLocal(uint16,uint256,uint256,address,uint256,bytes,(uint256,uint256,bytes))": FunctionFragment;
    "redeemRemote(uint16,uint256,uint256,address,uint256,uint256,bytes,(uint256,uint256,bytes))": FunctionFragment;
    "sendCredits(uint16,uint256,uint256,address)": FunctionFragment;
    "swap(uint16,uint256,uint256,address,uint256,uint256,(uint256,uint256,bytes),bytes,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidity"
      | "instantRedeemLocal"
      | "quoteLayerZeroFee"
      | "redeemLocal"
      | "redeemRemote"
      | "sendCredits"
      | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "instantRedeemLocal",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteLayerZeroFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      IStargateRouter.LzTxObjStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemLocal",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      IStargateRouter.LzTxObjStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemRemote",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      IStargateRouter.LzTxObjStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCredits",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      IStargateRouter.LzTxObjStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantRedeemLocal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteLayerZeroFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemLocal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendCredits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface IStargateRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStargateRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidity(
      _poolId: PromiseOrValue<BigNumberish>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    instantRedeemLocal(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteLayerZeroFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _functionType: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _transferAndCallPayload: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    redeemLocal(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemRemote(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendCredits(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      _to: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    _poolId: PromiseOrValue<BigNumberish>,
    _amountLD: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  instantRedeemLocal(
    _srcPoolId: PromiseOrValue<BigNumberish>,
    _amountLP: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteLayerZeroFee(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _functionType: PromiseOrValue<BigNumberish>,
    _toAddress: PromiseOrValue<BytesLike>,
    _transferAndCallPayload: PromiseOrValue<BytesLike>,
    _lzTxParams: IStargateRouter.LzTxObjStruct,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  redeemLocal(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _srcPoolId: PromiseOrValue<BigNumberish>,
    _dstPoolId: PromiseOrValue<BigNumberish>,
    _refundAddress: PromiseOrValue<string>,
    _amountLP: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<BytesLike>,
    _lzTxParams: IStargateRouter.LzTxObjStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemRemote(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _srcPoolId: PromiseOrValue<BigNumberish>,
    _dstPoolId: PromiseOrValue<BigNumberish>,
    _refundAddress: PromiseOrValue<string>,
    _amountLP: PromiseOrValue<BigNumberish>,
    _minAmountLD: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<BytesLike>,
    _lzTxParams: IStargateRouter.LzTxObjStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendCredits(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _srcPoolId: PromiseOrValue<BigNumberish>,
    _dstPoolId: PromiseOrValue<BigNumberish>,
    _refundAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _srcPoolId: PromiseOrValue<BigNumberish>,
    _dstPoolId: PromiseOrValue<BigNumberish>,
    _refundAddress: PromiseOrValue<string>,
    _amountLD: PromiseOrValue<BigNumberish>,
    _minAmountLD: PromiseOrValue<BigNumberish>,
    _lzTxParams: IStargateRouter.LzTxObjStruct,
    _to: PromiseOrValue<BytesLike>,
    _payload: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      _poolId: PromiseOrValue<BigNumberish>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    instantRedeemLocal(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteLayerZeroFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _functionType: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _transferAndCallPayload: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    redeemLocal(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    redeemRemote(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    sendCredits(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      _to: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      _poolId: PromiseOrValue<BigNumberish>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    instantRedeemLocal(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteLayerZeroFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _functionType: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _transferAndCallPayload: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemLocal(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemRemote(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendCredits(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      _to: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      _poolId: PromiseOrValue<BigNumberish>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    instantRedeemLocal(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteLayerZeroFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _functionType: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _transferAndCallPayload: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeemLocal(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemRemote(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLP: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendCredits(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _amountLD: PromiseOrValue<BigNumberish>,
      _minAmountLD: PromiseOrValue<BigNumberish>,
      _lzTxParams: IStargateRouter.LzTxObjStruct,
      _to: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
