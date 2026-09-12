> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintentresponsecode](https://developer.apple.com/documentation/intents/instartcallintentresponsecode)

# INStartCallIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate the response state.

## Declaration

```swift
enum INStartCallIntentResponseCode
```

## Topics

### Response Code

- [INStartCallIntentResponseCode.unspecified](instartcallintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INStartCallIntentResponseCode.ready](instartcallintentresponsecode/ready.md): A response code that indicates app readiness.
- [INStartCallIntentResponseCode.continueInApp](instartcallintentresponsecode/continueinapp.md): A response code that indicates your app extension is ready to transfer control to the app to start the call.
- [INStartCallIntentResponseCode.userConfirmationRequired](instartcallintentresponsecode/userconfirmationrequired.md): A response code that indicates the user must confirm the call information before starting the call.
- [INStartCallIntentResponseCode.failure](instartcallintentresponsecode/failure.md): A response code that indicates you were unable to perform the search.
- [INStartCallIntentResponseCode.failureRequiringAppLaunch](instartcallintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start a call.
- [INStartCallIntentResponseCode.failureCallingServiceNotAvailable](instartcallintentresponsecode/failurecallingservicenotavailable.md): A response code that indicates your app’s calling service isn’t currently available.
- [INStartCallIntentResponseCode.failureContactNotSupportedByApp](instartcallintentresponsecode/failurecontactnotsupportedbyapp.md): A response code that indicates the app doesn’t support the specified contact.
- [INStartCallIntentResponseCode.failureAirplaneModeEnabled](instartcallintentresponsecode/failureairplanemodeenabled.md): A response code that indicates the call can’t start due to the user’s device being in airplane mode.
- [INStartCallIntentResponseCode.failureUnableToHandOff](instartcallintentresponsecode/failureunabletohandoff.md): A response code that indicates the app can’t hand off the call.
- [INStartCallIntentResponseCode.failureAppConfigurationRequired](instartcallintentresponsecode/failureappconfigurationrequired.md): A response code that indicates the user must perform additional configuration steps before creating a call is possible.
- [INStartCallIntentResponseCode.failureCallInProgress](instartcallintentresponsecode/failurecallinprogress.md): A response code that indicates the current call failed.

### Enumeration Cases

- [INStartCallIntentResponseCode.failureRequiringInAppAuthentication](instartcallintentresponsecode/failurerequiringinappauthentication.md)

### Initializers

- [init(rawValue:)](instartcallintentresponsecode/init%28rawvalue_%29.md)

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

- [code](instartcallintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INStartCallIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate the response state.

## Declaration

```objectivec
enum INStartCallIntentResponseCode : NSInteger;
```

## Topics

### Response Code

- [INStartCallIntentResponseCodeUnspecified](instartcallintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INStartCallIntentResponseCodeReady](instartcallintentresponsecode/ready.md): A response code that indicates app readiness.
- [INStartCallIntentResponseCodeContinueInApp](instartcallintentresponsecode/continueinapp.md): A response code that indicates your app extension is ready to transfer control to the app to start the call.
- [INStartCallIntentResponseCodeUserConfirmationRequired](instartcallintentresponsecode/userconfirmationrequired.md): A response code that indicates the user must confirm the call information before starting the call.
- [INStartCallIntentResponseCodeFailure](instartcallintentresponsecode/failure.md): A response code that indicates you were unable to perform the search.
- [INStartCallIntentResponseCodeFailureRequiringAppLaunch](instartcallintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start a call.
- [INStartCallIntentResponseCodeFailureCallingServiceNotAvailable](instartcallintentresponsecode/failurecallingservicenotavailable.md): A response code that indicates your app’s calling service isn’t currently available.
- [INStartCallIntentResponseCodeFailureContactNotSupportedByApp](instartcallintentresponsecode/failurecontactnotsupportedbyapp.md): A response code that indicates the app doesn’t support the specified contact.
- [INStartCallIntentResponseCodeFailureAirplaneModeEnabled](instartcallintentresponsecode/failureairplanemodeenabled.md): A response code that indicates the call can’t start due to the user’s device being in airplane mode.
- [INStartCallIntentResponseCodeFailureUnableToHandOff](instartcallintentresponsecode/failureunabletohandoff.md): A response code that indicates the app can’t hand off the call.
- [INStartCallIntentResponseCodeFailureAppConfigurationRequired](instartcallintentresponsecode/failureappconfigurationrequired.md): A response code that indicates the user must perform additional configuration steps before creating a call is possible.
- [INStartCallIntentResponseCodeFailureCallInProgress](instartcallintentresponsecode/failurecallinprogress.md): A response code that indicates the current call failed.

### Enumeration Cases

- [INStartCallIntentResponseCodeFailureCallRinging](https://developer.apple.com/documentation/intents/instartcallintentresponsecode/instartcallintentresponsecodefailurecallringing)
- [INStartCallIntentResponseCodeFailureRequiringInAppAuthentication](instartcallintentresponsecode/failurerequiringinappauthentication.md)

## See Also

### Getting the Response Code

- [code](instartcallintentresponse/code.md): The code indicating whether you successfully handled the intent.
