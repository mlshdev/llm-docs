> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponsecode/ready](https://developer.apple.com/documentation/intents/intransfermoneyintentresponsecode/ready)

# INTransferMoneyIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to fulfill the intent. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INTransferMoneyIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INTransferMoneyIntentResponseCode.inProgress](inprogress.md): Deprecated. You’ve received the transaction details but haven’t yet scheduled the transaction.
- [INTransferMoneyIntentResponseCode.success](success.md): Deprecated. You successfully scheduled the transaction.
- [INTransferMoneyIntentResponseCode.failure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INTransferMoneyIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INTransferMoneyIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the user’s credentials.
- [INTransferMoneyIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

# INTransferMoneyIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INTransferMoneyIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to fulfill the intent. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INTransferMoneyIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INTransferMoneyIntentResponseCodeInProgress](inprogress.md): Deprecated. You’ve received the transaction details but haven’t yet scheduled the transaction.
- [INTransferMoneyIntentResponseCodeSuccess](success.md): Deprecated. You successfully scheduled the transaction.
- [INTransferMoneyIntentResponseCodeFailure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INTransferMoneyIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INTransferMoneyIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the user’s credentials.
- [INTransferMoneyIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.
