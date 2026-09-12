> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetradiostationintentresponsecode/inprogress)

# INSetRadioStationIntentResponseCode.inProgress (Swift)

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

Use this code during the handling phase to indicate that you received the radio station information and initiated the changes, but that you haven’t yet received confirmation of the completed changes.

## See Also

### Constants

- [INSetRadioStationIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetRadioStationIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetRadioStationIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetRadioStationIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the radio station.
- [INSetRadioStationIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the radio station.
- [INSetRadioStationIntentResponseCode.failureNotSubscribed](failurenotsubscribed.md): Deprecated. You were unable to change the radio station because the user doesn’t have a subscription to the corresponding service.

# INSetRadioStationIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetRadioStationIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the radio station information and initiated the changes, but that you haven’t yet received confirmation of the completed changes.

## See Also

### Constants

- [INSetRadioStationIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetRadioStationIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetRadioStationIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetRadioStationIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the radio station.
- [INSetRadioStationIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the radio station.
- [INSetRadioStationIntentResponseCodeFailureNotSubscribed](failurenotsubscribed.md): Deprecated. You were unable to change the radio station because the user doesn’t have a subscription to the corresponding service.
