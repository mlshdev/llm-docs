> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentpayerunsupportedreason](https://developer.apple.com/documentation/intents/inrequestpaymentpayerunsupportedreason)

# INRequestPaymentPayerUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason for being unable to resolve the provider of the funds.

## Declaration

```swift
enum INRequestPaymentPayerUnsupportedReason
```

## Topics

### Constants

- [INRequestPaymentPayerUnsupportedReason.credentialsUnverified](inrequestpaymentpayerunsupportedreason/credentialsunverified.md): The payer’s credentials are unverifiable.
- [INRequestPaymentPayerUnsupportedReason.noAccount](inrequestpaymentpayerunsupportedreason/noaccount.md): The payer does not have an account in your app.
- [INRequestPaymentPayerUnsupportedReason.noValidHandle](inrequestpaymentpayerunsupportedreason/novalidhandle.md): The unique handle that you use to identify the payer is invalid or missing.

### Initializers

- [init(rawValue:)](inrequestpaymentpayerunsupportedreason/init%28rawvalue_%29.md)

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

- [unsupported(forReason:)](inrequestpaymentpayerresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [init(personResolutionResult:)](inrequestpaymentpayerresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

# INRequestPaymentPayerUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason for being unable to resolve the provider of the funds.

## Declaration

```objectivec
enum INRequestPaymentPayerUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INRequestPaymentPayerUnsupportedReasonCredentialsUnverified](inrequestpaymentpayerunsupportedreason/credentialsunverified.md): The payer’s credentials are unverifiable.
- [INRequestPaymentPayerUnsupportedReasonNoAccount](inrequestpaymentpayerunsupportedreason/noaccount.md): The payer does not have an account in your app.
- [INRequestPaymentPayerUnsupportedReasonNoValidHandle](inrequestpaymentpayerunsupportedreason/novalidhandle.md): The unique handle that you use to identify the payer is invalid or missing.

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](inrequestpaymentpayerresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [initWithPersonResolutionResult:](inrequestpaymentpayerresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.
