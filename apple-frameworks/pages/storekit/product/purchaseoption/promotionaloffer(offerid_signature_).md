> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/promotionaloffer(offerid:signature:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/promotionaloffer(offerid:signature:))

# promotionalOffer(offerID:signature:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · macOS 14.4+ (deprecated in 26.0) · tvOS 17.4+ (deprecated in 26.0) · visionOS 1.1+ (deprecated in 26.0) · watchOS 10.4+ (deprecated in 26.0)

> Sign promotional offers with JWS and use promotionalOffer(\_:compactJWS:) instead

## Declaration

```swift
static func promotionalOffer(offerID: String, signature: Product.SubscriptionOffer.Signature) -> Product.PurchaseOption
```

## See Also

### Setting the purchase options

- [appAccountToken(\_:)](appaccounttoken%28__%29.md): Sets a UUID to associate the purchase with an account in your system.
- [winBackOffer(\_:)](winbackoffer%28__%29.md): Sets a win-back offer to apply to the purchase.
- [promotionalOffer(offerID:keyID:nonce:signature:timestamp:)](promotionaloffer%28offerid_keyid_nonce_signature_timestamp_%29.md): Deprecated. Applies a promotional offer for an auto-renewable subscription.
- [quantity(\_:)](quantity%28__%29.md): Indicates the quantity of items the customer is purchasing.
