> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/status(transactionid:)](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status(transactionid:))

# status(transactionID:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Gets the subscription status for a transaction ID.

## Declaration

```swift
static func status(transactionID: UInt64) async throws -> SubscriptionStatus?
```

## See Also

### Determining the subscription status

- [status](status-swift.property.md): An array that contains status information for a subscription group, including renewal and transaction information.
- [status(for:)](status%28for_%29.md): Gets the subscription status for a subscription group identifier.
- [Product.SubscriptionInfo.Status](status-swift.struct.md): The renewal status information for an auto-renewable subscription.
