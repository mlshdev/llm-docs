> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentcurrencyamountresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/inrequestpaymentcurrencyamountresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```swift
class func unsupported(forReason reason: INRequestPaymentCurrencyAmountUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason why the currency amount is unsupported. For a list of possible values, see [INRequestPaymentCurrencyAmountUnsupportedReason](../inrequestpaymentcurrencyamountunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INRequestPaymentCurrencyAmountResolutionResult](../inrequestpaymentcurrencyamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the specified currency amount does not met the payment criteria for your service. For example, you might specify this value when the user requests money in an unsupported currency or the request exceeds the maximum transfer limit for the user’s account.

## See Also

### Creating a Resolution Result Object

- [INRequestPaymentCurrencyAmountUnsupportedReason](../inrequestpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
- [init(currencyAmountResolutionResult:)](init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INRequestPaymentCurrencyAmountUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason why the currency amount is unsupported. For a list of possible values, see [INRequestPaymentCurrencyAmountUnsupportedReason](../inrequestpaymentcurrencyamountunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INRequestPaymentCurrencyAmountResolutionResult](../inrequestpaymentcurrencyamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the specified currency amount does not met the payment criteria for your service. For example, you might specify this value when the user requests money in an unsupported currency or the request exceeds the maximum transfer limit for the user’s account.

## See Also

### Creating a Resolution Result Object

- [INRequestPaymentCurrencyAmountUnsupportedReason](../inrequestpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
- [initWithCurrencyAmountResolutionResult:](init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.
