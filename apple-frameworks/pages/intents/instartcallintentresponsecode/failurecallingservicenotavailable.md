> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintentresponsecode/failurecallingservicenotavailable](https://developer.apple.com/documentation/intents/instartcallintentresponsecode/failurecallingservicenotavailable)

# INStartCallIntentResponseCode.failureCallingServiceNotAvailable (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

A response code that indicates your app’s calling service isn’t currently available.

## Declaration

```swift
case failureCallingServiceNotAvailable
```

<a id="Discussion"></a>

## Discussion

Use this response code when your calling service is temporarily unavailable for any reason.

## See Also

### Response Code

- [INStartCallIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartCallIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INStartCallIntentResponseCode.continueInApp](continueinapp.md): A response code that indicates your app extension is ready to transfer control to the app to start the call.
- [INStartCallIntentResponseCode.userConfirmationRequired](userconfirmationrequired.md): A response code that indicates the user must confirm the call information before starting the call.
- [INStartCallIntentResponseCode.failure](failure.md): A response code that indicates you were unable to perform the search.
- [INStartCallIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start a call.
- [INStartCallIntentResponseCode.failureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): A response code that indicates the app doesn’t support the specified contact.
- [INStartCallIntentResponseCode.failureAirplaneModeEnabled](failureairplanemodeenabled.md): A response code that indicates the call can’t start due to the user’s device being in airplane mode.
- [INStartCallIntentResponseCode.failureUnableToHandOff](failureunabletohandoff.md): A response code that indicates the app can’t hand off the call.
- [INStartCallIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): A response code that indicates the user must perform additional configuration steps before creating a call is possible.
- [INStartCallIntentResponseCode.failureCallInProgress](failurecallinprogress.md): A response code that indicates the current call failed.

# INStartCallIntentResponseCodeFailureCallingServiceNotAvailable (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

A response code that indicates your app’s calling service isn’t currently available.

## Declaration

```objectivec
INStartCallIntentResponseCodeFailureCallingServiceNotAvailable
```

<a id="Discussion"></a>

## Discussion

Use this response code when your calling service is temporarily unavailable for any reason.

## See Also

### Response Code

- [INStartCallIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartCallIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INStartCallIntentResponseCodeContinueInApp](continueinapp.md): A response code that indicates your app extension is ready to transfer control to the app to start the call.
- [INStartCallIntentResponseCodeUserConfirmationRequired](userconfirmationrequired.md): A response code that indicates the user must confirm the call information before starting the call.
- [INStartCallIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to perform the search.
- [INStartCallIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start a call.
- [INStartCallIntentResponseCodeFailureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): A response code that indicates the app doesn’t support the specified contact.
- [INStartCallIntentResponseCodeFailureAirplaneModeEnabled](failureairplanemodeenabled.md): A response code that indicates the call can’t start due to the user’s device being in airplane mode.
- [INStartCallIntentResponseCodeFailureUnableToHandOff](failureunabletohandoff.md): A response code that indicates the app can’t hand off the call.
- [INStartCallIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): A response code that indicates the user must perform additional configuration steps before creating a call is possible.
- [INStartCallIntentResponseCodeFailureCallInProgress](failurecallinprogress.md): A response code that indicates the current call failed.
