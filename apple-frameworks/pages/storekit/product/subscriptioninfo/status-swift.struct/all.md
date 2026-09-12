> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status-swift.struct/all](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.struct/all)

# all

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static var all: AsyncStream<(groupID: String, statuses: [Product.SubscriptionInfo.Status])> { get }
```

## See Also

### Monitoring subscription status changes

- [updates](updates.md): The asynchronous sequence that emits status information when a subscription’s status changes.
- [Product.SubscriptionInfo.Status.Statuses](statuses.md): An asynchronous sequence that listens for new subscription status information.
