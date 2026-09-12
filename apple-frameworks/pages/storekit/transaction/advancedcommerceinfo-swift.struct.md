> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/advancedcommerceinfo-swift.struct](https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct)

# Transaction.AdvancedCommerceInfo

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Metadata for transactions that use the Advanced Commerce API.

## Declaration

```swift
struct AdvancedCommerceInfo
```

## Topics

### Structures

- [Transaction.AdvancedCommerceInfo.Item](advancedcommerceinfo-swift.struct/item.md): The developer-defined product that was purchased.
- [Transaction.AdvancedCommerceInfo.Offer](advancedcommerceinfo-swift.struct/offer.md): Information about the offer that was redeemed as part of the purchase.
- [Transaction.AdvancedCommerceInfo.Refund](advancedcommerceinfo-swift.struct/refund.md): Information about refunds that were issued as part of this transaction.
- [Transaction.AdvancedCommerceInfo.Partner](advancedcommerceinfo-swift.struct/partner.md)

### Instance Properties

- [description](advancedcommerceinfo-swift.struct/description.md)
- [displayName](advancedcommerceinfo-swift.struct/displayname.md)
- [estimatedTax](advancedcommerceinfo-swift.struct/estimatedtax.md)
- [items](advancedcommerceinfo-swift.struct/items.md): The items purchased as part of this transaction.
- [period](advancedcommerceinfo-swift.struct/period.md)
- [requestReferenceID](advancedcommerceinfo-swift.struct/requestreferenceid.md)
- [taxCode](advancedcommerceinfo-swift.struct/taxcode.md)
- [taxExclusivePrice](advancedcommerceinfo-swift.struct/taxexclusiveprice.md)
- [taxRate](advancedcommerceinfo-swift.struct/taxrate.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Advanced Commerce transaction data

- [advancedCommerceInfo](advancedcommerceinfo-swift.property.md): Metadata for transactions that use the Advanced Commerce API.
