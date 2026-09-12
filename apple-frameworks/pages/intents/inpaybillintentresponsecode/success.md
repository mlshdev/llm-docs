> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponsecode/success](https://developer.apple.com/documentation/intents/inpaybillintentresponsecode/success)

# INPayBillIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You successfully scheduled the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code after scheduling the transaction successfully. Returning this code doesn’t requirea transfer of funds. It only means that you’ve recorded the transaction are making the payment on the date specified in the intent object.

## See Also

### Constants

- [INPayBillIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCode.inProgress](inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCode.failure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INPayBillIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the credentials of the user or the payee.
- [INPayBillIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.

# INPayBillIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You successfully scheduled the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INPayBillIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code after scheduling the transaction successfully. Returning this code doesn’t requirea transfer of funds. It only means that you’ve recorded the transaction are making the payment on the date specified in the intent object.

## See Also

### Constants

- [INPayBillIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INPayBillIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INPayBillIntentResponseCodeInProgress](inprogress.md): Deprecated. You’ve received the payment details and are in the process of scheduling the transaction.
- [INPayBillIntentResponseCodeFailure](failure.md): Deprecated. You were unable to schedule the transaction.
- [INPayBillIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to schedule the transaction.
- [INPayBillIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. The transaction failed because you were unable to verify the credentials of the user or the payee.
- [INPayBillIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): Deprecated. The transaction failed because the user’s account didn’t contain sufficient funds.
