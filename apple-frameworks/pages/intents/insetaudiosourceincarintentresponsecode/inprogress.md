> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetaudiosourceincarintentresponsecode/inprogress)

# INSetAudioSourceInCarIntentResponseCode.inProgress (Swift)

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

Use this code during the handling phase to indicate that you received the audio source information and are working on it, but that you haven’t yet confirmed completion of the change.

## See Also

### Constants

- [INSetAudioSourceInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code indicating that the status isn’t specified.
- [INSetAudioSourceInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetAudioSourceInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the audio source.
- [INSetAudioSourceInCarIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the audio source.

# INSetAudioSourceInCarIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetAudioSourceInCarIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you received the audio source information and are working on it, but that you haven’t yet confirmed completion of the change.

## See Also

### Constants

- [INSetAudioSourceInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code indicating that the status isn’t specified.
- [INSetAudioSourceInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetAudioSourceInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the audio source.
- [INSetAudioSourceInCarIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to change the audio source.
