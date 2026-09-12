> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalstate](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalstate)

# Product.SubscriptionInfo.RenewalState

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The renewal states of auto-renewable subscriptions.

## Declaration

```swift
struct RenewalState
```

## Mentioned In

- [Testing failing subscription renewals and In-App Purchases](../../testing-failing-subscription-renewals-and-in-app-purchases.md)
- [Testing In-App Purchases in Xcode](../../testing-in-app-purchases-in-xcode.md)

<a id="overview"></a>

## Overview

A subscription’s renewal state indicates whether an auto-renewable subscription is entitled to service. Subscriptions in the [subscribed](renewalstate/subscribed.md) and [inGracePeriod](renewalstate/ingraceperiod.md) states are entitled to service.

Subscriptions in the [expired](renewalstate/expired.md), [inBillingRetryPeriod](renewalstate/inbillingretryperiod.md), and [revoked](renewalstate/revoked.md) states aren’t entitled to service if the customer doesn’t have other [Product.SubscriptionInfo.Status](status-swift.struct.md) items that give them entitlement to service for that subscription. For example, a customer may have a status in the [expired](renewalstate/expired.md) state for a subscription that they purchased individually, and another status in the [subscribed](renewalstate/subscribed.md) state for the same subscription, which they get through Family Sharing. In that case, the customer has an entitlement to service for that subscription.

For more information about Family Sharing, see [Supporting Family Sharing in your app](../../supporting-family-sharing-in-your-app.md). For more information about entitlements, see [currentEntitlements](../../transaction/currententitlements.md).

## Topics

### Getting the renewal state

- [subscribed](renewalstate/subscribed.md): The customer is currently subscribed.
- [expired](renewalstate/expired.md): The subscription expired.
- [inBillingRetryPeriod](renewalstate/inbillingretryperiod.md): The subscription is in a billing retry period.
- [inGracePeriod](renewalstate/ingraceperiod.md): The subscription is in a billing grace period state.
- [revoked](renewalstate/revoked.md): The App Store has revoked the customer’s access to the subscription group.

### Getting a localized description

- [localizedDescription](renewalstate/localizeddescription.md): A string containing the localized description of the renewal state.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Subscription status and renewal information

- [Product.SubscriptionInfo.Status](status-swift.struct.md): The renewal status information for an auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalInfo](renewalinfo.md): The renewal information for an auto-renewable subscription.
- [SubscriptionRenewalInfo](../../subscriptionrenewalinfo.md): Represents the renewal information for an auto-renewable subscription.
- [SubscriptionRenewalState](../../subscriptionrenewalstate.md): The renewal states of auto-renewable subscriptions.
- [SubscriptionPeriod](../../subscriptionperiod.md): Represents the duration of time between subscription renewals.
