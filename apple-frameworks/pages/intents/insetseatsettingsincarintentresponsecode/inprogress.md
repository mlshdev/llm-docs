> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetseatsettingsincarintentresponsecode/inprogress)

# INSetSeatSettingsInCarIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the climate control settings and initiated the changes, but you haven’t yet received confirmation of the completed changes.

## See Also

### Constants

- [INSetSeatSettingsInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetSeatSettingsInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetSeatSettingsInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the seat settings.
- [INSetSeatSettingsInCarIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the seat settings.

# INSetSeatSettingsInCarIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetSeatSettingsInCarIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the climate control settings and initiated the changes, but you haven’t yet received confirmation of the completed changes.

## See Also

### Constants

- [INSetSeatSettingsInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetSeatSettingsInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetSeatSettingsInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the seat settings.
- [INSetSeatSettingsInCarIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the seat settings.
