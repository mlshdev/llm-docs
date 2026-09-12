> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponsecode](https://developer.apple.com/documentation/intents/inpaybillintentresponsecode)

# INPayBillIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INPayBillIntentResponseCode
```

## Topics

### Constants

- [INPayBillIntentResponseCode.unspecified](inpaybillintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCode.ready](inpaybillintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCode.inProgress](inpaybillintentresponsecode/inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCode.success](inpaybillintentresponsecode/success.md): Deprecated. You successfully scheduled the transaction.
- [INPayBillIntentResponseCode.failure](inpaybillintentresponsecode/failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCode.failureRequiringAppLaunch](inpaybillintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INPayBillIntentResponseCode.failureCredentialsUnverified](inpaybillintentresponsecode/failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the credentials of the user or the payee.
- [INPayBillIntentResponseCode.failureInsufficientFunds](inpaybillintentresponsecode/failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

### Initializers

- [init(rawValue:)](inpaybillintentresponsecode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](inpaybillintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INPayBillIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INPayBillIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INPayBillIntentResponseCodeUnspecified](inpaybillintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCodeReady](inpaybillintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCodeInProgress](inpaybillintentresponsecode/inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCodeSuccess](inpaybillintentresponsecode/success.md): Deprecated. You successfully scheduled the transaction.
- [INPayBillIntentResponseCodeFailure](inpaybillintentresponsecode/failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCodeFailureRequiringAppLaunch](inpaybillintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INPayBillIntentResponseCodeFailureCredentialsUnverified](inpaybillintentresponsecode/failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the credentials of the user or the payee.
- [INPayBillIntentResponseCodeFailureInsufficientFunds](inpaybillintentresponsecode/failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

## See Also

### Getting the Response Code

- [code](inpaybillintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
