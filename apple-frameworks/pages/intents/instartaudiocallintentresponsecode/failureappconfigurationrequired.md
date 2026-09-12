> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintentresponsecode/failureappconfigurationrequired](https://developer.apple.com/documentation/intents/instartaudiocallintentresponsecode/failureappconfigurationrequired)

# INStartAudioCallIntentResponseCode.failureAppConfigurationRequired (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

The user must perform additional configuration steps before initiating a call is possible.

> INStartAudioCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
case failureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this response code when your app isn’t configured to start an audio call. For example, you might return this code if the user hasn’t yet set up a calling account. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INStartAudioCallIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a specific status.
- [INStartAudioCallIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartAudioCallIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control so your app can place the call.
- [INStartAudioCallIntentResponseCode.failure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartAudioCallIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartAudioCallIntentResponseCode.failureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartAudioCallIntentResponseCode.failureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. You can’t use the specified contact to place the call.
- [INStartAudioCallIntentResponseCode.failureNoValidNumber](failurenovalidnumber.md): Deprecated. The specified number doesn’t support audio calls.

# INStartAudioCallIntentResponseCodeFailureAppConfigurationRequired (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

The user must perform additional configuration steps before initiating a call is possible.

> INStartAudioCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
INStartAudioCallIntentResponseCodeFailureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this response code when your app isn’t configured to start an audio call. For example, you might return this code if the user hasn’t yet set up a calling account. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INStartAudioCallIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a specific status.
- [INStartAudioCallIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartAudioCallIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control so your app can place the call.
- [INStartAudioCallIntentResponseCodeFailure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartAudioCallIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartAudioCallIntentResponseCodeFailureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartAudioCallIntentResponseCodeFailureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. You can’t use the specified contact to place the call.
- [INStartAudioCallIntentResponseCodeFailureNoValidNumber](failurenovalidnumber.md): Deprecated. The specified number doesn’t support audio calls.
