> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/promotionaloffer(_:compactjws:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/promotionaloffer(_:compactjws:))

# promotionalOffer(\_:compactJWS:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Apply a promotional offer to a purchase.

## Declaration

```swift
@backDeployed(before: iOS 26.0, macOS 26.0, tvOS 26.0, watchOS 26.0, visionOS 26.0)
static func promotionalOffer(_ offerID: String, compactJWS: String) -> [Product.PurchaseOption]
```

## Parameters

- `offerID`: The `id` property of the `SubscriptionOffer` to apply.
- `compactJWS`: The JWS signature used to validate a promotional offer.
