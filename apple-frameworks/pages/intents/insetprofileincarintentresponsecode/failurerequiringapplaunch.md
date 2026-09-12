> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insetprofileincarintentresponsecode/failurerequiringapplaunch)

# INSetProfileInCarIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to restore information from a profile.

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

- [INSetProfileInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetProfileInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetProfileInCarIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetProfileInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetProfileInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to restore the information from the designated profile.

# INSetProfileInCarIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The user must launch your app to restore information from a profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetProfileInCarIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request through Siri for a reason not covered by any other response code. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSetProfileInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetProfileInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetProfileInCarIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of handling the intent.
- [INSetProfileInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetProfileInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to restore the information from the designated profile.
