> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitem/amount](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitem/amount)

# amount (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The summary item’s amount.

## Declaration

```swift
@NSCopying var amount: NSDecimalNumber { get set }
```

<a id="Discussion"></a>

## Discussion

The amount’s currency is specified at the payment level by setting a value for the [currencyCode](../pkpaymentrequest/currencycode.md) property on [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Describing summary items

- [label](label.md): A short, localized description of the item.
- [type](type.md): The summary item’s type that indicates whether the amount is final.
- [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.

# amount (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The summary item’s amount.

## Declaration

```objectivec
@property (nonatomic, copy) NSDecimalNumber * amount;
```

<a id="Discussion"></a>

## Discussion

The amount’s currency is specified at the payment level by setting a value for the [currencyCode](../pkpaymentrequest/currencycode.md) property on [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Describing summary items

- [label](label.md): A short, localized description of the item.
- [type](type.md): The summary item’s type that indicates whether the amount is final.
- [PKPaymentSummaryItemType](../pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.
