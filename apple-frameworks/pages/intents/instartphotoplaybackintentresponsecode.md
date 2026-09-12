> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponsecode](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponsecode)

# INStartPhotoPlaybackIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the status of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INStartPhotoPlaybackIntentResponseCode
```

## Topics

### Constants

- [INStartPhotoPlaybackIntentResponseCode.unspecified](instartphotoplaybackintentresponsecode/unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCode.ready](instartphotoplaybackintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCode.continueInApp](instartphotoplaybackintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that the slideshow can begin.
- [INStartPhotoPlaybackIntentResponseCode.failure](instartphotoplaybackintentresponsecode/failure.md): Deprecated. You were unable to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCode.failureRequiringAppLaunch](instartphotoplaybackintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCode.failureAppConfigurationRequired](instartphotoplaybackintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before playing slideshows is possible.

### Initializers

- [init(rawValue:)](instartphotoplaybackintentresponsecode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](instartphotoplaybackintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INStartPhotoPlaybackIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the status of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INStartPhotoPlaybackIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INStartPhotoPlaybackIntentResponseCodeUnspecified](instartphotoplaybackintentresponsecode/unspecified.md): Deprecated. The status wasn’t specified.
- [INStartPhotoPlaybackIntentResponseCodeReady](instartphotoplaybackintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INStartPhotoPlaybackIntentResponseCodeContinueInApp](instartphotoplaybackintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app so that the slideshow can begin.
- [INStartPhotoPlaybackIntentResponseCodeFailure](instartphotoplaybackintentresponsecode/failure.md): Deprecated. You were unable to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCodeFailureRequiringAppLaunch](instartphotoplaybackintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to start the slideshow.
- [INStartPhotoPlaybackIntentResponseCodeFailureAppConfigurationRequired](instartphotoplaybackintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before playing slideshows is possible.

## See Also

### Getting the Response Code

- [code](instartphotoplaybackintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
