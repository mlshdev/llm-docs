> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/testing-complete-transactions](https://developer.apple.com/documentation/storekit/testing-complete-transactions)

# Testing complete transactions (Swift)

**Framework:** StoreKit  
**Kind:** Article

Verify that your app completes transactions properly by confirming that any downloadable purchases are present on your test device.

<a id="overview"></a>

## Overview

Locate where your app calls the [finishTransaction(\_:)](skpaymentqueue/finishtransaction%28__%29.md) method, and verify that your app completes all work related to the transaction before calling the method. For example, if the purchase includes downloadable content, verify your app downloaded the content to your test device as described in [Persisting a purchase](persisting-a-purchase.md). Verify that you call [finishTransaction(\_:)](skpaymentqueue/finishtransaction%28__%29.md) for every transaction, whether it succeeded or failed. For more information, see [Finishing a transaction](finishing-a-transaction.md).

## See Also

### Transaction observer

- [Testing transaction observer code](testing-transaction-observer-code.md): Verify that your app activates its payment transaction observer by using breakpoints.
- [Testing a successful transaction](testing-a-successful-transaction.md): Confirm that your app can make a successful transaction in the sandbox environment by inspecting the transaction.

# Testing complete transactions (Objective-C)

**Framework:** StoreKit  
**Kind:** Article

Verify that your app completes transactions properly by confirming that any downloadable purchases are present on your test device.

<a id="overview"></a>

## Overview

Locate where your app calls the [finishTransaction:](skpaymentqueue/finishtransaction%28__%29.md) method, and verify that your app completes all work related to the transaction before calling the method. For example, if the purchase includes downloadable content, verify your app downloaded the content to your test device as described in [Persisting a purchase](persisting-a-purchase.md). Verify that you call [finishTransaction:](skpaymentqueue/finishtransaction%28__%29.md) for every transaction, whether it succeeded or failed. For more information, see [Finishing a transaction](finishing-a-transaction.md).

## See Also

### Transaction observer

- [Testing transaction observer code](testing-transaction-observer-code.md): Verify that your app activates its payment transaction observer by using breakpoints.
- [Testing a successful transaction](testing-a-successful-transaction.md): Confirm that your app can make a successful transaction in the sandbox environment by inspecting the transaction.
