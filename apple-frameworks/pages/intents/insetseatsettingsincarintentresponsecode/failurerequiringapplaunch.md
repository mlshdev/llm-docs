> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insetseatsettingsincarintentresponsecode/failurerequiringapplaunch)

# INSetSeatSettingsInCarIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to change the seat settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request through Siri for a reason not covered by any other response code. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetSeatSettingsInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetSeatSettingsInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetSeatSettingsInCarIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetSeatSettingsInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the seat settings.

# INSetSeatSettingsInCarIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to change the seat settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetSeatSettingsInCarIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request through Siri for a reason not covered by any other response code. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetSeatSettingsInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetSeatSettingsInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetSeatSettingsInCarIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetSeatSettingsInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the seat settings.
