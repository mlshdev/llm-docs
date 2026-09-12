> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inrequestpaymentintentresponsecode/failurerequiringapplaunch)

# INRequestPaymentIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app to make the payment request.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot make the payment request for a reason not covered by any other response code. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INRequestPaymentIntentResponseCode.unspecified](unspecified.md): The response didn’t specify a response code.
- [INRequestPaymentIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INRequestPaymentIntentResponseCode.inProgress](inprogress.md): You are in the process of handling the intent.
- [INRequestPaymentIntentResponseCode.success](success.md): You successfully handled the intent.
- [INRequestPaymentIntentResponseCode.failure](failure.md): You were unable to deliver the payment request.
- [INRequestPaymentIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): The request failed because you couldn’t verify one of the user’s credentials.
- [INRequestPaymentIntentResponseCode.failurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): The request failed because the specified amount was below the required minimum established by your app.
- [INRequestPaymentIntentResponseCode.failurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): The request failed because the specified amount was above the allowed maximum established by your app.
- [INRequestPaymentIntentResponseCode.failurePaymentsCurrencyUnsupported](failurepaymentscurrencyunsupported.md): The request failed because your app does not support the specified currency.
- [INRequestPaymentIntentResponseCode.failureNoBankAccount](failurenobankaccount.md): The request failed because you couldn’t determine a user’s bank account information.
- [INRequestPaymentIntentResponseCode.failureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INRequestPaymentIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

# INRequestPaymentIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app to make the payment request.

## Declaration

```objectivec
INRequestPaymentIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot make the payment request for a reason not covered by any other response code. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INRequestPaymentIntentResponseCodeUnspecified](unspecified.md): The response didn’t specify a response code.
- [INRequestPaymentIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INRequestPaymentIntentResponseCodeInProgress](inprogress.md): You are in the process of handling the intent.
- [INRequestPaymentIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INRequestPaymentIntentResponseCodeFailure](failure.md): You were unable to deliver the payment request.
- [INRequestPaymentIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): The request failed because you couldn’t verify one of the user’s credentials.
- [INRequestPaymentIntentResponseCodeFailurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): The request failed because the specified amount was below the required minimum established by your app.
- [INRequestPaymentIntentResponseCodeFailurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): The request failed because the specified amount was above the allowed maximum established by your app.
- [INRequestPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported](failurepaymentscurrencyunsupported.md): The request failed because your app does not support the specified currency.
- [INRequestPaymentIntentResponseCodeFailureNoBankAccount](failurenobankaccount.md): The request failed because you couldn’t determine a user’s bank account information.
- [INRequestPaymentIntentResponseCodeFailureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INRequestPaymentIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.
