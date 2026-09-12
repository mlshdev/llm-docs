> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/isfullscreen](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/isfullscreen)

# isFullscreen (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean that indicates whether the movie player is in full-screen mode.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var isFullscreen: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Changing the value of this property causes the movie player to enter or exit full-screen mode immediately. If you want to animate the transition to full-screen mode, use the [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md) method instead.

Whenever the movie player enters or exits full-screen mode, it posts appropriate notifications to reflect the change. For example, upon entering full-screen mode, it posts [MPMoviePlayerWillEnterFullscreenNotification](../mpmovieplayerwillenterfullscreennotification.md) and [MPMoviePlayerDidEnterFullscreenNotification](../mpmovieplayerdidenterfullscreennotification.md) notifications. Upon exiting from full-screen mode, it posts [MPMoviePlayerWillExitFullscreenNotification](../mpmovieplayerwillexitfullscreennotification.md) and [MPMoviePlayerDidExitFullscreenNotification](../mpmovieplayerdidexitfullscreennotification.md) notifications.

The value of this property may also change as a result of the user interacting with the movie player controls.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# fullscreen (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean that indicates whether the movie player is in full-screen mode.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, getter=isFullscreen) BOOL fullscreen;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Changing the value of this property causes the movie player to enter or exit full-screen mode immediately. If you want to animate the transition to full-screen mode, use the [setFullscreen:animated:](setfullscreen%28__animated_%29.md) method instead.

Whenever the movie player enters or exits full-screen mode, it posts appropriate notifications to reflect the change. For example, upon entering full-screen mode, it posts [MPMoviePlayerWillEnterFullscreenNotification](../mpmovieplayerwillenterfullscreennotification.md) and [MPMoviePlayerDidEnterFullscreenNotification](../mpmovieplayerdidenterfullscreennotification.md) notifications. Upon exiting from full-screen mode, it posts [MPMoviePlayerWillExitFullscreenNotification](../mpmovieplayerwillexitfullscreennotification.md) and [MPMoviePlayerDidExitFullscreenNotification](../mpmovieplayerdidexitfullscreennotification.md) notifications.

The value of this property may also change as a result of the user interacting with the movie player controls.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
