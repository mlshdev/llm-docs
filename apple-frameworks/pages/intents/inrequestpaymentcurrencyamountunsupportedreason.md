> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentcurrencyamountunsupportedreason](https://developer.apple.com/documentation/intents/inrequestpaymentcurrencyamountunsupportedreason)

# INRequestPaymentCurrencyAmountUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason for being unable to resolve the currency amount.

## Declaration

```swift
enum INRequestPaymentCurrencyAmountUnsupportedReason
```

## Topics

### Constants

- [INRequestPaymentCurrencyAmountUnsupportedReason.paymentsAmountBelowMinimum](inrequestpaymentcurrencyamountunsupportedreason/paymentsamountbelowminimum.md): The payment amount is below the minimum transfer amount established by your app.
- [INRequestPaymentCurrencyAmountUnsupportedReason.paymentsAmountAboveMaximum](inrequestpaymentcurrencyamountunsupportedreason/paymentsamountabovemaximum.md): The payment amount exceeds the maximum transfer amount allowed by your app for the user.
- [INRequestPaymentCurrencyAmountUnsupportedReason.paymentsCurrencyUnsupported](inrequestpaymentcurrencyamountunsupportedreason/paymentscurrencyunsupported.md): The payment currency is not supported by your app.

### Initializers

- [init(rawValue:)](inrequestpaymentcurrencyamountunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result Object

- [unsupported(forReason:)](inrequestpaymentcurrencyamountresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [init(currencyAmountResolutionResult:)](inrequestpaymentcurrencyamountresolutionresult/init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.

# INRequestPaymentCurrencyAmountUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason for being unable to resolve the currency amount.

## Declaration

```objectivec
enum INRequestPaymentCurrencyAmountUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INRequestPaymentCurrencyAmountUnsupportedReasonPaymentsAmountBelowMinimum](inrequestpaymentcurrencyamountunsupportedreason/paymentsamountbelowminimum.md): The payment amount is below the minimum transfer amount established by your app.
- [INRequestPaymentCurrencyAmountUnsupportedReasonPaymentsAmountAboveMaximum](inrequestpaymentcurrencyamountunsupportedreason/paymentsamountabovemaximum.md): The payment amount exceeds the maximum transfer amount allowed by your app for the user.
- [INRequestPaymentCurrencyAmountUnsupportedReasonPaymentsCurrencyUnsupported](inrequestpaymentcurrencyamountunsupportedreason/paymentscurrencyunsupported.md): The payment currency is not supported by your app.

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](inrequestpaymentcurrencyamountresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [initWithCurrencyAmountResolutionResult:](inrequestpaymentcurrencyamountresolutionresult/init%28currencyamountresolutionresult_%29.md): Creates a resolution result object with the specified currency amount resolution result object.
