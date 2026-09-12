> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/unfinished](https://developer.apple.com/documentation/storekit/transaction/unfinished)

# unfinished

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A sequence that emits unfinished transactions for the customer.

## Declaration

```swift
static var unfinished: Transaction.Transactions { get }
```

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Getting started with In-App Purchase using StoreKit views](../getting-started-with-in-app-purchases-using-storekit-views.md)

<a id="Discussion"></a>

## Discussion

A transaction is unfinished until you call [finish()](finish%28%29.md). Use the [unfinished](unfinished.md) sequence to find the transactions your app needs to process to deliver purchased content or enable service.

## See Also

### Getting transaction history

- [latest(for:)](latest%28for_%29.md): Gets the customer’s most recent transaction for an In-App Purchase.
- [all](all.md): A sequence that emits all the customer’s transactions for your app.
- [SKIncludeConsumableInAppPurchaseHistory](../../bundleresources/information-property-list/skincludeconsumableinapppurchasehistory.md): A Boolean value that determines whether StoreKit includes finished consumable In-App Purchases in transaction information.
