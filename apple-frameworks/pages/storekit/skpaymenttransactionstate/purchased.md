> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionstate/purchased](https://developer.apple.com/documentation/storekit/skpaymenttransactionstate/purchased)

# SKPaymentTransactionState.purchased (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A successfully processed transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```swift
case purchased
```

## Mentioned In

- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)
- [Processing a transaction](../processing-a-transaction.md)
- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)
- [Testing a successful transaction](../testing-a-successful-transaction.md)
- [Testing an interrupted purchase](../testing-an-interrupted-purchase.md)
- [Testing resubscribing from the subscriptions page](../testing-resubscribing-from-the-subscriptions-page.md)

<a id="Discussion"></a>

## Discussion

Your application should provide the content the user purchased.

## See Also

### Constants

- [SKPaymentTransactionState.purchasing](purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionState.failed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionState.restored](restored.md): Deprecated. A transaction that restores content previously purchased by the user.
- [SKPaymentTransactionState.deferred](deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.

# SKPaymentTransactionStatePurchased (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A successfully processed transaction.

> Use PurchaseResult from Product.purchase(confirmIn:options:).

## Declaration

```objectivec
SKPaymentTransactionStatePurchased
```

## Mentioned In

- [Testing In-App Purchases in Xcode](../testing-in-app-purchases-in-xcode.md)
- [Implementing offer codes in your app](../implementing-offer-codes-in-your-app.md)
- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)
- [Processing a transaction](../processing-a-transaction.md)
- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)
- [Testing a successful transaction](../testing-a-successful-transaction.md)
- [Testing an interrupted purchase](../testing-an-interrupted-purchase.md)
- [Testing resubscribing from the subscriptions page](../testing-resubscribing-from-the-subscriptions-page.md)

<a id="Discussion"></a>

## Discussion

Your application should provide the content the user purchased.

## See Also

### Constants

- [SKPaymentTransactionStatePurchasing](purchasing.md): Deprecated. A transaction that is being processed by the App Store.
- [SKPaymentTransactionStateFailed](failed.md): Deprecated. A failed transaction.
- [SKPaymentTransactionStateRestored](restored.md): Deprecated. A transaction that restores content previously purchased by the user.
- [SKPaymentTransactionStateDeferred](deferred.md): Deprecated. A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.
