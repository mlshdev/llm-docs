> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord](https://developer.apple.com/documentation/intents/inpaymentrecord)

# INPaymentRecord (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Detailed information about a financial transaction made between two users.

## Declaration

```swift
class INPaymentRecord
```

<a id="overview"></a>

## Overview

An [INPaymentRecord](inpaymentrecord.md) object contains the details of a financial transaction that your app is facilitating. You create instances of this class when handling payment-related intents. The payment record contains the users involved in the transaction, the amount of money to transfer, and the current state of the transaction. Siri conveys this detailed information to the user at appropriate times.

When creating payment records, specify as many details as possible. Siri always asks the user to confirm payments before asking your Intents extension to process them. During confirmation, Siri displays the information from this object in the confirmation interface. Omitting important pieces of information, such as the recipient or currency amount, might cause the user to cancel the transaction.

## Topics

### Creating a Payment Record Object

- [init(payee:payer:currencyAmount:paymentMethod:note:status:feeAmount:)](inpaymentrecord/init%28payee_payer_currencyamount_paymentmethod_note_status_feeamount_%29.md): Initializes a payment record with the specified payment details.
- [init(payee:payer:currencyAmount:paymentMethod:note:status:)](inpaymentrecord/init%28payee_payer_currencyamount_paymentmethod_note_status_%29.md): Initializes a payment record with the specified payment details.

### Getting the Payment Status

- [status](inpaymentrecord/status.md): The current status of the financial transaction.

### Getting Payment Record Details

- [payee](inpaymentrecord/payee.md): The person receiving the funds.
- [payer](inpaymentrecord/payer.md): The person providing the funds.
- [currencyAmount](inpaymentrecord/currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](inpaymentrecord/feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](inpaymentrecord/paymentmethod.md): The payment method used to supply the funds.
- [note](inpaymentrecord/note.md): A description of the payment to send.

### Initializers

- [init(coder:)](inpaymentrecord/init%28coder_%29.md)

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
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INPaymentRecord (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Detailed information about a financial transaction made between two users.

## Declaration

```objectivec
@interface INPaymentRecord : NSObject
```

<a id="overview"></a>

## Overview

An [INPaymentRecord](inpaymentrecord.md) object contains the details of a financial transaction that your app is facilitating. You create instances of this class when handling payment-related intents. The payment record contains the users involved in the transaction, the amount of money to transfer, and the current state of the transaction. Siri conveys this detailed information to the user at appropriate times.

When creating payment records, specify as many details as possible. Siri always asks the user to confirm payments before asking your Intents extension to process them. During confirmation, Siri displays the information from this object in the confirmation interface. Omitting important pieces of information, such as the recipient or currency amount, might cause the user to cancel the transaction.

## Topics

### Creating a Payment Record Object

- [initWithPayee:payer:currencyAmount:paymentMethod:note:status:feeAmount:](inpaymentrecord/init%28payee_payer_currencyamount_paymentmethod_note_status_feeamount_%29.md): Initializes a payment record with the specified payment details.
- [initWithPayee:payer:currencyAmount:paymentMethod:note:status:](inpaymentrecord/init%28payee_payer_currencyamount_paymentmethod_note_status_%29.md): Initializes a payment record with the specified payment details.

### Getting the Payment Status

- [status](inpaymentrecord/status.md): The current status of the financial transaction.

### Getting Payment Record Details

- [payee](inpaymentrecord/payee.md): The person receiving the funds.
- [payer](inpaymentrecord/payer.md): The person providing the funds.
- [currencyAmount](inpaymentrecord/currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](inpaymentrecord/feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](inpaymentrecord/paymentmethod.md): The payment method used to supply the funds.
- [note](inpaymentrecord/note.md): A description of the payment to send.

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
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
