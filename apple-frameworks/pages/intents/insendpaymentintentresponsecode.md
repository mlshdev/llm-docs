> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintentresponsecode](https://developer.apple.com/documentation/intents/insendpaymentintentresponsecode)

# INSendPaymentIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```swift
enum INSendPaymentIntentResponseCode
```

## Topics

### Constants

- [INSendPaymentIntentResponseCode.unspecified](insendpaymentintentresponsecode/unspecified.md): The response didn’t specify a response code.
- [INSendPaymentIntentResponseCode.ready](insendpaymentintentresponsecode/ready.md): You are ready to handle the intent.
- [INSendPaymentIntentResponseCode.inProgress](insendpaymentintentresponsecode/inprogress.md): You are in the process of handling the intent.
- [INSendPaymentIntentResponseCode.success](insendpaymentintentresponsecode/success.md): You successfully handled the intent.
- [INSendPaymentIntentResponseCode.failure](insendpaymentintentresponsecode/failure.md): You were unable to send the funds.
- [INSendPaymentIntentResponseCode.failureRequiringAppLaunch](insendpaymentintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to send the funds.
- [INSendPaymentIntentResponseCode.failureCredentialsUnverified](insendpaymentintentresponsecode/failurecredentialsunverified.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsAmountBelowMinimum](insendpaymentintentresponsecode/failurepaymentsamountbelowminimum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsAmountAboveMaximum](insendpaymentintentresponsecode/failurepaymentsamountabovemaximum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failurePaymentsCurrencyUnsupported](insendpaymentintentresponsecode/failurepaymentscurrencyunsupported.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureInsufficientFunds](insendpaymentintentresponsecode/failureinsufficientfunds.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureNoBankAccount](insendpaymentintentresponsecode/failurenobankaccount.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCode.failureNotEligible](insendpaymentintentresponsecode/failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSendPaymentIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](insendpaymentintentresponsecode/failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

### Initializers

- [init(rawValue:)](insendpaymentintentresponsecode/init%28rawvalue_%29.md)

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

- [code](insendpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INSendPaymentIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INSendPaymentIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSendPaymentIntentResponseCodeUnspecified](insendpaymentintentresponsecode/unspecified.md): The response didn’t specify a response code.
- [INSendPaymentIntentResponseCodeReady](insendpaymentintentresponsecode/ready.md): You are ready to handle the intent.
- [INSendPaymentIntentResponseCodeInProgress](insendpaymentintentresponsecode/inprogress.md): You are in the process of handling the intent.
- [INSendPaymentIntentResponseCodeSuccess](insendpaymentintentresponsecode/success.md): You successfully handled the intent.
- [INSendPaymentIntentResponseCodeFailure](insendpaymentintentresponsecode/failure.md): You were unable to send the funds.
- [INSendPaymentIntentResponseCodeFailureRequiringAppLaunch](insendpaymentintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to send the funds.
- [INSendPaymentIntentResponseCodeFailureCredentialsUnverified](insendpaymentintentresponsecode/failurecredentialsunverified.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsAmountBelowMinimum](insendpaymentintentresponsecode/failurepaymentsamountbelowminimum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsAmountAboveMaximum](insendpaymentintentresponsecode/failurepaymentsamountabovemaximum.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailurePaymentsCurrencyUnsupported](insendpaymentintentresponsecode/failurepaymentscurrencyunsupported.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureInsufficientFunds](insendpaymentintentresponsecode/failureinsufficientfunds.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureNoBankAccount](insendpaymentintentresponsecode/failurenobankaccount.md): You were unable to deliver the request.
- [INSendPaymentIntentResponseCodeFailureNotEligible](insendpaymentintentresponsecode/failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSendPaymentIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](insendpaymentintentresponsecode/failuretermsandconditionsacceptancerequired.md): The request failed because the user must accept the app’s terms and conditions.

## See Also

### Getting the Response Code

- [code](insendpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.
