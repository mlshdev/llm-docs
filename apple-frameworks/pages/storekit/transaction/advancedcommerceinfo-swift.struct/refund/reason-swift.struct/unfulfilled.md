> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/unfulfilled](https://developer.apple.com/documentation/storekit/transaction/advancedcommerceinfo-swift.struct/refund/reason-swift.struct/unfulfilled)

# unfulfilled

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The customer had issues with receiving or using the in-app purchase.

## Declaration

```swift
static let unfulfilled: Transaction.AdvancedCommerceInfo.Refund.Reason
```

## See Also

### Type Properties

- [legal](legal.md): The customer requested a refund based on a legal reason.
- [modifyItems](modifyitems.md)
- [other](other.md): The customer requested a refund for other reasons.
- [unintended](unintended.md): The customer didn’t intend to make the in-app purchase.
- [unsatisfied](unsatisfied.md): The customer wasn’t satisfied with the in-app purchase.
