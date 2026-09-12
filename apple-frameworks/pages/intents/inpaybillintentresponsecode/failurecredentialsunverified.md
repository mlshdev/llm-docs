> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponsecode/failurecredentialsunverified](https://developer.apple.com/documentation/intents/inpaybillintentresponsecode/failurecredentialsunverified)

# INPayBillIntentResponseCode.failureCredentialsUnverified (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The transaction failed because you were unable to verify the credentials of the user or the payee.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureCredentialsUnverified
```

<a id="Discussion"></a>

## Discussion

Use this response code when you’re unable to verify the credentials of the user or the payee. You might use this response code if the user is currently logged out of your app or is unknown to you. You might also use it if the user didn’t set up any payees in advance.

## See Also

### Constants

- [INPayBillIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCode.inProgress](inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCode.success](success.md): Deprecated. You successfully scheduled the transaction.
- [INPayBillIntentResponseCode.failure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INPayBillIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

# INPayBillIntentResponseCodeFailureCredentialsUnverified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The transaction failed because you were unable to verify the credentials of the user or the payee.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INPayBillIntentResponseCodeFailureCredentialsUnverified
```

<a id="Discussion"></a>

## Discussion

Use this response code when you’re unable to verify the credentials of the user or the payee. You might use this response code if the user is currently logged out of your app or is unknown to you. You might also use it if the user didn’t set up any payees in advance.

## See Also

### Constants

- [INPayBillIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCodeInProgress](inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCodeSuccess](success.md): Deprecated. You successfully scheduled the transaction.
- [INPayBillIntentResponseCodeFailure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INPayBillIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.
