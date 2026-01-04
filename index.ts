import { DelegationManager } from '@metamask/smart-accounts-kit/contracts';
import { environment, delegation, bundlerClient } from "./config.ts";

const disableDelegationData = DelegationManager.encode.disableDelegation({
  delegation,
});

// Appropriate fee per gas must be determined for the specific bundler being used.
const maxFeePerGas = 1n;
const maxPriorityFeePerGas = 1n;

const userOperationHash = await bundlerClient.sendUserOperation({
  account: delegatorAccount,
  calls: [
    {
      to: environment.DelegationManager,
      data: disableDelegationData
    }
  ],
  maxFeePerGas,
  maxPriorityFeePerGas
});