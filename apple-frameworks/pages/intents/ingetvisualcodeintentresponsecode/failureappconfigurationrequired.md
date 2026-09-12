> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintentresponsecode/failureappconfigurationrequired](https://developer.apple.com/documentation/intents/ingetvisualcodeintentresponsecode/failureappconfigurationrequired)

# INGetVisualCodeIntentResponseCode.failureAppConfigurationRequired (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app wasn’t configured to display visual codes.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this code when you require additional configuration of your app before displaying visual codes. For example, you might use this code when the user must establish an account in your app to handle payments, or when the user has an account for making payments but the balance is currently 0.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCode.continueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCode.success](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCode.failure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.

# INGetVisualCodeIntentResponseCodeFailureAppConfigurationRequired (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app wasn’t configured to display visual codes.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INGetVisualCodeIntentResponseCodeFailureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this code when you require additional configuration of your app before displaying visual codes. For example, you might use this code when the user must establish an account in your app to handle payments, or when the user has an account for making payments but the balance is currently 0.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INGetVisualCodeIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCodeSuccess](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
