> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer/id](https://developer.apple.com/documentation/storekit/product/subscriptionoffer/id)

# id

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The offer identifier.

## Declaration

```swift
let id: String?
```

## Mentioned In

- [Merchandising win-back offers in your app](../../merchandising-win-back-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [id](id.md) is a string that contains the alphanumeric offer identifier you provide when you configure an offer in App Store Connect.

This value is `nil` if the offer is an [introductory](offertype/introductory.md) offer.

Pass the [id](id.md) to a method in [purchase(options:)](../purchase%28options_%29.md) to create a purchase option based on the offer’s [type](type.md). For example, pass the [id](id.md) for a promotional offer to the [promotionalOffer(offerID:signature:)](../purchaseoption/promotionaloffer%28offerid_signature_%29.md) to apply the promotion to a purchase.

For more information about configuring offers in App Store Connect, see [Product.SubscriptionOffer](../subscriptionoffer.md).
