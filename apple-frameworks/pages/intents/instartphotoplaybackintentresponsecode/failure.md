> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponsecode/failure](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponsecode/failure)

# INStartPhotoPlaybackIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You were unable to start the slideshow.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s photos or starting the slideshow.

## See Also

### Constants

- [INStartPhotoPlaybackIntentResponseCode.unspecified](unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that the slideshow can begin.
- [INStartPhotoPlaybackIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before playing slideshows is possible.

# INStartPhotoPlaybackIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You were unable to start the slideshow.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INStartPhotoPlaybackIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s photos or starting the slideshow.

## See Also

### Constants

- [INStartPhotoPlaybackIntentResponseCodeUnspecified](unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that the slideshow can begin.
- [INStartPhotoPlaybackIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before playing slideshows is possible.
