> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaccounttype](https://developer.apple.com/documentation/intents/inaccounttype)

# INAccountType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the type of account involved in a financial transaction.

## Declaration

```swift
enum INAccountType
```

## Topics

### Constants

- [INAccountType.unknown](inaccounttype/unknown.md): An unknown type of account.
- [INAccountType.checking](inaccounttype/checking.md): A checking account.
- [INAccountType.credit](inaccounttype/credit.md): A credit card account.
- [INAccountType.debit](inaccounttype/debit.md): A debit account.
- [INAccountType.investment](inaccounttype/investment.md): An investment account.
- [INAccountType.mortgage](inaccounttype/mortgage.md): A mortgage account.
- [INAccountType.prepaid](inaccounttype/prepaid.md): A prepaid account.
- [INAccountType.saving](inaccounttype/saving.md): A savings account.

### Initializers

- [init(rawValue:)](inaccounttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Objects

- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAccount](inpaymentaccount.md): A user account that provides the funds when making a payment.
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INAccountType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the type of account involved in a financial transaction.

## Declaration

```objectivec
enum INAccountType : NSInteger;
```

## Topics

### Constants

- [INAccountTypeUnknown](inaccounttype/unknown.md): An unknown type of account.
- [INAccountTypeChecking](inaccounttype/checking.md): A checking account.
- [INAccountTypeCredit](inaccounttype/credit.md): A credit card account.
- [INAccountTypeDebit](inaccounttype/debit.md): A debit account.
- [INAccountTypeInvestment](inaccounttype/investment.md): An investment account.
- [INAccountTypeMortgage](inaccounttype/mortgage.md): A mortgage account.
- [INAccountTypePrepaid](inaccounttype/prepaid.md): A prepaid account.
- [INAccountTypeSaving](inaccounttype/saving.md): A savings account.

## See Also

### Data Objects

- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAccount](inpaymentaccount.md): A user account that provides the funds when making a payment.
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
