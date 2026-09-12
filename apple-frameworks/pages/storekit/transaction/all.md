> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/all](https://developer.apple.com/documentation/storekit/transaction/all)

# all

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A sequence that emits all the customer’s transactions for your app.

## Declaration

```swift
static var all: Transaction.Transactions { get }
```

## Mentioned In

- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)
- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This sequence returns the customer’s transaction history current to the moment you access it. The sequence emits a finite number of transactions. If the App Store processes additional transactions for the customer while you’re accessing this sequence, they appear in the transaction listener [updates](updates.md).

The transaction history includes the following in-app purchases:

- Unfinished consumables
- Finished consumables that are refunded or revoked
- Non-consumables
- Auto-renewable subscriptions, including all renewals
- Auto-renewable subscriptions and non-consumables that the customer gets through Family Sharing

By default, when the [SKIncludeConsumableInAppPurchaseHistory](../../bundleresources/information-property-list/skincludeconsumableinapppurchasehistory.md) property list key is `false`, the transaction information excludes finished consumables (unless refunded or revoked).

To get all possible transactions, including all finished consumables, set the [SKIncludeConsumableInAppPurchaseHistory](../../bundleresources/information-property-list/skincludeconsumableinapppurchasehistory.md) property list key to `true`.

## See Also

### Transaction history and entitlements

- [Transaction](../transaction.md): Information that represents the customer’s purchase of a product in your app.
- [updates](updates.md): The asynchronous sequence that emits a transaction when the system creates or updates transactions that occur outside the app or on other devices.
- [currentEntitlements](currententitlements.md): A sequence of the latest transactions that entitle a customer to In-App Purchases and subscriptions.
