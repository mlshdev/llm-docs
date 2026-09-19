> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.struct/updates

# updates

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The asynchronous sequence that emits status information when a subscription’s status changes.

## Declaration

```swift
static var updates: Product.SubscriptionInfo.Status.Statuses { get }
```

## Mentioned In

- [Managing Price Increases for Auto-Renewable Subscriptions](../../../managing-price-increases-for-auto-renewable-subscriptions.md)

## See Also

### Monitoring subscription status changes

- [all](all.md)
- [Product.SubscriptionInfo.Status.Statuses](statuses.md): An asynchronous sequence that listens for new subscription status information.
