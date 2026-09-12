> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponsecode/failure](https://developer.apple.com/documentation/intents/intransfermoneyintentresponsecode/failure)

# INTransferMoneyIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You were unable to schedule the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from scheduling the transaction.

## See Also

### Constants

- [INTransferMoneyIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INTransferMoneyIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INTransferMoneyIntentResponseCode.inProgress](inprogress.md): Deprecated. You’ve received the transaction details but haven’t yet scheduled the transaction.
- [INTransferMoneyIntentResponseCode.success](success.md): Deprecated. You successfully scheduled the transaction.
- [INTransferMoneyIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INTransferMoneyIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the user’s credentials.
- [INTransferMoneyIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

# INTransferMoneyIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You were unable to schedule the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INTransferMoneyIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from scheduling the transaction.

## See Also

### Constants

- [INTransferMoneyIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INTransferMoneyIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INTransferMoneyIntentResponseCodeInProgress](inprogress.md): Deprecated. You’ve received the transaction details but haven’t yet scheduled the transaction.
- [INTransferMoneyIntentResponseCodeSuccess](success.md): Deprecated. You successfully scheduled the transaction.
- [INTransferMoneyIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INTransferMoneyIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the user’s credentials.
- [INTransferMoneyIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.
