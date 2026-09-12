> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/quantity(_:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/quantity(_:))

# quantity(\_:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Indicates the quantity of items the customer is purchasing.

## Declaration

```swift
static func quantity(_ quantity: Int) -> Product.PurchaseOption
```

## Parameters

- `quantity`: The number of items the customer is purchasing.

  The default value is 1. The maximum value is 10.

<a id="return-value"></a>

## Return Value

An instance of [Product.PurchaseOption](../purchaseoption.md) to use in [purchase(options:)](../purchase%28options_%29.md).

<a id="Discussion"></a>

## Discussion

The quantity applies to consumable in-app purchases and non-renewing subscriptions.

## See Also

### Setting the purchase options

- [appAccountToken(\_:)](appaccounttoken%28__%29.md): Sets a UUID to associate the purchase with an account in your system.
- [winBackOffer(\_:)](winbackoffer%28__%29.md): Sets a win-back offer to apply to the purchase.
- [promotionalOffer(offerID:keyID:nonce:signature:timestamp:)](promotionaloffer%28offerid_keyid_nonce_signature_timestamp_%29.md): Deprecated. Applies a promotional offer for an auto-renewable subscription.
- [promotionalOffer(offerID:signature:)](promotionaloffer%28offerid_signature_%29.md): Deprecated.
