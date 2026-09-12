> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitem/label](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitem/label)

# label (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A short, localized description of the item.

## Declaration

```swift
var label: String { get set }
```

<a id="Discussion"></a>

## Discussion

Provide the label in title case—for example, VAT Tax, Gift Wrap and Card, or Discount.

Omit any punctuation and whitespace after the label. The label is formatted for display by the framework.

## See Also

### Describing summary items

- [amount](amount.md): The summary item’s amount.
- [type](type.md): The summary item’s type that indicates whether the amount is final.
- [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.

# label (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A short, localized description of the item.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * label;
```

<a id="Discussion"></a>

## Discussion

Provide the label in title case—for example, VAT Tax, Gift Wrap and Card, or Discount.

Omit any punctuation and whitespace after the label. The label is formatted for display by the framework.

## See Also

### Describing summary items

- [amount](amount.md): The summary item’s amount.
- [type](type.md): The summary item’s type that indicates whether the amount is final.
- [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.
