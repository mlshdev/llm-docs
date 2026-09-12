> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentpaymentmethod](https://developer.apple.com/documentation/appintents/intentpaymentmethod)

# IntentPaymentMethod

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Information about a form of payment supported by your app.

## Declaration

```swift
struct IntentPaymentMethod
```

## Mentioned In

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)
- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

An `IntentPaymentMethod` type describes a way someone pays for goods and services. This type contains information you can display in your interface to convey the payment type to people. Specifically, it stores the name of the payment service and an icon for any related brand information. Typical payment methods include credit cards and bank accounts.

## Topics

### Creating a payment method

- [init(type:name:identificationHint:icon:)](intentpaymentmethod/init%28type_name_identificationhint_icon_%29.md)

### Getting the payment details

- [paymentType](intentpaymentmethod/paymenttype-swift.property.md): The kind of payment method, such as a credit card or bank account
- [name](intentpaymentmethod/name.md): The user-visible name of the payment method
- [identificationHint](intentpaymentmethod/identificationhint.md): A hint making it easier for the user to identify the payment method among others of similar name or type, such as the last several digits of a credit card number
- [icon](intentpaymentmethod/icon.md): The icon or image representing this payment method
- [IntentPaymentMethod.PaymentType](intentpaymentmethod/paymenttype-swift.enum.md): Constants that describe the available payment options, such as credit cards or bank accounts.

### Type Aliases

- [IntentPaymentMethod.Specification](intentpaymentmethod/specification.md)
- [IntentPaymentMethod.UnwrappedType](intentpaymentmethod/unwrappedtype.md)
- [IntentPaymentMethod.ValueType](intentpaymentmethod/valuetype.md)

### Type Properties

- [defaultResolverSpecification](intentpaymentmethod/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Monetary types

- [IntentCurrencyAmount](intentcurrencyamount.md): An amount of money to transfer during a financial transaction.
