> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionstate/deferred](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate/deferred)

# SKPaymentTransactionState.deferred (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

> Use PurchaseResult.pending from Product.purchase(confirmIn:options:).

## Declaration

```swift
case deferred
```

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)

<a id="Discussion"></a>

## Discussion

Update your UI to show the deferred state, and wait for another callback that indicates the final status.

## See Also

### Constants

- [SKPaymentTransactionState.purchasing](purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionState.purchased](purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionState.failed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionState.restored](restored.md): Deprecated. A transaction that restores content previously purchased by the user.

# SKPaymentTransactionStateDeferred (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

> Use PurchaseResult.pending from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
SKPaymentTransactionStateDeferred
```

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)

<a id="Discussion"></a>

## Discussion

Update your UI to show the deferred state, and wait for another callback that indicates the final status.

## See Also

### Constants

- [SKPaymentTransactionStatePurchasing](purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionStatePurchased](purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionStateFailed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionStateRestored](restored.md): Deprecated. A transaction that restores content previously purchased by the user.
