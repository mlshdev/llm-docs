> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/custom(key:value:)-7rju9](https://developer.apple.com/documentation/storekit/product/purchaseoption/custom(key:value:)-7rju9)

# custom(key:value:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a number for a custom key to a purchase.

## Declaration

```swift
static func custom(key: String, value: Double) -> Product.PurchaseOption
```

## Parameters

- `key`: The key for this custom option.
- `value`: The numerical value you assign to this custom option.

<a id="Discussion"></a>

## Discussion

This custom purchase option doesn’t have any effect.

## See Also

### Setting custom purchase options

- [custom(key:value:)](custom%28key_value_%29-80cvh.md): Adds data for a custom key to a purchase.
- [custom(key:value:)](custom%28key_value_%29-3g3nc.md): Adds a string for a custom key to a purchase.
- [custom(key:value:)](custom%28key_value_%29-8tjim.md): Adds a Boolean value for a custom key to a purchase.
