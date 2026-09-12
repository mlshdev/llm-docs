> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/bundledsubscriptions](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/bundledsubscriptions)

# bundledSubscriptions

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Properties and functionality specific to auto-renewable subscriptions included in a subscription bundle.

## Declaration

```swift
let bundledSubscriptions: [Product.SubscriptionInfo.BundledSubscription]
```

<a id="discussion"></a>

## Discussion

This list is only populated if `type` is `.subscriptionBundle`, and always empty for all other product types.
