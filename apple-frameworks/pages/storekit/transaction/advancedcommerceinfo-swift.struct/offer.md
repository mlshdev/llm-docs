> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer](https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/offer)

# Transaction.AdvancedCommerceInfo.Offer

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Information about the offer that was redeemed as part of the purchase.

## Declaration

```swift
struct Offer
```

## Topics

### Structures

- [Transaction.AdvancedCommerceInfo.Offer.Reason](offer/reason-swift.struct.md): The reasons why subscription offers are applied to the purchase of auto-renewable subscriptions.

### Instance Properties

- [period](offer/period.md): The duration of the offer.
- [periodCount](offer/periodcount.md): The number of periods the system applies the offer.
- [price](offer/price.md): The discounted price under the offer.
- [reason](offer/reason-swift.property.md): The reason the offer was applied.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [Transaction.AdvancedCommerceInfo.Item](item.md): The developer-defined product that was purchased.
- [Transaction.AdvancedCommerceInfo.Refund](refund.md): Information about refunds that were issued as part of this transaction.
