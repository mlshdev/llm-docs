> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionstate](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate)

# SKPaymentTransactionState (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the state of a transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
enum SKPaymentTransactionState
```

## Topics

### Constants

- [SKPaymentTransactionState.purchasing](skpaymenttransactionstate/purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionState.purchased](skpaymenttransactionstate/purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionState.failed](skpaymenttransactionstate/failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionState.restored](skpaymenttransactionstate/restored.md): Deprecated. A transaction that restores content previously purchased by the user.
- [SKPaymentTransactionState.deferred](skpaymenttransactionstate/deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

### Initializers

- [init(rawValue:)](skpaymenttransactionstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Transaction State

- [transactionState](skpaymenttransaction/transactionstate.md): Deprecated. The current state of the transaction.

# SKPaymentTransactionState (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the state of a transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
enum SKPaymentTransactionState : NSInteger;
```

## Topics

### Constants

- [SKPaymentTransactionStatePurchasing](skpaymenttransactionstate/purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionStatePurchased](skpaymenttransactionstate/purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionStateFailed](skpaymenttransactionstate/failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionStateRestored](skpaymenttransactionstate/restored.md): Deprecated. A transaction that restores content previously purchased by the user.
- [SKPaymentTransactionStateDeferred](skpaymenttransactionstate/deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

## See Also

### Getting Transaction State

- [transactionState](skpaymenttransaction/transactionstate.md): Deprecated. The current state of the transaction.
