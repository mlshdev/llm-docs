> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitem/type](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitem/type)

# type (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The summary item’s type that indicates whether the amount is final.

## Declaration

```swift
var type: PKPaymentSummaryItemType { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to a [PKPaymentSummaryItemType.final](../pkpaymentsummaryitemtype/final.md) type. See [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md) for other values.

## See Also

### Describing summary items

- [label](label.md): A short, localized description of the item.
- [amount](amount.md): The summary item’s amount.
- [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.

# type (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The summary item’s type that indicates whether the amount is final.

## Declaration

```objectivec
@property (nonatomic, assign) PKPaymentSummaryItemType type;
```

<a id="Discussion"></a>

## Discussion

This property defaults to a [PKPaymentSummaryItemTypeFinal](../pkpaymentsummaryitemtype/final.md) type. See [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md) for other values.

## See Also

### Describing summary items

- [label](label.md): A short, localized description of the item.
- [amount](amount.md): The summary item’s amount.
- [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.
