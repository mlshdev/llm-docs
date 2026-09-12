> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintentresponsecode/failureappconfigurationrequired](https://developer.apple.com/documentation/intents/instartvideocallintentresponsecode/failureappconfigurationrequired)

# INStartVideoCallIntentResponseCode.failureAppConfigurationRequired (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The user must perform additional configuration steps before initiating a call is possible.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
case failureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this response code when your app isn’t configured to start a video call. For example, you might return this code if the user hasn’t yet set up a calling account. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INStartVideoCallIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INStartVideoCallIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartVideoCallIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that your app can place the call.
- [INStartVideoCallIntentResponseCode.failure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartVideoCallIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartVideoCallIntentResponseCode.failureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartVideoCallIntentResponseCode.failureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. Your app can’t use the specified contact to place the call.
- [INStartVideoCallIntentResponseCode.failureInvalidNumber](failureinvalidnumber.md): Deprecated. The specified number doesn’t support video calls.

# INStartVideoCallIntentResponseCodeFailureAppConfigurationRequired (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The user must perform additional configuration steps before initiating a call is possible.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
INStartVideoCallIntentResponseCodeFailureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this response code when your app isn’t configured to start a video call. For example, you might return this code if the user hasn’t yet set up a calling account. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INStartVideoCallIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INStartVideoCallIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartVideoCallIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that your app can place the call.
- [INStartVideoCallIntentResponseCodeFailure](failure.md): Deprecated. You were unable to initiate the call.
- [INStartVideoCallIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to initiate the call.
- [INStartVideoCallIntentResponseCodeFailureCallingServiceNotAvailable](failurecallingservicenotavailable.md): Deprecated. Your app’s calling service isn’t currently available.
- [INStartVideoCallIntentResponseCodeFailureContactNotSupportedByApp](failurecontactnotsupportedbyapp.md): Deprecated. Your app can’t use the specified contact to place the call.
- [INStartVideoCallIntentResponseCodeFailureInvalidNumber](failureinvalidnumber.md): Deprecated. The specified number doesn’t support video calls.
