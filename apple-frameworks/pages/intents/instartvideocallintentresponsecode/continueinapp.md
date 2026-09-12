> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/instartvideocallintentresponsecode/continueinapp)

# INStartVideoCallIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Your extension is ready to transfer control to the app so that your app can place the call.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the NSUserActivity object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you.) Siri adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to place the call.

## See Also

### Constants

- [INStartVideoCallIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INStartVideoCallIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartVideoCallIntentResponseCode.failure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartVideoCallIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartVideoCallIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartVideoCallIntentResponseCode.failureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartVideoCallIntentResponseCode.failureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. Your app can’t use the specified contact to place the call.
- [INStartVideoCallIntentResponseCode.failureInvalidNumber](failureinvalidnumber.md): Deprecated. The specified number doesn’t support video calls.

# INStartVideoCallIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Your extension is ready to transfer control to the app so that your app can place the call.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
INStartVideoCallIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the NSUserActivity object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you.) Siri adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to place the call.

## See Also

### Constants

- [INStartVideoCallIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INStartVideoCallIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartVideoCallIntentResponseCodeFailure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartVideoCallIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartVideoCallIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartVideoCallIntentResponseCodeFailureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartVideoCallIntentResponseCodeFailureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. Your app can’t use the specified contact to place the call.
- [INStartVideoCallIntentResponseCodeFailureInvalidNumber](failureinvalidnumber.md): Deprecated. The specified number doesn’t support video calls.
