> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:removedtransactions:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:removedtransactions:))

# paymentQueue(\_:removedTransactions:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells an observer that one or more transactions have been removed from the queue.

> Use StoreKit 2 Transaction APIs.

## Declaration

```swift
optional func paymentQueue(_ queue: SKPaymentQueue, removedTransactions transactions: [SKPaymentTransaction])
```

## Parameters

- `queue`: The payment queue that updated the transactions.
- `transactions`: An array of the transactions that were removed.

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)

<a id="Discussion"></a>

## Discussion

Your application does not typically need to implement this method but might implement it to update its own user interface to reflect that a transaction has been completed.

## See Also

### Handling transactions

- [paymentQueue(\_:updatedTransactions:)](paymentqueue%28__updatedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been updated.

# paymentQueue:removedTransactions: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells an observer that one or more transactions have been removed from the queue.

> Use StoreKit 2 Transaction APIs.

## Declaration

```objectivec
- (void) paymentQueue:(SKPaymentQueue *) queue removedTransactions:(NSArray<SKPaymentTransaction *> *) transactions;
```

## Parameters

- `queue`: The payment queue that updated the transactions.
- `transactions`: An array of the transactions that were removed.

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)

<a id="Discussion"></a>

## Discussion

Your application does not typically need to implement this method but might implement it to update its own user interface to reflect that a transaction has been completed.

## See Also

### Handling transactions

- [paymentQueue:updatedTransactions:](paymentqueue%28__updatedtransactions_%29.md): Deprecated. Tells an observer that one or more transactions have been updated.
