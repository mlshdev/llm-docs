> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintentresponsecode/failurenotsubscribed](https://developer.apple.com/documentation/intents/insetradiostationintentresponsecode/failurenotsubscribed)

# INSetRadioStationIntentResponseCode.failureNotSubscribed (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You were unable to change the radio station because the user doesn’t have a subscription to the corresponding service.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureNotSubscribed
```

<a id="Discussion"></a>

## Discussion

For example, use this code if the user selects a satellite radio station but doesn’t subscribe to the satellite service.

## See Also

### Constants

- [INSetRadioStationIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetRadioStationIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetRadioStationIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetRadioStationIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetRadioStationIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the radio station.
- [INSetRadioStationIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the radio station.

# INSetRadioStationIntentResponseCodeFailureNotSubscribed (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You were unable to change the radio station because the user doesn’t have a subscription to the corresponding service.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetRadioStationIntentResponseCodeFailureNotSubscribed
```

<a id="Discussion"></a>

## Discussion

For example, use this code if the user selects a satellite radio station but doesn’t subscribe to the satellite service.

## See Also

### Constants

- [INSetRadioStationIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSetRadioStationIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetRadioStationIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetRadioStationIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetRadioStationIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the radio station.
- [INSetRadioStationIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the radio station.
