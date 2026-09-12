> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inpaybillintentresponsecode/failurerequiringapplaunch)

# INPayBillIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to schedule the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you require additional information from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INPayBillIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCode.inProgress](inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCode.success](success.md): Deprecated. You successfully scheduled the transaction.
- [INPayBillIntentResponseCode.failure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the credentials of the user or the payee.
- [INPayBillIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

# INPayBillIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to schedule the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INPayBillIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you require additional information from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INPayBillIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCodeInProgress](inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCodeSuccess](success.md): Deprecated. You successfully scheduled the transaction.
- [INPayBillIntentResponseCodeFailure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the credentials of the user or the payee.
- [INPayBillIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.
