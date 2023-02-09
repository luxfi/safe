/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Proxy_factory,
  Proxy_factoryInterface,
} from "../../v1.0.0/Proxy_factory";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_mastercopy",
        type: "address",
      },
      {
        name: "initializer",
        type: "bytes",
      },
      {
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "createProxyWithNonce",
    outputs: [
      {
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyCreationCode",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "masterCopy",
        type: "address",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "createProxy",
    outputs: [
      {
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyRuntimeCode",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "proxy",
        type: "address",
      },
    ],
    name: "ProxyCreation",
    type: "event",
  },
] as const;

export class Proxy_factory__factory {
  static readonly abi = _abi;
  static createInterface(): Proxy_factoryInterface {
    return new utils.Interface(_abi) as Proxy_factoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Proxy_factory {
    return new Contract(address, _abi, signerOrProvider) as Proxy_factory;
  }
}