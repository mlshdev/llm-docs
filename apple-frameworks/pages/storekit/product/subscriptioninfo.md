> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo](https://developer.apple.com/documentation/storekit/product/subscriptioninfo)

# Product.SubscriptionInfo

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.

## Declaration

```swift
struct SubscriptionInfo
```

## Mentioned In

- [Choosing a StoreKit API for In-App Purchases](../choosing-a-storekit-api-for-in-app-purchases.md)
- [Merchandising win-back offers in your app](../merchandising-win-back-offers-in-your-app.md)

## Topics

### Determining the subscription status

- [status](subscriptioninfo/status-swift.property.md): An array that contains status information for a subscription group, including renewal and transaction information.
- [status(for:)](subscriptioninfo/status%28for_%29.md): Gets the subscription status for a subscription group identifier.
- [status(transactionID:)](subscriptioninfo/status%28transactionid_%29.md): Gets the subscription status for a transaction ID.
- [Product.SubscriptionInfo.Status](subscriptioninfo/status-swift.struct.md): The renewal status information for an auto-renewable subscription.

### Identifying the subscription group

- [subscriptionGroupID](subscriptioninfo/subscriptiongroupid.md): The subscription group identifier for this subscription.
- [groupDisplayName](subscriptioninfo/groupdisplayname.md): The localized name of the subscription group, suitable for display.
- [groupLevel](subscriptioninfo/grouplevel.md): The rank of the subscription relative to other subscriptions in the same subscription group.

### Getting the subscription period

- [subscriptionPeriod](subscriptioninfo/subscriptionperiod.md): The duration of time between subscription renewals.
- [Product.SubscriptionPeriod](subscriptionperiod.md): Values that represent the duration of time between subscription renewals.

### Getting introductory offer details

- [isEligibleForIntroOffer](subscriptioninfo/iseligibleforintrooffer.md): A Boolean value that indicates whether the customer is eligible for an introductory offer.
- [isEligibleForIntroOffer(for:)](subscriptioninfo/iseligibleforintrooffer%28for_%29.md): Returns a Boolean value that determines the customer’s eligibility for an introductory offer within the provided subscription group.
- [introductoryOffer](subscriptioninfo/introductoryoffer.md): Information about the introductory offer available for the auto-renewable subscription.
- [Product.SubscriptionOffer](subscriptionoffer.md): Information about a subscription offer that you configure in App Store Connect.

### Getting win-back offer details

- [winBackOffers](subscriptioninfo/winbackoffers.md): An array of available win-back offers for the auto-renewable subscription that you configured in App Store Connect.

### Getting promotional offer details

- [promotionalOffers](subscriptioninfo/promotionaloffers.md): An array of promotional offers available for the auto-renewable subscription.

### Getting subscription renewal information

- [Product.SubscriptionInfo.RenewalInfo](subscriptioninfo/renewalinfo.md): The renewal information for an auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalState](subscriptioninfo/renewalstate.md): The renewal states of auto-renewable subscriptions.

### Structures

- [Product.SubscriptionInfo.BillingPlanType](subscriptioninfo/billingplantype.md)
- [Product.SubscriptionInfo.BundledSubscription](subscriptioninfo/bundledsubscription.md): Properties and functionality specific to auto-renewable subscriptions included in a subscription bundle.
- [Product.SubscriptionInfo.CommitmentInfo](subscriptioninfo/commitmentinfo.md)
- [Product.SubscriptionInfo.PricingTerms](subscriptioninfo/pricingterms-swift.struct.md)

### Instance Properties

- [bundledSubscriptions](subscriptioninfo/bundledsubscriptions.md): Properties and functionality specific to auto-renewable subscriptions included in a subscription bundle.
- [pricingTerms](subscriptioninfo/pricingterms-swift.property.md)

### Type Aliases

- [Product.SubscriptionInfo.BillingPeriod](subscriptioninfo/billingperiod.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Product and subscription information

- [Implementing a store in your app using the StoreKit API](../implementing-a-store-in-your-app-using-the-storekit-api.md): Offer In-App Purchases and manage entitlements using signed transactions and status information.
- [Supporting monthly subscriptions with a 12-month commitment](../supporting-monthly-subscriptions-with-a-12-month-commitment.md): Configure, merchandise, and grant access to a monthly subscription with a 12-month commitment.
- [Managing the life cycle of monthly subscriptions with a 12-month commitment](../managing-lifecycle-of-monthly-subscriptions-with-a-12-month-commitment-.md): Handle renewals, cancellations, billing issues, refund requests, and price changes, and test subscriptions with a commitment plan.
- [Product](../product.md): Information about a product that you configure in App Store Connect.
- [SubscriptionInfo](../subscriptioninfo.md): Information about an auto-renewable subscription.
- [SubscriptionStatus](../subscriptionstatus.md): Represents the renewal status information for an auto-renewable subscription.
