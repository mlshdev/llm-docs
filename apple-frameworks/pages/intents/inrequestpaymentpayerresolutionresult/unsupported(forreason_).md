> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentpayerresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/inrequestpaymentpayerresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```swift
class func unsupported(forReason reason: INRequestPaymentPayerUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason why the specified person is unsupported. For a list of possible values, see [INRequestPaymentPayerUnsupportedReason](../inrequestpaymentpayerunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INRequestPaymentPayerResolutionResult](../inrequestpaymentpayerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the designated payer does not meet your qualifications for delivering a payment. For example, you might use this method if the user’s account does not have sufficient funds or you cant verify the user’s credentials.

## See Also

### Creating a Resolution Result Object

- [INRequestPaymentPayerUnsupportedReason](../inrequestpaymentpayerunsupportedreason.md): Constants indicating the reason for being unable to resolve the provider of the funds.
- [init(personResolutionResult:)](init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INRequestPaymentPayerUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason why the specified person is unsupported. For a list of possible values, see [INRequestPaymentPayerUnsupportedReason](../inrequestpaymentpayerunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INRequestPaymentPayerResolutionResult](../inrequestpaymentpayerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the designated payer does not meet your qualifications for delivering a payment. For example, you might use this method if the user’s account does not have sufficient funds or you cant verify the user’s credentials.

## See Also

### Creating a Resolution Result Object

- [INRequestPaymentPayerUnsupportedReason](../inrequestpaymentpayerunsupportedreason.md): Constants indicating the reason for being unable to resolve the provider of the funds.
- [initWithPersonResolutionResult:](init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.
