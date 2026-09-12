> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/purchaseintent/offer](https://developer.apple.com/documentation/storekit/purchaseintent/offer)

# offer

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 16.4+ · macOS 15.0+

The subscription offer that the customer redeems outside of your app.

## Declaration

```swift
let offer: Product.SubscriptionOffer?
```

## Mentioned In

- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The system populates this value if the customer redeems a [winBack](../product/subscriptionoffer/offertype/winback.md) offer type outside of your app. Add this offer to the purchase options. For more information and a code example, see the [Handle win-back offers redeemed outside of your app](../supporting-win-back-offers-in-your-app.md#Handle-win-back-offers-redeemed-outside-of-your-app) section of  [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md).
