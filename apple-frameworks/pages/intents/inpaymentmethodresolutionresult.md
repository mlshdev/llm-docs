> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethodresolutionresult](https://developer.apple.com/documentation/intents/inpaymentmethodresolutionresult)

# INPaymentMethodResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Describes the result of resolving a payment method.

## Declaration

```swift
class INPaymentMethodResolutionResult
```

<a id="overview"></a>

## Overview

An [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md) object is what you return when resolving parameters containing an [INPaymentMethod](inpaymentmethod.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [confirmationRequired(with:)](inpaymentmethodresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inpaymentmethodresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
- [success(with:)](inpaymentmethodresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

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
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md): A resolution result for the payment status of a bill during a search.
- [INRequestPaymentCurrencyAmountResolutionResult](inrequestpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount associated with a payment request.
- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md): A resolution result for the person making the payment.
- [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount to send to another user.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.

# INPaymentMethodResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Describes the result of resolving a payment method.

## Declaration

```objectivec
@interface INPaymentMethodResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md) object is what you return when resolving parameters containing an [INPaymentMethod](inpaymentmethod.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [confirmationRequiredWithPaymentMethodToConfirm:](inpaymentmethodresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithPaymentMethodsToDisambiguate:](inpaymentmethodresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
- [successWithResolvedPaymentMethod:](inpaymentmethodresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INAccountTypeResolutionResult](inaccounttyperesolutionresult.md): A resolution result for account types.
- [INBalanceTypeResolutionResult](inbalancetyperesolutionresult.md): A resolution result for balance types.
- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md): A resolution result for a currency amount associated with an intent.
- [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md): A resolution result for the user account that provides the funds to pay a bill.
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md): A resolution result for the amount to pay for a bill.
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md): A resolution result for the payment status of a bill during a search.
- [INRequestPaymentCurrencyAmountResolutionResult](inrequestpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount associated with a payment request.
- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md): A resolution result for the person making the payment.
- [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount to send to another user.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.
