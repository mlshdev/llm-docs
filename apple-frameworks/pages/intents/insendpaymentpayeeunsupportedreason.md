> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentpayeeunsupportedreason](https://developer.apple.com/documentation/intents/insendpaymentpayeeunsupportedreason)

# INSendPaymentPayeeUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason for being unable to resolve the payee.

## Declaration

```swift
enum INSendPaymentPayeeUnsupportedReason
```

## Topics

### Constants

- [INSendPaymentPayeeUnsupportedReason.credentialsUnverified](insendpaymentpayeeunsupportedreason/credentialsunverified.md): The payee’s credentials are unverifiable.
- [INSendPaymentPayeeUnsupportedReason.insufficientFunds](insendpaymentpayeeunsupportedreason/insufficientfunds.md): The current user’s account has insufficient funds to make the payment.
- [INSendPaymentPayeeUnsupportedReason.noAccount](insendpaymentpayeeunsupportedreason/noaccount.md): The payee does not have an account in your app.
- [INSendPaymentPayeeUnsupportedReason.noValidHandle](insendpaymentpayeeunsupportedreason/novalidhandle.md): The unique handle that you use to identify the payee is invalid or missing.

### Initializers

- [init(rawValue:)](insendpaymentpayeeunsupportedreason/init%28rawvalue_%29.md)

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

- [unsupported(forReason:)](insendpaymentpayeeresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [init(personResolutionResult:)](insendpaymentpayeeresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

# INSendPaymentPayeeUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason for being unable to resolve the payee.

## Declaration

```objectivec
enum INSendPaymentPayeeUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INSendPaymentPayeeUnsupportedReasonCredentialsUnverified](insendpaymentpayeeunsupportedreason/credentialsunverified.md): The payee’s credentials are unverifiable.
- [INSendPaymentPayeeUnsupportedReasonInsufficientFunds](insendpaymentpayeeunsupportedreason/insufficientfunds.md): The current user’s account has insufficient funds to make the payment.
- [INSendPaymentPayeeUnsupportedReasonNoAccount](insendpaymentpayeeunsupportedreason/noaccount.md): The payee does not have an account in your app.
- [INSendPaymentPayeeUnsupportedReasonNoValidHandle](insendpaymentpayeeunsupportedreason/novalidhandle.md): The unique handle that you use to identify the payee is invalid or missing.

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](insendpaymentpayeeresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [initWithPersonResolutionResult:](insendpaymentpayeeresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.
