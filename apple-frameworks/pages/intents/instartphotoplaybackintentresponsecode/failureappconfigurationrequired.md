> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponsecode/failureappconfigurationrequired](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponsecode/failureappconfigurationrequired)

# INStartPhotoPlaybackIntentResponseCode.failureAppConfigurationRequired (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must perform additional configuration steps before playing slideshows is possible.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this response code when your app isn’t configured to play slideshows. For example, you might return this code if the user hasn’t yet added any photos. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INStartPhotoPlaybackIntentResponseCode.unspecified](unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that the slideshow can begin.
- [INStartPhotoPlaybackIntentResponseCode.failure](failure.md): Deprecated. You were unable to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.

# INStartPhotoPlaybackIntentResponseCodeFailureAppConfigurationRequired (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must perform additional configuration steps before playing slideshows is possible.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INStartPhotoPlaybackIntentResponseCodeFailureAppConfigurationRequired
```

<a id="Discussion"></a>

## Discussion

Use this response code when your app isn’t configured to play slideshows. For example, you might return this code if the user hasn’t yet added any photos. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INStartPhotoPlaybackIntentResponseCodeUnspecified](unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that the slideshow can begin.
- [INStartPhotoPlaybackIntentResponseCodeFailure](failure.md): Deprecated. You were unable to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
