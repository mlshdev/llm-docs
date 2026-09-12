> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamount/init(amounttype:amount:)](https://developer.apple.com/documentation/intents/inpaymentamount/init(amounttype:amount:))

# init(amountType:amount:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes a payment amount object with the specified amounts.

## Declaration

```swift
init(amountType: INAmountType, amount: INCurrencyAmount)
```

## Parameters

- `amountType`: A constant indicating an account-specific amount. Use this parameter to specify whether the payment amount represents the minimum amount due, the current account balance, or the amount due. If the amount does not correspond to any of those values, specify [INAmountType.unknown](../inamounttype/unknown.md).
- `amount`: The numerical amount to apply to the payment. Use this parameter to specify the precise amount being applied to the bill.

<a id="return-value"></a>

## Return Value

An initialized payment amount object, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

When creating an [INPaymentAmount](../inpaymentamount.md) object, specify as much information as you have available. Specifically, include a value for the `amount` parameter indicating the amount of money to debit from the user’s account. If that value also represents a specific amount type, such as the balance due on the account, specify an appropriate constant in the [amountType](amounttype.md) property.

# initWithAmountType:amount: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes a payment amount object with the specified amounts.

## Declaration

```objectivec
- (instancetype) initWithAmountType:(INAmountType) amountType amount:(INCurrencyAmount *) amount;
```

## Parameters

- `amountType`: A constant indicating an account-specific amount. Use this parameter to specify whether the payment amount represents the minimum amount due, the current account balance, or the amount due. If the amount does not correspond to any of those values, specify [INAmountTypeUnknown](../inamounttype/unknown.md).
- `amount`: The numerical amount to apply to the payment. Use this parameter to specify the precise amount being applied to the bill.

<a id="return-value"></a>

## Return Value

An initialized payment amount object, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

When creating an [INPaymentAmount](../inpaymentamount.md) object, specify as much information as you have available. Specifically, include a value for the `amount` parameter indicating the amount of money to debit from the user’s account. If that value also represents a specific amount type, such as the balance due on the account, specify an appropriate constant in the [amountType](amounttype.md) property.
