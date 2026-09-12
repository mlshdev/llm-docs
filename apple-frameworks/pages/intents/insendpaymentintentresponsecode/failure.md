> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintentresponsecode/failure](https://developer.apple.com/documentation/intents/insendpaymentintentresponsecode/failure)

# INSendPaymentIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You were unable to send the funds.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from completing the transaction.

## See Also

### Constants

- [INSendPaymentIntentResponseCode.unspecified](unspecified.md): The response didn’t specify a response code.
- [INSendPaymentIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSendPaymentIntentResponseCode.inProgress](inprogress.md): You are in the process of handling the intent.
- [INSendPaymentIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSendPaymentIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to send the funds.
- [INSendPaymentIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsCurrencyUnsupported](failurepaymentscurrencyunsupported.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureNoBankAccount](failurenobankaccount.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSendPaymentIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

# INSendPaymentIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You were unable to send the funds.

## Declaration

```objectivec
INSendPaymentIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from completing the transaction.

## See Also

### Constants

- [INSendPaymentIntentResponseCodeUnspecified](unspecified.md): The response didn’t specify a response code.
- [INSendPaymentIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSendPaymentIntentResponseCodeInProgress](inprogress.md): You are in the process of handling the intent.
- [INSendPaymentIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSendPaymentIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to send the funds.
- [INSendPaymentIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported](failurepaymentscurrencyunsupported.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureNoBankAccount](failurenobankaccount.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSendPaymentIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.
