> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscription](https://developer.apple.com/documentation/storekit/product/subscription)

# subscription

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The subscription information for an auto-renewable subscripton.

## Declaration

```swift
let subscription: Product.SubscriptionInfo?
```

<a id="Discussion"></a>

## Discussion

A `nil` value indicates that this product isn’t an auto-renewable subscription.

For more information about subscriptions, see [Auto-renewable Subscriptions](https://developer.apple.com/app-store/subscriptions/#groups).

## See Also

### Getting subscription information

- [Product.SubscriptionInfo](subscriptioninfo.md): Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.
- [Product.SubscriptionPeriod](subscriptionperiod.md): Values that represent the duration of time between subscription renewals.
- [Product.SubscriptionOffer](subscriptionoffer.md): Information about a subscription offer that you configure in App Store Connect.
- [Product.SubscriptionInfo.Status](subscriptioninfo/status-swift.struct.md): The renewal status information for an auto-renewable subscription.
