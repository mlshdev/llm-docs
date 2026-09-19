> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/producttype

# Product.ProductType

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The types of Apple In-App Purchases.

## Declaration

```swift
struct ProductType
```

## Topics

### Getting the Product Type

- [consumable](producttype/consumable.md): A consumable Apple In-App Purchase.
- [nonConsumable](producttype/nonconsumable.md): A non-consumable Apple In-App Purchase.
- [nonRenewable](producttype/nonrenewable.md): A non-renewing subscription.
- [autoRenewable](producttype/autorenewable.md): An auto-renewable subscription.

### Getting a Localized Description

- [localizedDescription](producttype/localizeddescription.md)

### Type Properties

- [subscriptionBundle](producttype/subscriptionbundle.md)
- [subscriptionSuite](producttype/subscriptionsuite.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting product identifiers and type

- [id](id.md): The unique product identifier.
- [type](type.md): The Apple In-App Purchase product type.
