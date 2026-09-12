> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item](https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/item)

# Transaction.AdvancedCommerceInfo.Item

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The developer-defined product that was purchased.

## Declaration

```swift
struct Item
```

## Topics

### Structures

- [Transaction.AdvancedCommerceInfo.Item.Details](item/details-swift.struct.md): The item details.

### Instance Properties

- [details](item/details-swift.property.md): The item’s details.
- [refunds](item/refunds.md): The list of refunds that were issued as part of this transaction.
- [revocationDate](item/revocationdate.md): The date access to this item was revoked.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [Transaction.AdvancedCommerceInfo.Offer](offer.md): Information about the offer that was redeemed as part of the purchase.
- [Transaction.AdvancedCommerceInfo.Refund](refund.md): Information about refunds that were issued as part of this transaction.
