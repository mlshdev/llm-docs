> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:restorecompletedtransactionsfailedwitherror:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:restorecompletedtransactionsfailedwitherror:))

# paymentQueue(\_:restoreCompletedTransactionsFailedWithError:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the observer that an error occurred while restoring transactions.

> Use AppStore.sync().

## Declaration

```swift
optional func paymentQueue(_ queue: SKPaymentQueue, restoreCompletedTransactionsFailedWithError error: any Error)
```

## Parameters

- `queue`: The payment queue that was restoring transactions.
- `error`: The error that occurred.

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)

## See Also

### Restoring transactions

- [paymentQueueRestoreCompletedTransactionsFinished(\_:)](paymentqueuerestorecompletedtransactionsfinished%28__%29.md): Deprecated. Tells the observer that the payment queue has finished sending restored transactions.

# paymentQueue:restoreCompletedTransactionsFailedWithError: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the observer that an error occurred while restoring transactions.

> Use AppStore.sync().

## Declaration

```objectivec
- (void) paymentQueue:(SKPaymentQueue *) queue restoreCompletedTransactionsFailedWithError:(NSError *) error;
```

## Parameters

- `queue`: The payment queue that was restoring transactions.
- `error`: The error that occurred.

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)

## See Also

### Restoring transactions

- [paymentQueueRestoreCompletedTransactionsFinished:](paymentqueuerestorecompletedtransactionsfinished%28__%29.md): Deprecated. Tells the observer that the payment queue has finished sending restored transactions.
