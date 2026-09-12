> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inamounttype](https://developer.apple.com/documentation/intents/inamounttype)

# INAmountType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating an account-specific amount to apply to a payment.

## Declaration

```swift
enum INAmountType
```

## Topics

### Enumeration Cases

- [INAmountType.unknown](inamounttype/unknown.md): An unknown amount.
- [INAmountType.minimumDue](inamounttype/minimumdue.md): The minimum amount the user must apply to the bill.
- [INAmountType.amountDue](inamounttype/amountdue.md): The amount due for the bill.
- [INAmountType.currentBalance](inamounttype/currentbalance.md): The current account balance.
- [INAmountType.maximumTransferAmount](inamounttype/maximumtransferamount.md): The maximum amount the user can transfer.
- [INAmountType.minimumTransferAmount](inamounttype/minimumtransferamount.md): The minimum amount the user can transfer.
- [INAmountType.statementBalance](inamounttype/statementbalance.md): The statement balance.

### Initializers

- [init(rawValue:)](inamounttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Payment Amount

- [amount](inpaymentamount/amount.md): The precise amount of money to pay.
- [amountType](inpaymentamount/amounttype.md): The account-specific amount to pay.

# INAmountType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating an account-specific amount to apply to a payment.

## Declaration

```objectivec
enum INAmountType : NSInteger;
```

## Topics

### Enumeration Cases

- [INAmountTypeUnknown](inamounttype/unknown.md): An unknown amount.
- [INAmountTypeMinimumDue](inamounttype/minimumdue.md): The minimum amount the user must apply to the bill.
- [INAmountTypeAmountDue](inamounttype/amountdue.md): The amount due for the bill.
- [INAmountTypeCurrentBalance](inamounttype/currentbalance.md): The current account balance.
- [INAmountTypeMaximumTransferAmount](inamounttype/maximumtransferamount.md): The maximum amount the user can transfer.
- [INAmountTypeMinimumTransferAmount](inamounttype/minimumtransferamount.md): The minimum amount the user can transfer.
- [INAmountTypeStatementBalance](inamounttype/statementbalance.md): The statement balance.

## See Also

### Getting the Payment Amount

- [amount](inpaymentamount/amount.md): The precise amount of money to pay.
- [amountType](inpaymentamount/amounttype.md): The account-specific amount to pay.
