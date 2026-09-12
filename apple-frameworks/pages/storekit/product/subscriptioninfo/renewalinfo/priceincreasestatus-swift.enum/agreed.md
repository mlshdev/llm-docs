> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/agreed)

# Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.agreed

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The auto-renewable subscription is subject to a price increase.

## Declaration

```swift
case agreed
```

## Mentioned In

- [Managing Price Increases for Auto-Renewable Subscriptions](../../../../managing-price-increases-for-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

There are two types of price increases for auto-renewable subscriptions: those that require customer consent, and those that don’t require customer consent. For a price increase that requires customer consent, this value indicates that the customer consented to the price increase. For a price increase that doesn’t require customer consent, this value indicates that the App Store informed the customer of the price increase and the subscription is subject to the price increase.

For more information about this value, see [Managing Price Increases for Auto-Renewable Subscriptions](../../../../managing-price-increases-for-auto-renewable-subscriptions.md).

## See Also

### Getting Price Increase Status

- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.noIncreasePending](noincreasepending.md): There’s no pending price increase for the auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.pending](pending.md): The customer hasn’t yet responded to an auto-renewable subscription price increase that requires customer consent.
