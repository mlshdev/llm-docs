> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund](https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund)

# Transaction.AdvancedCommerceInfo.Refund

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Information about refunds that were issued as part of this transaction.

## Declaration

```swift
struct Refund
```

## Topics

### Structures

- [Transaction.AdvancedCommerceInfo.Refund.Reason](refund/reason-swift.struct.md): The reason for the refund.
- [Transaction.AdvancedCommerceInfo.Refund.RefundType](refund/refundtype.md): The type of refund.

### Instance Properties

- [amount](refund/amount.md): The amount of the refund.
- [date](refund/date.md): The date the refund was granted.
- [reason](refund/reason-swift.property.md): The reason for the refund.
- [type](refund/type.md): The type of the refund.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [Transaction.AdvancedCommerceInfo.Item](item.md): The developer-defined product that was purchased.
- [Transaction.AdvancedCommerceInfo.Offer](offer.md): Information about the offer that was redeemed as part of the purchase.
