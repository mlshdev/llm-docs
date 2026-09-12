> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetprofileincarintentresponsecode/inprogress)

# INSetProfileInCarIntentResponseCode.inProgress (Swift)

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

Use this code during the handling phase to indicate that you’re in the process of restoring the user’s settings from the selected profile, but that you’ve not yet received confirmation of the completed restoration.

## See Also

### Constants

- [INSetProfileInCarIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetProfileInCarIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetProfileInCarIntentResponseCode.success](success.md): Deprecated. You successfully handled the intent.
- [INSetProfileInCarIntentResponseCode.failure](failure.md): Deprecated. You were unable to restore the information from the designated profile.
- [INSetProfileInCarIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to restore information from a profile.

# INSetProfileInCarIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

You’re in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSetProfileInCarIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that you’re in the process of restoring the user’s settings from the selected profile, but that you’ve not yet received confirmation of the completed restoration.

## See Also

### Constants

- [INSetProfileInCarIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetProfileInCarIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSetProfileInCarIntentResponseCodeSuccess](success.md): Deprecated. You successfully handled the intent.
- [INSetProfileInCarIntentResponseCodeFailure](failure.md): Deprecated. You were unable to restore the information from the designated profile.
- [INSetProfileInCarIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to restore information from a profile.
