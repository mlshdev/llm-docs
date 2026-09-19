> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/promotionaloffers

# promotionalOffers

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of promotional offers available for the auto-renewable subscription.

## Declaration

```swift
let promotionalOffers: [Product.SubscriptionOffer]
```

<a id="Discussion"></a>

## Discussion

This array is empty if you haven’t set up promotional offers in App Store Connect.

For more information about promotional offers, see [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).
