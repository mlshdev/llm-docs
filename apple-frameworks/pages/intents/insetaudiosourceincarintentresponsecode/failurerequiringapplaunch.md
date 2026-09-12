> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insetaudiosourceincarintentresponsecode/failurerequiringapplaunch)

# INSetAudioSourceInCarIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to change the audio source.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetAudioSourceInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. A response code indicating that the status isn’t specified.
- [INSetAudioSourceInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetAudioSourceInCarIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetAudioSourceInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to change the audio source.

# INSetAudioSourceInCarIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to change the audio source.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetAudioSourceInCarIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetAudioSourceInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. A response code indicating that the status isn’t specified.
- [INSetAudioSourceInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetAudioSourceInCarIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetAudioSourceInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to change the audio source.
