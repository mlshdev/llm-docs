> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintentresponsecode/failurepaymentscurrencyunsupported](https://developer.apple.com/documentation/intents/insendpaymentintentresponsecode/failurepaymentscurrencyunsupported)

# INSendPaymentIntentResponseCode.failurePaymentsCurrencyUnsupported (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You were unable to deliver the request.

## Declaration

```swift
case failurePaymentsCurrencyUnsupported
```

<a id="Discussion"></a>

## Discussion

Use this response code when the currency used for payment is not one that your app supports.

## See Also

### Constants

- [INSendPaymentIntentResponseCode.unspecified](unspecified.md): The response didn’t specify a response code.
- [INSendPaymentIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSendPaymentIntentResponseCode.inProgress](inprogress.md): You are in the process of handling the intent.
- [INSendPaymentIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSendPaymentIntentResponseCode.failure](failure.md): You were unable to send the funds.
- [INSendPaymentIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to send the funds.
- [INSendPaymentIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureInsufficientFunds](failureinsufficientfunds.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureNoBankAccount](failurenobankaccount.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSendPaymentIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

# INSendPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You were unable to deliver the request.

## Declaration

```objectivec
INSendPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported
```

<a id="Discussion"></a>

## Discussion

Use this response code when the currency used for payment is not one that your app supports.

## See Also

### Constants

- [INSendPaymentIntentResponseCodeUnspecified](unspecified.md): The response didn’t specify a response code.
- [INSendPaymentIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSendPaymentIntentResponseCodeInProgress](inprogress.md): You are in the process of handling the intent.
- [INSendPaymentIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSendPaymentIntentResponseCodeFailure](failure.md): You were unable to send the funds.
- [INSendPaymentIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to send the funds.
- [INSendPaymentIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureInsufficientFunds](failureinsufficientfunds.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureNoBankAccount](failurenobankaccount.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSendPaymentIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.
