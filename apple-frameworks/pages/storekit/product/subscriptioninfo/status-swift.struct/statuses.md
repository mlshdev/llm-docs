> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status-swift.struct/statuses](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.struct/statuses)

# Product.SubscriptionInfo.Status.Statuses

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous sequence that listens for new subscription status information.

## Declaration

```swift
struct Statuses
```

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring subscription status changes

- [updates](updates.md): The asynchronous sequence that emits status information when a subscription’s status changes.
- [all](all.md)
