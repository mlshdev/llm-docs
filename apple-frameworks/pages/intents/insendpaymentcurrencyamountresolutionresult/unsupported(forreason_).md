> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentcurrencyamountresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/insendpaymentcurrencyamountresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```swift
class func unsupported(forReason reason: INSendPaymentCurrencyAmountUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason why the currency amount is unsupported. For a list of possible values, see [INSendPaymentCurrencyAmountUnsupportedReason](../insendpaymentcurrencyamountunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INSendPaymentCurrencyAmountResolutionResult](../insendpaymentcurrencyamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the specified currency amount does not met the payment criteria for your service. For example, you might specify this value when the user attempts to send money in an unsupported currency or the transfer exceeds the maximum limit for the user’s account.

## See Also

### Creating a Resolution Result Object

- [INSendPaymentCurrencyAmountUnsupportedReason](../insendpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
- [init(currencyAmountResolutionResult:)](init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INSendPaymentCurrencyAmountUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason why the currency amount is unsupported. For a list of possible values, see [INSendPaymentCurrencyAmountUnsupportedReason](../insendpaymentcurrencyamountunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INSendPaymentCurrencyAmountResolutionResult](../insendpaymentcurrencyamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the specified currency amount does not met the payment criteria for your service. For example, you might specify this value when the user attempts to send money in an unsupported currency or the transfer exceeds the maximum limit for the user’s account.

## See Also

### Creating a Resolution Result Object

- [INSendPaymentCurrencyAmountUnsupportedReason](../insendpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
- [initWithCurrencyAmountResolutionResult:](init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.
