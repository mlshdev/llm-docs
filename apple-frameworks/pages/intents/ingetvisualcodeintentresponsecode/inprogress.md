> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/ingetvisualcodeintentresponsecode/inprogress)

# INGetVisualCodeIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re in the process of generating the code but aren’t yet finished.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the request for a code but don’t yet have the image to display for that code. You might use this code when getting the image requires communicating with your server and you haven’t yet received a confirmation from that server.

When handling an intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCode.continueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCode.success](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCode.failure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
- [INGetVisualCodeIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.

# INGetVisualCodeIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re in the process of generating the code but aren’t yet finished.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INGetVisualCodeIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the request for a code but don’t yet have the image to display for that code. You might use this code when getting the image requires communicating with your server and you haven’t yet received a confirmation from that server.

When handling an intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCodeSuccess](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
- [INGetVisualCodeIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.
