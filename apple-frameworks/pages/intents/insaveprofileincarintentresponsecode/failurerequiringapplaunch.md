> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insaveprofileincarintentresponsecode/failurerequiringapplaunch)

# INSaveProfileInCarIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to save information to a profile.

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

- [INSaveProfileInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSaveProfileInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSaveProfileInCarIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSaveProfileInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSaveProfileInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to save the information to the designated profile.

# INSaveProfileInCarIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to save information to a profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSaveProfileInCarIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request through Siri for a reason not covered by any other response code. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSaveProfileInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSaveProfileInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSaveProfileInCarIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSaveProfileInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSaveProfileInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to save the information to the designated profile.
