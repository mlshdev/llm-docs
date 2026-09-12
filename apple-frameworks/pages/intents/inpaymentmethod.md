> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethod](https://developer.apple.com/documentation/intents/inpaymentmethod)

# INPaymentMethod (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Information about a form of payment supported by your app.

## Declaration

```swift
class INPaymentMethod
```

<a id="overview"></a>

## Overview

An [INPaymentMethod](inpaymentmethod.md) object describes a way in which a user can pay for services. A payment method object stores information that you can display to the user when choosing payment options. Specifically, the object stores information about the type of payment, the name of the payment service, and an icon for any related brand information. Typical payment methods include credit cards and bank accounts. For example, you would use a payment method object to specify information about a brand of credit card that you support.

You create payment method objects as needed and include them in any appropriate response objects. The names of payment methods in a single response should be different to avoid confusion, but their types may still be the same. For example, you can have multiple credit card payment methods as long as each one has a unique name.

> **Note**

>  You do not use payment methods to process actual payments from the user. You are responsible for handling any financial transactions from your app or Intents extension.

## Topics

### Initializing a Payment Object

- [init(type:name:identificationHint:icon:)](inpaymentmethod/init%28type_name_identificationhint_icon_%29.md): Initializes the payment method object with the specified type and descriptive information.
- [applePay()](inpaymentmethod/applepay%28%29.md): Creates and returns a payment method object that represents payment through Apple Pay.

### Getting the Payment Information

- [type](inpaymentmethod/type.md): The type of account used as the source of funds.
- [INPaymentMethodType](inpaymentmethodtype.md): Constants describing the available payment options.
- [name](inpaymentmethod/name.md): The name of this payment type.
- [identificationHint](inpaymentmethod/identificationhint.md): The hint for identifying the payment method.
- [icon](inpaymentmethod/icon.md): The image representing the payment method.

### Initializers

- [init(coder:)](inpaymentmethod/init%28coder_%29.md)

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
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INPaymentMethod (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Information about a form of payment supported by your app.

## Declaration

```objectivec
@interface INPaymentMethod : NSObject
```

<a id="overview"></a>

## Overview

An [INPaymentMethod](inpaymentmethod.md) object describes a way in which a user can pay for services. A payment method object stores information that you can display to the user when choosing payment options. Specifically, the object stores information about the type of payment, the name of the payment service, and an icon for any related brand information. Typical payment methods include credit cards and bank accounts. For example, you would use a payment method object to specify information about a brand of credit card that you support.

You create payment method objects as needed and include them in any appropriate response objects. The names of payment methods in a single response should be different to avoid confusion, but their types may still be the same. For example, you can have multiple credit card payment methods as long as each one has a unique name.

> **Note**

>  You do not use payment methods to process actual payments from the user. You are responsible for handling any financial transactions from your app or Intents extension.

## Topics

### Initializing a Payment Object

- [initWithType:name:identificationHint:icon:](inpaymentmethod/init%28type_name_identificationhint_icon_%29.md): Initializes the payment method object with the specified type and descriptive information.
- [applePayPaymentMethod](inpaymentmethod/applepay%28%29.md): Creates and returns a payment method object that represents payment through Apple Pay.

### Getting the Payment Information

- [type](inpaymentmethod/type.md): The type of account used as the source of funds.
- [INPaymentMethodType](inpaymentmethodtype.md): Constants describing the available payment options.
- [name](inpaymentmethod/name.md): The name of this payment type.
- [identificationHint](inpaymentmethod/identificationhint.md): The hint for identifying the payment method.
- [icon](inpaymentmethod/icon.md): The image representing the payment method.

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
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
