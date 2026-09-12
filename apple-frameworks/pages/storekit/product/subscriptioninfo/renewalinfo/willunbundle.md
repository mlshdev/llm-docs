> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/willunbundle](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/willunbundle)

# willUnbundle

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Whether the subscription will leave the bundle at the next renewal and renew as a standalone product.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, tvOS 27.0, watchOS 27.0, visionOS 27.0)
var willUnbundle: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Only for renewals of subscriptions included in a bundle.
