> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponsecode](https://developer.apple.com/documentation/intents/intransfermoneyintentresponsecode)

# INTransferMoneyIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INTransferMoneyIntentResponseCode
```

## Topics

### Constants

- [INTransferMoneyIntentResponseCode.unspecified](intransfermoneyintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INTransferMoneyIntentResponseCode.ready](intransfermoneyintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INTransferMoneyIntentResponseCode.inProgress](intransfermoneyintentresponsecode/inprogress.md): Deprecated. You’ve received the transaction details but haven’t yet scheduled the transaction.
- [INTransferMoneyIntentResponseCode.success](intransfermoneyintentresponsecode/success.md): Deprecated. You successfully scheduled the transaction.
- [INTransferMoneyIntentResponseCode.failure](intransfermoneyintentresponsecode/failure.md): Deprecated. You were unable to schedule the transaction.
- [INTransferMoneyIntentResponseCode.failureRequiringAppLaunch](intransfermoneyintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INTransferMoneyIntentResponseCode.failureCredentialsUnverified](intransfermoneyintentresponsecode/failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the user’s credentials.
- [INTransferMoneyIntentResponseCode.failureInsufficientFunds](intransfermoneyintentresponsecode/failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

### Initializers

- [init(rawValue:)](intransfermoneyintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](intransfermoneyintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INTransferMoneyIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INTransferMoneyIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INTransferMoneyIntentResponseCodeUnspecified](intransfermoneyintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INTransferMoneyIntentResponseCodeReady](intransfermoneyintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INTransferMoneyIntentResponseCodeInProgress](intransfermoneyintentresponsecode/inprogress.md): Deprecated. You’ve received the transaction details but haven’t yet scheduled the transaction.
- [INTransferMoneyIntentResponseCodeSuccess](intransfermoneyintentresponsecode/success.md): Deprecated. You successfully scheduled the transaction.
- [INTransferMoneyIntentResponseCodeFailure](intransfermoneyintentresponsecode/failure.md): Deprecated. You were unable to schedule the transaction.
- [INTransferMoneyIntentResponseCodeFailureRequiringAppLaunch](intransfermoneyintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INTransferMoneyIntentResponseCodeFailureCredentialsUnverified](intransfermoneyintentresponsecode/failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the user’s credentials.
- [INTransferMoneyIntentResponseCodeFailureInsufficientFunds](intransfermoneyintentresponsecode/failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

## See Also

### Getting the Response Code

- [code](intransfermoneyintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
