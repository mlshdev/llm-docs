> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamount](https://developer.apple.com/documentation/intents/inpaymentamount)

# INPaymentAmount (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The amount of money to apply to a bill payment.

## Declaration

```swift
class INPaymentAmount
```

<a id="overview"></a>

## Overview

An [INPaymentAmount](inpaymentamount.md) object describes the amount of money to pay toward a bill. When handling bill payments, Siri may provide an instance of this class with the amount that the user wants to pay. When handling the intent, you also create instances of the class with the amount of money that you scheduled toward the user’s bill.

When receiving an instance of this class from Siri, the amount type might be specified using only an [INAmountType](inamounttype.md) constant, such as [INAmountType.minimumDue](inamounttype/minimumdue.md) or [INAmountType.currentBalance](inamounttype/currentbalance.md). During resolution or when confirming the amount type, you should always supply a value in the [amount](inpaymentamount/amount.md) property in addition to the amount type constant. When communicating with the user, Siri always displays the actual amount of money to be applied to a bill.

## Topics

### Initializing the Payment Amount

- [init(amountType:amount:)](inpaymentamount/init%28amounttype_amount_%29.md): Initializes a payment amount object with the specified amounts.

### Getting the Payment Amount

- [amount](inpaymentamount/amount.md): The precise amount of money to pay.
- [amountType](inpaymentamount/amounttype.md): The account-specific amount to pay.
- [INAmountType](inamounttype.md): Constants indicating an account-specific amount to apply to a payment.

### Initializers

- [init(coder:)](inpaymentamount/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAccount](inpaymentaccount.md): A user account that provides the funds when making a payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INPaymentAmount (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The amount of money to apply to a bill payment.

## Declaration

```objectivec
@interface INPaymentAmount : NSObject
```

<a id="overview"></a>

## Overview

An [INPaymentAmount](inpaymentamount.md) object describes the amount of money to pay toward a bill. When handling bill payments, Siri may provide an instance of this class with the amount that the user wants to pay. When handling the intent, you also create instances of the class with the amount of money that you scheduled toward the user’s bill.

When receiving an instance of this class from Siri, the amount type might be specified using only an [INAmountType](inamounttype.md) constant, such as [INAmountTypeMinimumDue](inamounttype/minimumdue.md) or [INAmountTypeCurrentBalance](inamounttype/currentbalance.md). During resolution or when confirming the amount type, you should always supply a value in the [amount](inpaymentamount/amount.md) property in addition to the amount type constant. When communicating with the user, Siri always displays the actual amount of money to be applied to a bill.

## Topics

### Initializing the Payment Amount

- [initWithAmountType:amount:](inpaymentamount/init%28amounttype_amount_%29.md): Initializes a payment amount object with the specified amounts.

### Getting the Payment Amount

- [amount](inpaymentamount/amount.md): The precise amount of money to pay.
- [amountType](inpaymentamount/amounttype.md): The account-specific amount to pay.
- [INAmountType](inamounttype.md): Constants indicating an account-specific amount to apply to a payment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAccount](inpaymentaccount.md): A user account that provides the funds when making a payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
