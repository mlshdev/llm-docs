> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentpayerresolutionresult](https://developer.apple.com/documentation/intents/inrequestpaymentpayerresolutionresult)

# INRequestPaymentPayerResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the person making the payment.

## Declaration

```swift
class INRequestPaymentPayerResolutionResult
```

<a id="overview"></a>

## Overview

An [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md) object is what you return when resolving parameters containing an [INPerson](inperson.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution options, see [INPersonResolutionResult](inpersonresolutionresult.md) and [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [unsupported(forReason:)](inrequestpaymentpayerresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [INRequestPaymentPayerUnsupportedReason](inrequestpaymentpayerunsupportedreason.md): Constants indicating the reason for being unable to resolve the provider of the funds.
- [init(personResolutionResult:)](inrequestpaymentpayerresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

## Relationships

### Inherits From

- [INPersonResolutionResult](inpersonresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INAccountTypeResolutionResult](inaccounttyperesolutionresult.md): A resolution result for account types.
- [INBalanceTypeResolutionResult](inbalancetyperesolutionresult.md): A resolution result for balance types.
- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md): A resolution result for a currency amount associated with an intent.
- [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md): A resolution result for the user account that provides the funds to pay a bill.
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md): A resolution result for the amount to pay for a bill.
- [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md): Describes the result of resolving a payment method.
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md): A resolution result for the payment status of a bill during a search.
- [INRequestPaymentCurrencyAmountResolutionResult](inrequestpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount associated with a payment request.
- [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount to send to another user.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.

# INRequestPaymentPayerResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the person making the payment.

## Declaration

```objectivec
@interface INRequestPaymentPayerResolutionResult : INPersonResolutionResult
```

<a id="overview"></a>

## Overview

An [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md) object is what you return when resolving parameters containing an [INPerson](inperson.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution options, see [INPersonResolutionResult](inpersonresolutionresult.md) and [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [unsupportedForReason:](inrequestpaymentpayerresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [INRequestPaymentPayerUnsupportedReason](inrequestpaymentpayerunsupportedreason.md): Constants indicating the reason for being unable to resolve the provider of the funds.
- [initWithPersonResolutionResult:](inrequestpaymentpayerresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

## Relationships

### Inherits From

- [INPersonResolutionResult](inpersonresolutionresult.md)

## See Also

### Resolution Results

- [INAccountTypeResolutionResult](inaccounttyperesolutionresult.md): A resolution result for account types.
- [INBalanceTypeResolutionResult](inbalancetyperesolutionresult.md): A resolution result for balance types.
- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md): A resolution result for a currency amount associated with an intent.
- [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md): A resolution result for the user account that provides the funds to pay a bill.
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md): A resolution result for the amount to pay for a bill.
- [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md): Describes the result of resolving a payment method.
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md): A resolution result for the payment status of a bill during a search.
- [INRequestPaymentCurrencyAmountResolutionResult](inrequestpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount associated with a payment request.
- [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount to send to another user.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.
