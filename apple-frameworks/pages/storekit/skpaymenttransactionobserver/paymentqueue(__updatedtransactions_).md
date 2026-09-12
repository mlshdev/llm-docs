> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:updatedtransactions:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:updatedtransactions:))

# paymentQueue(\_:updatedTransactions:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells an observer that one or more transactions have been updated.

> Use StoreKit 2 Transaction APIs.

## Declaration

```swift
func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction])
```

## Parameters

- `queue`: The payment queue that updated the transactions.
- `transactions`: An array of the transactions that were updated.

## Mentioned In

- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Processing a transaction](../processing-a-transaction.md)
- [Testing a payment request](../testing-a-payment-request.md)
- [Testing a successful transaction](../testing-a-successful-transaction.md)
- [Testing resubscribing from the subscriptions page](../testing-resubscribing-from-the-subscriptions-page.md)

<a id="Discussion"></a>

## Discussion

The application should process each transaction by examining the transaction’s [transactionState](../skpaymenttransaction/transactionstate.md) property. If [transactionState](../skpaymenttransaction/transactionstate.md) is [SKPaymentTransactionState.purchased](../skpaymenttransactionstate/purchased.md), payment was successfully received for the desired functionality. The application should make the functionality available to the user. If [transactionState](../skpaymenttransaction/transactionstate.md) is [SKPaymentTransactionState.failed](../skpaymenttransactionstate/failed.md), the application can read the transaction’s error property to return a meaningful error to the user.

Once a transaction is processed, it should be removed from the payment queue by calling the payment queue’s [finishTransaction(\_:)](../skpaymentqueue/finishtransaction%28__%29.md) method, passing the transaction as a parameter.

> **Important**

>  Once the transaction is finished, StoreKit can’t tell you that this item is already purchased. It is important that applications process the transaction completely before calling [finishTransaction(\_:)](../skpaymentqueue/finishtransaction%28__%29.md).

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Handling transactions

- [paymentQueue(\_:removedTransactions:)](paymentqueue%28__removedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been removed from the queue.

# paymentQueue:updatedTransactions: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells an observer that one or more transactions have been updated.

> Use StoreKit 2 Transaction APIs.

## Declaration

```objectivec
- (void) paymentQueue:(SKPaymentQueue *) queue updatedTransactions:(NSArray<SKPaymentTransaction *> *) transactions;
```

## Parameters

- `queue`: The payment queue that updated the transactions.
- `transactions`: An array of the transactions that were updated.

## Mentioned In

- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Processing a transaction](../processing-a-transaction.md)
- [Testing a payment request](../testing-a-payment-request.md)
- [Testing a successful transaction](../testing-a-successful-transaction.md)
- [Testing resubscribing from the subscriptions page](../testing-resubscribing-from-the-subscriptions-page.md)

<a id="Discussion"></a>

## Discussion

The application should process each transaction by examining the transaction’s [transactionState](../skpaymenttransaction/transactionstate.md) property. If [transactionState](../skpaymenttransaction/transactionstate.md) is [SKPaymentTransactionStatePurchased](../skpaymenttransactionstate/purchased.md), payment was successfully received for the desired functionality. The application should make the functionality available to the user. If [transactionState](../skpaymenttransaction/transactionstate.md) is [SKPaymentTransactionStateFailed](../skpaymenttransactionstate/failed.md), the application can read the transaction’s error property to return a meaningful error to the user.

Once a transaction is processed, it should be removed from the payment queue by calling the payment queue’s [finishTransaction:](../skpaymentqueue/finishtransaction%28__%29.md) method, passing the transaction as a parameter.

> **Important**

>  Once the transaction is finished, StoreKit can’t tell you that this item is already purchased. It is important that applications process the transaction completely before calling [finishTransaction:](../skpaymentqueue/finishtransaction%28__%29.md).

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Handling transactions

- [paymentQueue:removedTransactions:](paymentqueue%28__removedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been removed from the queue.
