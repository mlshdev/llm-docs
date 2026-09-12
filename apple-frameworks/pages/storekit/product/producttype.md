> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/producttype](https://developer.apple.com/documentation/storekit/product/producttype)

# Product.ProductType

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The types of in-app purchases.

## Declaration

```swift
struct ProductType
```

## Topics

### Getting the Product Type

- [consumable](producttype/consumable.md): A consumable in-app purchase.
- [nonConsumable](producttype/nonconsumable.md): A non-consumable in-app purchase.
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
- [type](type.md): The in-app purchase product type.
