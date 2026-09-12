> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/winbackoffer(_:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/winbackoffer(_:))

# winBackOffer(\_:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets a win-back offer to apply to the purchase.

## Declaration

```swift
static func winBackOffer(_ offer: Product.SubscriptionOffer) -> Product.PurchaseOption
```

## Parameters

- `offer`: The [Product.SubscriptionOffer](../subscriptionoffer.md) instance that represents the win-back offer to apply to the purchase.

<a id="Discussion"></a>

## Discussion

To test win-back offers in Xcode, set up the offers in your StoreKit configuration file. For more information, see [Setting up StoreKit Testing in Xcode](https://developer.apple.com/documentation/xcode/setting-up-storekit-testing-in-xcode).

## See Also

### Setting the purchase options

- [appAccountToken(\_:)](appaccounttoken%28__%29.md): Sets a UUID to associate the purchase with an account in your system.
- [promotionalOffer(offerID:keyID:nonce:signature:timestamp:)](promotionaloffer%28offerid_keyid_nonce_signature_timestamp_%29.md): Deprecated. Applies a promotional offer for an auto-renewable subscription.
- [promotionalOffer(offerID:signature:)](promotionaloffer%28offerid_signature_%29.md): Deprecated.
- [quantity(\_:)](quantity%28__%29.md): Indicates the quantity of items the customer is purchasing.
