> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished(_:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueuerestorecompletedtransactionsfinished(_:))

# paymentQueueRestoreCompletedTransactionsFinished(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the observer that the payment queue has finished sending restored transactions.

> Use AppStore.sync().

## Declaration

```swift
optional func paymentQueueRestoreCompletedTransactionsFinished(_ queue: SKPaymentQueue)
```

## Parameters

- `queue`: The payment queue that restored the transactions.

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)

<a id="Discussion"></a>

## Discussion

This method is called after all restorable transactions have been processed by the payment queue. Your application is not required to do anything in this method.

## See Also

### Restoring transactions

- [paymentQueue(\_:restoreCompletedTransactionsFailedWithError:)](paymentqueue%28__restorecompletedtransactionsfailedwitherror_%29.md): Deprecated. Tells the observer that an error occurred while restoring transactions.

# paymentQueueRestoreCompletedTransactionsFinished: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the observer that the payment queue has finished sending restored transactions.

> Use AppStore.sync().

## Declaration

```objectivec
- (void) paymentQueueRestoreCompletedTransactionsFinished:(SKPaymentQueue *) queue;
```

## Parameters

- `queue`: The payment queue that restored the transactions.

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)
- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)

<a id="Discussion"></a>

## Discussion

This method is called after all restorable transactions have been processed by the payment queue. Your application is not required to do anything in this method.

## See Also

### Restoring transactions

- [paymentQueue:restoreCompletedTransactionsFailedWithError:](paymentqueue%28__restorecompletedtransactionsfailedwitherror_%29.md): Deprecated. Tells the observer that an error occurred while restoring transactions.
