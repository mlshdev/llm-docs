> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/bundlesubscriptiongroupid](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/bundlesubscriptiongroupid)

# bundleSubscriptionGroupID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Identifies the subscription bundle group the next renewal is for.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, tvOS 27.0, watchOS 27.0, visionOS 27.0)
var bundleSubscriptionGroupID: String? { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Only for renewals of subscriptions included in a bundle.
