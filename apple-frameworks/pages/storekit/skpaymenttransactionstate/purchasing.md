> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionstate/purchasing](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate/purchasing)

# SKPaymentTransactionState.purchasing (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A transaction that is being processed by the App Store.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
case purchasing
```

## Mentioned In

- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Processing a transaction](../processing-a-transaction.md)
- [Testing an interrupted purchase](../testing-an-interrupted-purchase.md)

## See Also

### Constants

- [SKPaymentTransactionState.purchased](purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionState.failed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionState.restored](restored.md): Deprecated. A transaction that restores content previously purchased by the user.
- [SKPaymentTransactionState.deferred](deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

# SKPaymentTransactionStatePurchasing (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A transaction that is being processed by the App Store.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
SKPaymentTransactionStatePurchasing
```

## Mentioned In

- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Processing a transaction](../processing-a-transaction.md)
- [Testing an interrupted purchase](../testing-an-interrupted-purchase.md)

## See Also

### Constants

- [SKPaymentTransactionStatePurchased](purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionStateFailed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionStateRestored](restored.md): Deprecated. A transaction that restores content previously purchased by the user.
- [SKPaymentTransactionStateDeferred](deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.
