> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/currententitlements](https://developer.apple.com/documentation/storekit/transaction/currententitlements)

# currentEntitlements

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A sequence of the latest transactions that entitle a customer to In-App Purchases and subscriptions.

## Declaration

```swift
static var currentEntitlements: Transaction.Transactions { get }
```

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)
- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)
- [Getting started with In-App Purchase using StoreKit views](../getting-started-with-in-app-purchases-using-storekit-views.md)
- [Supporting business model changes by using the app transaction](../supporting-business-model-changes-by-using-the-app-transaction.md)
- [Supporting monthly subscriptions with a 12-month commitment](../supporting-monthly-subscriptions-with-a-12-month-commitment.md)

<a id="Discussion"></a>

## Discussion

The current entitlements sequence emits the latest transaction for each product the customer has an entitlement to, specifically:

- A transaction for each non-consumable In-App Purchase
- The latest transaction for each auto-renewable subscription that has a [Product.SubscriptionInfo.RenewalState](../product/subscriptioninfo/renewalstate.md) state of [subscribed](../product/subscriptioninfo/renewalstate/subscribed.md) or [inGracePeriod](../product/subscriptioninfo/renewalstate/ingraceperiod.md)
- The latest transaction for each non-renewing subscription, including finished ones

Products that the App Store has refunded or revoked don’t appear in the current entitlements. Consumable In-App Purchases also don’t appear in the current entitlements. To get transactions for unfinished consumables, use the [unfinished](unfinished.md) or [all](all.md) sequences in [Transaction](../transaction.md).

The following example illustrates iterating through the current entitlements:

```swift
func refreshPurchasedProducts() async {
    // Iterate through the user's purchased products.
    for await verificationResult in Transaction.currentEntitlements {
        switch verificationResult {
        case .verified(let transaction):
            // Check the type of product for the transaction
            // and provide access to the content as appropriate.
            ...
        case .unverified(let unverifiedTransaction, let verificationError):
            // Handle unverified transactions based on your
            // business model.
            ...
        }
    }
}
```

## See Also

### Transaction history and entitlements

- [Transaction](../transaction.md): Information that represents the customer’s purchase of a product in your app.
- [updates](updates.md): The asynchronous sequence that emits a transaction when the system creates or updates transactions that occur outside the app or on other devices.
- [all](all.md): A sequence that emits all the customer’s transactions for your app.
