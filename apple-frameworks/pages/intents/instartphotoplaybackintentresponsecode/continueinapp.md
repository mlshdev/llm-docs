> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponsecode/continueinapp)

# INStartPhotoPlaybackIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your extension is ready to transfer control to the app so that the slideshow can begin.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the NSUserActivity object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you). Siri adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to start the slideshow.

## See Also

### Constants

- [INStartPhotoPlaybackIntentResponseCode.unspecified](unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCode.failure](failure.md): Deprecated. You were unable to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before playing slideshows is possible.

# INStartPhotoPlaybackIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your extension is ready to transfer control to the app so that the slideshow can begin.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INStartPhotoPlaybackIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the NSUserActivity object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you). Siri adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to start the slideshow.

## See Also

### Constants

- [INStartPhotoPlaybackIntentResponseCodeUnspecified](unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCodeFailure](failure.md): Deprecated. You were unable to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before playing slideshows is possible.
