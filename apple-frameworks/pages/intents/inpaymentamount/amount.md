> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamount/amount](https://developer.apple.com/documentation/intents/inpaymentamount/amount)

# amount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The precise amount of money to pay.

## Declaration

```swift
@NSCopying var amount: INCurrencyAmount? { get }
```

<a id="Discussion"></a>

## Discussion

Upon receiving an intent, this property contains the monetary value (if any) specified by the user. If the amount is missing or `0`, use the [amountType](amounttype.md) property to infer the amount to pay. When reporting amounts back to Siri using this class, always specify a value for this property.

## See Also

### Getting the Payment Amount

- [amountType](amounttype.md): The account-specific amount to pay.
- [INAmountType](../inamounttype.md): Constants indicating an account-specific amount to apply to a payment.

# amount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The precise amount of money to pay.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INCurrencyAmount * amount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INCurrencyAmount * amount;
```

<a id="Discussion"></a>

## Discussion

Upon receiving an intent, this property contains the monetary value (if any) specified by the user. If the amount is missing or `0`, use the [amountType](amounttype.md) property to infer the amount to pay. When reporting amounts back to Siri using this class, always specify a value for this property.

## See Also

### Getting the Payment Amount

- [amountType](amounttype.md): The account-specific amount to pay.
- [INAmountType](../inamounttype.md): Constants indicating an account-specific amount to apply to a payment.
