> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/advancedcommerceinfo-swift.struct/item/priceincreaseinfo-swift.struct/status-swift.struct/scheduled

# scheduled

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

A value that indicates the App Store scheduled the price increase for the subscription renewal.

## Declaration

```swift
static let scheduled: Product.SubscriptionInfo.RenewalInfo.AdvancedCommerceInfo.Item.PriceIncreaseInfo.Status
```

## See Also

### Price increase status values

- [pending](pending.md): A value that indicates the App Store is waiting for customer consent for the price increase for the subscription renewal.
- [accepted](accepted.md): A value that indicates a customer accepted the new subscription price.
