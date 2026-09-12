> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/advancedcommerceproduct/purchaseoption](https://developer.apple.com/documentation/storekit/advancedcommerceproduct/purchaseoption)

# AdvancedCommerceProduct.PurchaseOption

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
struct PurchaseOption
```

## Topics

### Type Methods

- [onStorefrontChange(shouldContinuePurchase:)](purchaseoption/onstorefrontchange%28shouldcontinuepurchase_%29.md): A closure that determines whether the transaction continues if the device’s App Store storefront changes during a transaction.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Initiating purchases

- [purchase(compactJWS:confirmIn:options:)](purchase%28compactjws_confirmin_options_%29-7x4bh.md): Processes a purchase for the product.
- [purchase(compactJWS:confirmIn:options:)](purchase%28compactjws_confirmin_options_%29-54lkw.md): Processes a purchase for the product.
- [purchase(compactJWS:options:)](purchase%28compactjws_options_%29.md): Processes a purchase for the product.
- [AdvancedCommerceProduct.PurchaseResult](purchaseresult.md)
