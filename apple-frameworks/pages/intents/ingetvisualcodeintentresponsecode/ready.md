> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintentresponsecode/ready](https://developer.apple.com/documentation/intents/ingetvisualcodeintentresponsecode/ready)

# INGetVisualCodeIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to fulfill the intent. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCode.continueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCode.success](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCode.failure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
- [INGetVisualCodeIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.

# INGetVisualCodeIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INGetVisualCodeIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to fulfill the intent. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INGetVisualCodeIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didnt specify a code.
- [INGetVisualCodeIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. You must launch the app to display the visual code.
- [INGetVisualCodeIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of generating the code but aren’t yet finished.
- [INGetVisualCodeIntentResponseCodeSuccess](success.md): Deprecated. You successfully generated the visual code.
- [INGetVisualCodeIntentResponseCodeFailure](failure.md): Deprecated. You were unable to generate the visual code.
- [INGetVisualCodeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to request the visual code.
- [INGetVisualCodeIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. Your app wasn’t configured to display visual codes.
