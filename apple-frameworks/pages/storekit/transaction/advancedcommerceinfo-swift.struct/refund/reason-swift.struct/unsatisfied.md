> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/unsatisfied

# unsatisfied

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The customer wasn’t satisfied with the Apple In-App Purchase.

## Declaration

```swift
static let unsatisfied: Transaction.AdvancedCommerceInfo.Refund.Reason
```

## See Also

### Type Properties

- [legal](legal.md): The customer requested a refund based on a legal reason.
- [modifyItems](modifyitems.md)
- [other](other.md): The customer requested a refund for other reasons.
- [unfulfilled](unfulfilled.md): The customer had issues with receiving or using the Apple In-App Purchase.
- [unintended](unintended.md): The customer didn’t intend to make the Apple In-App Purchase.
