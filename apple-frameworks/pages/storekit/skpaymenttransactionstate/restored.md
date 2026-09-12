> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionstate/restored](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate/restored)

# SKPaymentTransactionState.restored (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A transaction that restores content previously purchased by the user.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
case restored
```

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)
- [Restoring purchased products](../restoring-purchased-products.md)
- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Read the [original](../skpaymenttransaction/original.md) property to obtain information about the original purchase.

## See Also

### Constants

- [SKPaymentTransactionState.purchasing](purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionState.purchased](purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionState.failed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionState.deferred](deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

# SKPaymentTransactionStateRestored (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A transaction that restores content previously purchased by the user.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
SKPaymentTransactionStateRestored
```

## Mentioned In

- [Processing a transaction](../processing-a-transaction.md)
- [Restoring purchased products](../restoring-purchased-products.md)
- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Read the [originalTransaction](../skpaymenttransaction/original.md) property to obtain information about the original purchase.

## See Also

### Constants

- [SKPaymentTransactionStatePurchasing](purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionStatePurchased](purchased.md): Deprecated. A successfully processed transaction.
- [SKPaymentTransactionStateFailed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionStateDeferred](deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.
