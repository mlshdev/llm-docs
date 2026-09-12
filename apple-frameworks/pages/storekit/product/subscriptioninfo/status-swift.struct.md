> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status-swift.struct](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.struct)

# Product.SubscriptionInfo.Status

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The renewal status information for an auto-renewable subscription.

## Declaration

```swift
struct Status
```

## Mentioned In

- [Choosing a StoreKit API for In-App Purchases](../../choosing-a-storekit-api-for-in-app-purchases.md)

<a id="overview"></a>

## Overview

The subscription status provides renewal information signed by the App Store for subscriptions that a customer purchases.

## Topics

### Monitoring subscription status changes

- [updates](status-swift.struct/updates.md): The asynchronous sequence that emits status information when a subscription’s status changes.
- [all](status-swift.struct/all.md)
- [Product.SubscriptionInfo.Status.Statuses](status-swift.struct/statuses.md): An asynchronous sequence that listens for new subscription status information.

### Getting subscription status information

- [state](status-swift.struct/state.md): The renewal state of the auto-renewable subscription.
- [renewalInfo](status-swift.struct/renewalinfo.md): The signed renewal information for the auto-renewable subscription.
- [transaction](status-swift.struct/transaction.md): The latest transaction for the subscription group.
- [Product.SubscriptionInfo.RenewalInfo](renewalinfo.md): The renewal information for an auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalState](renewalstate.md): The renewal states of auto-renewable subscriptions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Subscription status and renewal information

- [Product.SubscriptionInfo.RenewalInfo](renewalinfo.md): The renewal information for an auto-renewable subscription.
- [SubscriptionRenewalInfo](../../subscriptionrenewalinfo.md): Represents the renewal information for an auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalState](renewalstate.md): The renewal states of auto-renewable subscriptions.
- [SubscriptionRenewalState](../../subscriptionrenewalstate.md): The renewal states of auto-renewable subscriptions.
- [SubscriptionPeriod](../../subscriptionperiod.md): Represents the duration of time between subscription renewals.
