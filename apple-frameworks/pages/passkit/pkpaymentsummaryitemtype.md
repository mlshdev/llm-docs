> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitemtype](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitemtype)

# PKPaymentSummaryItemType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that describe the type of the payment summary item, such as final or pending.

## Declaration

```swift
enum PKPaymentSummaryItemType
```

## Topics

### Payment summary item types

- [PKPaymentSummaryItemType.final](pkpaymentsummaryitemtype/final.md): A summary item that represents a known, final cost.
- [PKPaymentSummaryItemType.pending](pkpaymentsummaryitemtype/pending.md): A summary item that represents an estimated or unknown cost.

### Initializers

- [init(rawValue:)](pkpaymentsummaryitemtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing summary items

- [label](pkpaymentsummaryitem/label.md): A short, localized description of the item.
- [amount](pkpaymentsummaryitem/amount.md): The summary item’s amount.
- [type](pkpaymentsummaryitem/type.md): The summary item’s type that indicates whether the amount is final.

# PKPaymentSummaryItemType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that describe the type of the payment summary item, such as final or pending.

## Declaration

```objectivec
enum PKPaymentSummaryItemType : NSUInteger;
```

## Topics

### Payment summary item types

- [PKPaymentSummaryItemTypeFinal](pkpaymentsummaryitemtype/final.md): A summary item that represents a known, final cost.
- [PKPaymentSummaryItemTypePending](pkpaymentsummaryitemtype/pending.md): A summary item that represents an estimated or unknown cost.

## See Also

### Describing summary items

- [label](pkpaymentsummaryitem/label.md): A short, localized description of the item.
- [amount](pkpaymentsummaryitem/amount.md): The summary item’s amount.
- [type](pkpaymentsummaryitem/type.md): The summary item’s type that indicates whether the amount is final.
