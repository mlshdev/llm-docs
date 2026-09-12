> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintentresponsecode/inprogress)

# INSetClimateSettingsInCarIntentResponseCode.inProgress (Swift)

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

- [INSetClimateSettingsInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetClimateSettingsInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetClimateSettingsInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetClimateSettingsInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the climate control settings.
- [INSetClimateSettingsInCarIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the climate control settings.

# INSetClimateSettingsInCarIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetClimateSettingsInCarIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the climate control settings and initiated the changes, but you haven’t yet received confirmation of the completed changes.

## See Also

### Constants

- [INSetClimateSettingsInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetClimateSettingsInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetClimateSettingsInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetClimateSettingsInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the climate control settings.
- [INSetClimateSettingsInCarIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the climate control settings.
