> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/promotionaloffer(offerid:keyid:nonce:signature:timestamp:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/promotionaloffer(offerid:keyid:nonce:signature:timestamp:))

# promotionalOffer(offerID:keyID:nonce:signature:timestamp:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 26.0) · iPadOS 15.0+ (deprecated in 26.0) · Mac Catalyst 15.0+ (deprecated in 26.0) · macOS 12.0+ (deprecated in 26.0) · tvOS 15.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 8.0+ (deprecated in 26.0)

Applies a promotional offer for an auto-renewable subscription.

> Sign promotional offers with JWS and use promotionalOffer(\_:compactJWS:) instead

## Declaration

```swift
static func promotionalOffer(offerID: String, keyID: String, nonce: UUID, signature: Data, timestamp: Int) -> Product.PurchaseOption
```

## Parameters

- `offerID`: The subscription-offer identifier, [id](../subscriptionoffer/id.md).
- `keyID`: The key ID of the subscription key.
- `nonce`: The antireplay value used in the signature. Use lowercase.
- `signature`: The cryptographic signature of the offer parameters, which you generate on your server.
- `timestamp`: The UNIX time, in milliseconds, when you generate the signature.

<a id="return-value"></a>

## Return Value

An instance of [Product.PurchaseOption](../purchaseoption.md) to use in [purchase(options:)](../purchase%28options_%29.md).

<a id="Discussion"></a>

## Discussion

For information about `keyID`, `nonce`, `signature`, and `timestamp`, see [Generating a signature for promotional offers](../../generating-a-signature-for-promotional-offers.md). If you’re providing an [appAccountToken(\_:)](appaccounttoken%28__%29.md) in the purchase options, you must include that value when you generate the `signature`. Use lowercase for the UUID string representations of the app account token and the `nonce` in the signature.

You can offer a discounted or free period of service for auto-renewable subscriptions on iOS, iPadOS, macOS, and tvOS using promotional offers. Before you can provide promotional offers in your app, you must set up the offers in your App Store Connect account. To configure your offer, see [Set up promotional offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-promotional-offers-for-auto-renewable-subscriptions).

## See Also

### Setting the purchase options

- [appAccountToken(\_:)](appaccounttoken%28__%29.md): Sets a UUID to associate the purchase with an account in your system.
- [winBackOffer(\_:)](winbackoffer%28__%29.md): Sets a win-back offer to apply to the purchase.
- [promotionalOffer(offerID:signature:)](promotionaloffer%28offerid_signature_%29.md): Deprecated.
- [quantity(\_:)](quantity%28__%29.md): Indicates the quantity of items the customer is purchasing.
