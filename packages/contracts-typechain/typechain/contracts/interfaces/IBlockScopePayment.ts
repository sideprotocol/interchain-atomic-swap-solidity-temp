/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IBlockScopePaymentInterface extends utils.Interface {
  functions: {};

  events: {
    "PaymentReceived(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
}

export interface PaymentReceivedEventObject {
  payer: string;
  amount: BigNumber;
  daoShare: BigNumber;
  burned: BigNumber;
}
export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  PaymentReceivedEventObject
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export interface IBlockScopePayment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBlockScopePaymentInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "PaymentReceived(address,uint256,uint256,uint256)"(
      payer?: PromiseOrValue<string> | null,
      amount?: null,
      daoShare?: null,
      burned?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(
      payer?: PromiseOrValue<string> | null,
      amount?: null,
      daoShare?: null,
      burned?: null
    ): PaymentReceivedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
