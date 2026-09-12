> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentcurrencyamountresolutionresult](https://developer.apple.com/documentation/intents/insendpaymentcurrencyamountresolutionresult)

# INSendPaymentCurrencyAmountResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the currency amount to send to another user.

## Declaration

```swift
class INSendPaymentCurrencyAmountResolutionResult
```

<a id="overview"></a>

## Overview

An [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md) object is what you return when resolving parameters containing an [INCurrencyAmount](incurrencyamount.md) value. Use the creation method that best reflects your ability to resolve the parameter.

For additional resolution options, see [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md) and [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [unsupported(forReason:)](insendpaymentcurrencyamountresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [INSendPaymentCurrencyAmountUnsupportedReason](insendpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
- [init(currencyAmountResolutionResult:)](insendpaymentcurrencyamountresolutionresult/init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.

## Relationships

### Inherits From

- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md)

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
- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md): A resolution result for the person making the payment.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.

# INSendPaymentCurrencyAmountResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the currency amount to send to another user.

## Declaration

```objectivec
@interface INSendPaymentCurrencyAmountResolutionResult : INCurrencyAmountResolutionResult
```

<a id="overview"></a>

## Overview

An [INSendPaymentCurrencyAmountResolutionResult](insendpaymentcurrencyamountresolutionresult.md) object is what you return when resolving parameters containing an [INCurrencyAmount](incurrencyamount.md) value. Use the creation method that best reflects your ability to resolve the parameter.

For additional resolution options, see [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md) and [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [unsupportedForReason:](insendpaymentcurrencyamountresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [INSendPaymentCurrencyAmountUnsupportedReason](insendpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
- [initWithCurrencyAmountResolutionResult:](insendpaymentcurrencyamountresolutionresult/init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.

## Relationships

### Inherits From

- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md)

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
- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md): A resolution result for the person making the payment.
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md): A resolution result for the recipient of a payment.
