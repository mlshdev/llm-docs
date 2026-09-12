> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/instartaudiocallintentresponsecode/continueinapp)

# INStartAudioCallIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

Your extension is ready to transfer control so your app can place the call.

> INStartAudioCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you.) Siri adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to place the call.

## See Also

### Constants

- [INStartAudioCallIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a specific status.
- [INStartAudioCallIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartAudioCallIntentResponseCode.failure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartAudioCallIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartAudioCallIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartAudioCallIntentResponseCode.failureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartAudioCallIntentResponseCode.failureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. You can’t use the specified contact to place the call.
- [INStartAudioCallIntentResponseCode.failureNoValidNumber](failurenovalidnumber.md): Deprecated. The specified number doesn’t support audio calls.

# INStartAudioCallIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

Your extension is ready to transfer control so your app can place the call.

> INStartAudioCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
INStartAudioCallIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you.) Siri adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to place the call.

## See Also

### Constants

- [INStartAudioCallIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a specific status.
- [INStartAudioCallIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartAudioCallIntentResponseCodeFailure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartAudioCallIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartAudioCallIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartAudioCallIntentResponseCodeFailureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartAudioCallIntentResponseCodeFailureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. You can’t use the specified contact to place the call.
- [INStartAudioCallIntentResponseCodeFailureNoValidNumber](failurenovalidnumber.md): Deprecated. The specified number doesn’t support audio calls.
