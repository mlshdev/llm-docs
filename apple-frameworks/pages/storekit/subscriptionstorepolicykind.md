> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorepolicykind](https://developer.apple.com/documentation/storekit/subscriptionstorepolicykind)

# SubscriptionStorePolicyKind

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The type of policy, such as the terms of service or privacy policies.

## Declaration

```swift
struct SubscriptionStorePolicyKind
```

<a id="overview"></a>

## Overview

To set the destination of a policy button in a [SubscriptionStoreView](subscriptionstoreview.md), use [subscriptionStorePolicyDestination(url:for:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicydestination%28url:for:%29) or [subscriptionStorePolicyDestination(for:destination:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicydestination%28for:destination:%29).

## Topics

### Getting policy types

- [privacyPolicy](subscriptionstorepolicykind/privacypolicy.md): The privacy policy type.
- [termsOfService](subscriptionstorepolicykind/termsofservice.md): The terms of service policy type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring the subscription store policies

- [subscriptionStorePolicyDestination(for:destination:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicydestination%28for:destination:%29): Configures a view as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyDestination(url:for:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicydestination%28url:for:%29): Configures a URL as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyForegroundStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle%28_:%29): Sets the style for the terms of service and privacy policy buttons within a subscription store view.
- [subscriptionStorePolicyForegroundStyle(\_:\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle%28_:_:%29): Sets the primary and secondary style for the terms of service and privacy policy buttons within a subscription store view.
