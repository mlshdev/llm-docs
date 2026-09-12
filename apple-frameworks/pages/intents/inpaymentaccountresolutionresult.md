> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccountresolutionresult](https://developer.apple.com/documentation/intents/inpaymentaccountresolutionresult)

# INPaymentAccountResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the user account that provides the funds to pay a bill.

## Declaration

```swift
class INPaymentAccountResolutionResult
```

<a id="overview"></a>

## Overview

An [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md) object is what you return when resolving parameters containing an [INPaymentAccount](inpaymentaccount.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inpaymentaccountresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](inpaymentaccountresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [disambiguation(with:)](inpaymentaccountresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md): A resolution result for the amount to pay for a bill.
- [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md): Describes the result of resolving a payment method.
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md): A resolution result for the payment status of a bill during a search.
- [INRequestPaymentCurrencyAmountResolutionResult](inrequestpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount associated with a payment request.
- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md): A resolution result for the person making the payment.
- [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount to send to another user.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.

# INPaymentAccountResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the user account that provides the funds to pay a bill.

## Declaration

```objectivec
@interface INPaymentAccountResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md) object is what you return when resolving parameters containing an [INPaymentAccount](inpaymentaccount.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedPaymentAccount:](inpaymentaccountresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithPaymentAccountToConfirm:](inpaymentaccountresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [disambiguationWithPaymentAccountsToDisambiguate:](inpaymentaccountresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INAccountTypeResolutionResult](inaccounttyperesolutionresult.md): A resolution result for account types.
- [INBalanceTypeResolutionResult](inbalancetyperesolutionresult.md): A resolution result for balance types.
- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md): A resolution result for a currency amount associated with an intent.
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md): A resolution result for the amount to pay for a bill.
- [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md): Describes the result of resolving a payment method.
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md): A resolution result for the payment status of a bill during a search.
- [INRequestPaymentCurrencyAmountResolutionResult](inrequestpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount associated with a payment request.
- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md): A resolution result for the person making the payment.
- [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md): A resolution result for the currency amount to send to another user.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.
