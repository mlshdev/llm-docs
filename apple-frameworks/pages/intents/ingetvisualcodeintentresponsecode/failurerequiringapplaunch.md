> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/ingetvisualcodeintentresponsecode/failurerequiringapplaunch)

# INGetVisualCodeIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The user must launch your app to request the visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t generate the visual code until the user provides additional information in your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCode.continueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCode.success](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCode.failure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.

# INGetVisualCodeIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The user must launch your app to request the visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INGetVisualCodeIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t generate the visual code until the user provides additional information in your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCodeSuccess](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.
