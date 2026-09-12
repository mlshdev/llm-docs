> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentpayeeresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/insendpaymentpayeeresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```swift
class func unsupported(forReason reason: INSendPaymentPayeeUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason why the specified person is unsupported. For a list of possible values, see [INSendPaymentPayeeUnsupportedReason](../insendpaymentpayeeunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INSendPaymentPayeeResolutionResult](../insendpaymentpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the designated payee does not meet your qualifications for receiving a payment. For example, you might use this method if the current user’s account does not have sufficient funds or you can’t verify the payee’s credentials.

## See Also

### Creating a Resolution Result Object

- [INSendPaymentPayeeUnsupportedReason](../insendpaymentpayeeunsupportedreason.md): Constants indicating the reason for being unable to resolve the payee.
- [init(personResolutionResult:)](init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that the specified value is not supported.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INSendPaymentPayeeUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason why the specified person is unsupported. For a list of possible values, see [INSendPaymentPayeeUnsupportedReason](../insendpaymentpayeeunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INSendPaymentPayeeResolutionResult](../insendpaymentpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the designated payee does not meet your qualifications for receiving a payment. For example, you might use this method if the current user’s account does not have sufficient funds or you can’t verify the payee’s credentials.

## See Also

### Creating a Resolution Result Object

- [INSendPaymentPayeeUnsupportedReason](../insendpaymentpayeeunsupportedreason.md): Constants indicating the reason for being unable to resolve the payee.
- [initWithPersonResolutionResult:](init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.
