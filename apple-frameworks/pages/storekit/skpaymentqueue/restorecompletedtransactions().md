> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/restorecompletedtransactions()](https://developer.apple.com/documentation/storekit/skpaymentqueue/restorecompletedtransactions())

# restoreCompletedTransactions() (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Asks the payment queue to restore previously completed purchases.

> Use AppStore.sync().

## Declaration

```swift
func restoreCompletedTransactions()
```

## Mentioned In

- [Choosing a receipt validation technique](../choosing-a-receipt-validation-technique.md)
- [Restoring purchased products](../restoring-purchased-products.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Validating receipts with the App Store](../validating-receipts-with-the-app-store.md)

<a id="Discussion"></a>

## Discussion

Use this method to restore finished transactions—that is, transactions for which you have already called [finishTransaction(\_:)](finishtransaction%28__%29.md). You call this method in one of the following situations:

- To install purchases on additional devices
- To restore purchases for an application that the user deleted and reinstalled

When you create a new product to be sold in your store, you choose whether that product can be restored or not. See the [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267) for more information.

The payment queue delivers a new transaction for each previously completed transaction that can be restored. Each transaction includes a copy of the original transaction.

After the transactions are delivered, the payment queue calls the observer’s [paymentQueueRestoreCompletedTransactionsFinished(\_:)](../skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished%28__%29.md) method. If an error occurred while restoring transactions, the observer will be notified through its [paymentQueue(\_:restoreCompletedTransactionsFailedWithError:)](../skpaymenttransactionobserver/paymentqueue%28__restorecompletedtransactionsfailedwitherror_%29.md) method.

This method has no effect in the following situations:

- All transactions are unfinished.
- The user did not purchase anything that is restorable.
- You tried to restore items that are not restorable, such as a non-renewing subscription or a consumable product.
- Your app’s build version does not meet the guidelines for the `CFBundleVersion` key.

> **Important**

>  If you are using the [In-App Purchase](../in-app-purchase.md) API and managing transactions using the [Transaction](../transaction.md) API, use [currentEntitlements](../transaction/currententitlements.md) to determine which in-app purchases the customer is currently entitled to. The [restoreCompletedTransactions()](restorecompletedtransactions%28%29.md) function doesn’t affect transactions in the [Transaction](../transaction.md) API. In rare cases when a user suspects the app isn’t showing all the transactions, call [sync()](../appstore/sync%28%29.md) in response to an explicit user action, like tapping a button.

## See Also

### Restoring Purchases

- [restoreCompletedTransactions(withApplicationUsername:)](restorecompletedtransactions%28withapplicationusername_%29.md): Deprecated. Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.

# restoreCompletedTransactions (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Asks the payment queue to restore previously completed purchases.

> Use AppStore.sync().

## Declaration

```objectivec
- (void) restoreCompletedTransactions;
```

## Mentioned In

- [Choosing a receipt validation technique](../choosing-a-receipt-validation-technique.md)
- [Restoring purchased products](../restoring-purchased-products.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Validating receipts with the App Store](../validating-receipts-with-the-app-store.md)

<a id="Discussion"></a>

## Discussion

Use this method to restore finished transactions—that is, transactions for which you have already called [finishTransaction:](finishtransaction%28__%29.md). You call this method in one of the following situations:

- To install purchases on additional devices
- To restore purchases for an application that the user deleted and reinstalled

When you create a new product to be sold in your store, you choose whether that product can be restored or not. See the [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267) for more information.

The payment queue delivers a new transaction for each previously completed transaction that can be restored. Each transaction includes a copy of the original transaction.

After the transactions are delivered, the payment queue calls the observer’s [paymentQueueRestoreCompletedTransactionsFinished:](../skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished%28__%29.md) method. If an error occurred while restoring transactions, the observer will be notified through its [paymentQueue:restoreCompletedTransactionsFailedWithError:](../skpaymenttransactionobserver/paymentqueue%28__restorecompletedtransactionsfailedwitherror_%29.md) method.

This method has no effect in the following situations:

- All transactions are unfinished.
- The user did not purchase anything that is restorable.
- You tried to restore items that are not restorable, such as a non-renewing subscription or a consumable product.
- Your app’s build version does not meet the guidelines for the `CFBundleVersion` key.

> **Important**

>  If you are using the [In-App Purchase](../in-app-purchase.md) API and managing transactions using the [Transaction](../transaction.md) API, use [currentEntitlements](../transaction/currententitlements.md) to determine which in-app purchases the customer is currently entitled to. The [restoreCompletedTransactions](restorecompletedtransactions%28%29.md) function doesn’t affect transactions in the [Transaction](../transaction.md) API. In rare cases when a user suspects the app isn’t showing all the transactions, call [sync()](../appstore/sync%28%29.md) in response to an explicit user action, like tapping a button.

## See Also

### Restoring Purchases

- [restoreCompletedTransactionsWithApplicationUsername:](restorecompletedtransactions%28withapplicationusername_%29.md): Deprecated. Asks the payment queue to restore previously completed purchases, providing an opaque identifier for the user’s account.
