> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/id

# id

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The unique product identifier.

## Declaration

```swift
let id: String
```

## Mentioned In

- [Generating JWS to sign App Store requests](../generating-jws-to-sign-app-store-requests.md)

<a id="Discussion"></a>

## Discussion

You configure Apple In-App Purchases, including the product ID, in App Store Connect. For information, see [Overview for configuring Apple In-App Purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/overview-for-configuring-in-app-purchases).

## See Also

### Getting product identifiers and type

- [type](type.md): The Apple In-App Purchase product type.
- [Product.ProductType](producttype.md): The types of Apple In-App Purchases.
