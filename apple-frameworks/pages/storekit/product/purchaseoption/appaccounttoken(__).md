> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/appaccounttoken(_:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/appaccounttoken(_:))

# appAccountToken(\_:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets a UUID to associate the purchase with an account in your system.

## Declaration

```swift
static func appAccountToken(_ token: UUID) -> Product.PurchaseOption
```

## Parameters

- `token`: A UUID you provide to associate with the purchase.

<a id="return-value"></a>

## Return Value

An instance of [Product.PurchaseOption](../purchaseoption.md) to use in [purchase(options:)](../purchase%28options_%29.md).

<a id="Discussion"></a>

## Discussion

When you set the app account token in the purchase options, the App Store returns the same app account token value in the resulting transaction, in [appAccountToken](../../transaction/appaccounttoken.md).

## See Also

### Setting the purchase options

- [winBackOffer(\_:)](winbackoffer%28__%29.md): Sets a win-back offer to apply to the purchase.
- [promotionalOffer(offerID:keyID:nonce:signature:timestamp:)](promotionaloffer%28offerid_keyid_nonce_signature_timestamp_%29.md): Deprecated. Applies a promotional offer for an auto-renewable subscription.
- [promotionalOffer(offerID:signature:)](promotionaloffer%28offerid_signature_%29.md): Deprecated.
- [quantity(\_:)](quantity%28__%29.md): Indicates the quantity of items the customer is purchasing.
