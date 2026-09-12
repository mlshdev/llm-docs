> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintentresponsecode](https://developer.apple.com/documentation/intents/inrequestpaymentintentresponsecode)

# INRequestPaymentIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```swift
enum INRequestPaymentIntentResponseCode
```

## Topics

### Constants

- [INRequestPaymentIntentResponseCode.unspecified](inrequestpaymentintentresponsecode/unspecified.md): The response didn’t specify a response code.
- [INRequestPaymentIntentResponseCode.ready](inrequestpaymentintentresponsecode/ready.md): You are ready to handle the intent.
- [INRequestPaymentIntentResponseCode.inProgress](inrequestpaymentintentresponsecode/inprogress.md): You are in the process of handling the intent.
- [INRequestPaymentIntentResponseCode.success](inrequestpaymentintentresponsecode/success.md): You successfully handled the intent.
- [INRequestPaymentIntentResponseCode.failure](inrequestpaymentintentresponsecode/failure.md): You were unable to deliver the payment request.
- [INRequestPaymentIntentResponseCode.failureRequiringAppLaunch](inrequestpaymentintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to make the payment request.
- [INRequestPaymentIntentResponseCode.failureCredentialsUnverified](inrequestpaymentintentresponsecode/failurecredentialsunverified.md): The request failed because you couldn’t verify one of the user’s credentials.
- [INRequestPaymentIntentResponseCode.failurePaymentsAmountBelowMinimum](inrequestpaymentintentresponsecode/failurepaymentsamountbelowminimum.md): The request failed because the specified amount was below the required minimum established by your app.
- [INRequestPaymentIntentResponseCode.failurePaymentsAmountAboveMaximum](inrequestpaymentintentresponsecode/failurepaymentsamountabovemaximum.md): The request failed because the specified amount was above the allowed maximum established by your app.
- [INRequestPaymentIntentResponseCode.failurePaymentsCurrencyUnsupported](inrequestpaymentintentresponsecode/failurepaymentscurrencyunsupported.md): The request failed because your app does not support the specified currency.
- [INRequestPaymentIntentResponseCode.failureNoBankAccount](inrequestpaymentintentresponsecode/failurenobankaccount.md): The request failed because you couldn’t determine a user’s bank account information.
- [INRequestPaymentIntentResponseCode.failureNotEligible](inrequestpaymentintentresponsecode/failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INRequestPaymentIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](inrequestpaymentintentresponsecode/failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

### Initializers

- [init(rawValue:)](inrequestpaymentintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inrequestpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INRequestPaymentIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INRequestPaymentIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INRequestPaymentIntentResponseCodeUnspecified](inrequestpaymentintentresponsecode/unspecified.md): The response didn’t specify a response code.
- [INRequestPaymentIntentResponseCodeReady](inrequestpaymentintentresponsecode/ready.md): You are ready to handle the intent.
- [INRequestPaymentIntentResponseCodeInProgress](inrequestpaymentintentresponsecode/inprogress.md): You are in the process of handling the intent.
- [INRequestPaymentIntentResponseCodeSuccess](inrequestpaymentintentresponsecode/success.md): You successfully handled the intent.
- [INRequestPaymentIntentResponseCodeFailure](inrequestpaymentintentresponsecode/failure.md): You were unable to deliver the payment request.
- [INRequestPaymentIntentResponseCodeFailureRequiringAppLaunch](inrequestpaymentintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to make the payment request.
- [INRequestPaymentIntentResponseCodeFailureCredentialsUnverified](inrequestpaymentintentresponsecode/failurecredentialsunverified.md): The request failed because you couldn’t verify one of the user’s credentials.
- [INRequestPaymentIntentResponseCodeFailurePaymentsAmountBelowMinimum](inrequestpaymentintentresponsecode/failurepaymentsamountbelowminimum.md): The request failed because the specified amount was below the required minimum established by your app.
- [INRequestPaymentIntentResponseCodeFailurePaymentsAmountAboveMaximum](inrequestpaymentintentresponsecode/failurepaymentsamountabovemaximum.md): The request failed because the specified amount was above the allowed maximum established by your app.
- [INRequestPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported](inrequestpaymentintentresponsecode/failurepaymentscurrencyunsupported.md): The request failed because your app does not support the specified currency.
- [INRequestPaymentIntentResponseCodeFailureNoBankAccount](inrequestpaymentintentresponsecode/failurenobankaccount.md): The request failed because you couldn’t determine a user’s bank account information.
- [INRequestPaymentIntentResponseCodeFailureNotEligible](inrequestpaymentintentresponsecode/failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INRequestPaymentIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](inrequestpaymentintentresponsecode/failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

## See Also

### Getting the Response Code

- [code](inrequestpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.
