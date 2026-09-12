> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/isairplayvideoactive](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/isairplayvideoactive)

# isAirPlayVideoActive (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Indicates whether the movie player is currently playing video via AirPlay.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var isAirPlayVideoActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You can query this property after receiving an [MPMoviePlayerIsAirPlayVideoActiveDidChangeNotification](../mpmovieplayerisairplayvideoactivedidchangenotification.md) notification to find out whether the AirPlay video started or stopped.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# airPlayVideoActive (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Indicates whether the movie player is currently playing video via AirPlay.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAirPlayVideoActive) BOOL airPlayVideoActive;
```

<a id="Discussion"></a>

## Discussion

You can query this property after receiving an [MPMoviePlayerIsAirPlayVideoActiveDidChangeNotification](../mpmovieplayerisairplayvideoactivedidchangenotification.md) notification to find out whether the AirPlay video started or stopped.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
