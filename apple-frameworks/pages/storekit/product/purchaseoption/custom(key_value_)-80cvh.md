> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/purchaseoption/custom(key:value:)-80cvh

# custom(key:value:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds data for a custom key to a purchase.

## Declaration

```swift
static func custom(key: String, value: Data) -> Product.PurchaseOption
```

## Parameters

- `key`: The key for this custom option.
- `value`: The data value you assign to this custom option.

## Mentioned In

- [Sending Advanced Commerce API requests from your app](../../sending-advanced-commerce-api-requests-from-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this custom option with the [Advanced Commerce API](../../../advancedcommerceapi.md).

## See Also

### Setting custom purchase options

- [custom(key:value:)](custom%28key_value_%29-3g3nc.md): Adds a string for a custom key to a purchase.
- [custom(key:value:)](custom%28key_value_%29-8tjim.md): Adds a Boolean value for a custom key to a purchase.
- [custom(key:value:)](custom%28key_value_%29-7rju9.md): Adds a number for a custom key to a purchase.
