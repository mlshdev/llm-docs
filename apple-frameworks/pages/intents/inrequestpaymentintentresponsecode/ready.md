> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintentresponsecode/ready](https://developer.apple.com/documentation/intents/inrequestpaymentintentresponsecode/ready)

# INRequestPaymentIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You are ready to handle the intent.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your Intents extension is ready and able to act on the intent.

## See Also

### Constants

- [INRequestPaymentIntentResponseCode.unspecified](unspecified.md): The response didn’t specify a response code.
- [INRequestPaymentIntentResponseCode.inProgress](inprogress.md): You are in the process of handling the intent.
- [INRequestPaymentIntentResponseCode.success](success.md): You successfully handled the intent.
- [INRequestPaymentIntentResponseCode.failure](failure.md): You were unable to deliver the payment request.
- [INRequestPaymentIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the payment request.
- [INRequestPaymentIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): The request failed because you couldn’t verify one of the user’s credentials.
- [INRequestPaymentIntentResponseCode.failurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): The request failed because the specified amount was below the required minimum established by your app.
- [INRequestPaymentIntentResponseCode.failurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): The request failed because the specified amount was above the allowed maximum established by your app.
- [INRequestPaymentIntentResponseCode.failurePaymentsCurrencyUnsupported](failurepaymentscurrencyunsupported.md): The request failed because your app does not support the specified currency.
- [INRequestPaymentIntentResponseCode.failureNoBankAccount](failurenobankaccount.md): The request failed because you couldn’t determine a user’s bank account information.
- [INRequestPaymentIntentResponseCode.failureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INRequestPaymentIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

# INRequestPaymentIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You are ready to handle the intent.

## Declaration

```objectivec
INRequestPaymentIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your Intents extension is ready and able to act on the intent.

## See Also

### Constants

- [INRequestPaymentIntentResponseCodeUnspecified](unspecified.md): The response didn’t specify a response code.
- [INRequestPaymentIntentResponseCodeInProgress](inprogress.md): You are in the process of handling the intent.
- [INRequestPaymentIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INRequestPaymentIntentResponseCodeFailure](failure.md): You were unable to deliver the payment request.
- [INRequestPaymentIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the payment request.
- [INRequestPaymentIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): The request failed because you couldn’t verify one of the user’s credentials.
- [INRequestPaymentIntentResponseCodeFailurePaymentsAmountBelowMinimum](failurepaymentsamountbelowminimum.md): The request failed because the specified amount was below the required minimum established by your app.
- [INRequestPaymentIntentResponseCodeFailurePaymentsAmountAboveMaximum](failurepaymentsamountabovemaximum.md): The request failed because the specified amount was above the allowed maximum established by your app.
- [INRequestPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported](failurepaymentscurrencyunsupported.md): The request failed because your app does not support the specified currency.
- [INRequestPaymentIntentResponseCodeFailureNoBankAccount](failurenobankaccount.md): The request failed because you couldn’t determine a user’s bank account information.
- [INRequestPaymentIntentResponseCodeFailureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INRequestPaymentIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.
