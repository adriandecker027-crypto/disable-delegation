import { sepolia as chain } from 'viem/chains'
import { createPublicClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from "viem/accounts"
import { createBundlerClient } from 'viem/account-abstraction'
import { getSmartAccountsEnvironment, createDelegation } from '@metamask/smart-accounts-kit'

const delegatorAccount = privateKeyToAccount("0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

export const environment = getSmartAccountsEnvironment(chain.id)

const currentTime = Math.floor(Date.now() / 1000)

export const delegation = createDelegation({
  scope: {
    type: 'nativeTokenPeriodTransfer',
    periodAmount: parseEther('0.01'),
    periodDuration: 86400,
    startDate: currentTime,
  },
  to: delegateAccount,
  from: delegatorAccount,
  environment: environment,
})

const publicClient = createPublicClient({
  chain,
  transport: http()
})

export const bundlerClient = createBundlerClient({
  client: publicClient,
  transport: http('https://api.pimlico.io/v2/11155111/rpc?apikey=pim_PtxNUPasJiv8BDMuDCZ3GG')
});