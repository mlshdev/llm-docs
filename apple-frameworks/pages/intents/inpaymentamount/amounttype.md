> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamount/amounttype](https://developer.apple.com/documentation/intents/inpaymentamount/amounttype)

# amountType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The account-specific amount to pay.

## Declaration

```swift
var amountType: INAmountType { get }
```

<a id="Discussion"></a>

## Discussion

When processing an intent, use this property to determine if the user wanted to pay the minimum amount, the amount due, or the current balance due for the bill. You can then map each constant to the appropriate amount when creating your response. If this value is [INAmountType.unknown](../inamounttype/unknown.md), use the value in the [amount](amount.md) property to determine the payment amount.

## See Also

### Getting the Payment Amount

- [amount](amount.md): The precise amount of money to pay.
- [INAmountType](../inamounttype.md): Constants indicating an account-specific amount to apply to a payment.

# amountType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The account-specific amount to pay.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INAmountType amountType;
```

```objectivec
@property (atomic, assign, readonly) INAmountType amountType;
```

<a id="Discussion"></a>

## Discussion

When processing an intent, use this property to determine if the user wanted to pay the minimum amount, the amount due, or the current balance due for the bill. You can then map each constant to the appropriate amount when creating your response. If this value is [INAmountTypeUnknown](../inamounttype/unknown.md), use the value in the [amount](amount.md) property to determine the payment amount.

## See Also

### Getting the Payment Amount

- [amount](amount.md): The precise amount of money to pay.
- [INAmountType](../inamounttype.md): Constants indicating an account-specific amount to apply to a payment.
