> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintentresponsecode/failurecontactnotsupportedbyapp](https://developer.apple.com/documentation/intents/instartaudiocallintentresponsecode/failurecontactnotsupportedbyapp)

# INStartAudioCallIntentResponseCode.failureContactNotSupportedByApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

You can’t use the specified contact to place the call.

> INStartAudioCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
case failureContactNotSupportedByApp
```

<a id="Discussion"></a>

## Discussion

Use this code when the sender or recipient cannot take part in an audio call.

## See Also

### Constants

- [INStartAudioCallIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a specific status.
- [INStartAudioCallIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartAudioCallIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control so your app can place the call.
- [INStartAudioCallIntentResponseCode.failure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartAudioCallIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartAudioCallIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartAudioCallIntentResponseCode.failureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartAudioCallIntentResponseCode.failureNoValidNumber](failurenovalidnumber.md): Deprecated. The specified number doesn’t support audio calls.

# INStartAudioCallIntentResponseCodeFailureContactNotSupportedByApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

You can’t use the specified contact to place the call.

> INStartAudioCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
INStartAudioCallIntentResponseCodeFailureContactNotSupportedByApp
```

<a id="Discussion"></a>

## Discussion

Use this code when the sender or recipient cannot take part in an audio call.

## See Also

### Constants

- [INStartAudioCallIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a specific status.
- [INStartAudioCallIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartAudioCallIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control so your app can place the call.
- [INStartAudioCallIntentResponseCodeFailure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartAudioCallIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartAudioCallIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before initiating a call is possible.
- [INStartAudioCallIntentResponseCodeFailureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartAudioCallIntentResponseCodeFailureNoValidNumber](failurenovalidnumber.md): Deprecated. The specified number doesn’t support audio calls.
