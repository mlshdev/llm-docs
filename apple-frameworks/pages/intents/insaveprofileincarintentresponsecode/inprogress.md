> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insaveprofileincarintentresponsecode/inprogress)

# INSaveProfileInCarIntentResponseCode.inProgress (Swift)

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

Use this code during the handling phase to indicate that you’re in the process of saving the user’s settings, but that you haven’t yet received confirmation of the completed save.

## See Also

### Constants

- [INSaveProfileInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSaveProfileInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSaveProfileInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSaveProfileInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to save the information to the designated profile.
- [INSaveProfileInCarIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to save information to a profile.

# INSaveProfileInCarIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSaveProfileInCarIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you’re in the process of saving the user’s settings, but that you haven’t yet received confirmation of the completed save.

## See Also

### Constants

- [INSaveProfileInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a resonse code.
- [INSaveProfileInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSaveProfileInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSaveProfileInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to save the information to the designated profile.
- [INSaveProfileInCarIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to save information to a profile.
