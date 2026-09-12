> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct](https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct)

# Transaction.AdvancedCommerceInfo.Refund.Reason

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The reason for the refund.

## Declaration

```swift
struct Reason
```

## Topics

### Type Properties

- [legal](reason-swift.struct/legal.md): The customer requested a refund based on a legal reason.
- [modifyItems](reason-swift.struct/modifyitems.md)
- [other](reason-swift.struct/other.md): The customer requested a refund for other reasons.
- [unfulfilled](reason-swift.struct/unfulfilled.md): The customer had issues with receiving or using the in-app purchase.
- [unintended](reason-swift.struct/unintended.md): The customer didn’t intend to make the in-app purchase.
- [unsatisfied](reason-swift.struct/unsatisfied.md): The customer wasn’t satisfied with the in-app purchase.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [Transaction.AdvancedCommerceInfo.Refund.RefundType](refundtype.md): The type of refund.
