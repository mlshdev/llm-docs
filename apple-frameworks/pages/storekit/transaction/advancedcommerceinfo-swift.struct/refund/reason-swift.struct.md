> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct

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
- [unfulfilled](reason-swift.struct/unfulfilled.md): The customer had issues with receiving or using the Apple In-App Purchase.
- [unintended](reason-swift.struct/unintended.md): The customer didn’t intend to make the Apple In-App Purchase.
- [unsatisfied](reason-swift.struct/unsatisfied.md): The customer wasn’t satisfied with the Apple In-App Purchase.

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
