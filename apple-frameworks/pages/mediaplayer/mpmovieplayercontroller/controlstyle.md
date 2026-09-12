> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/controlstyle](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/controlstyle)

# controlStyle (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The style of the playback controls.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var controlStyle: MPMovieControlStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [default](../mpmoviecontrolstyle/default.md). You can change the value of this property to change the style of the controls or to hide the controls altogether. For a list of available control styles, see [MPMovieControlStyle](../mpmoviecontrolstyle.md).

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# controlStyle (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The style of the playback controls.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic) MPMovieControlStyle controlStyle;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [MPMovieControlStyleDefault](../mpmoviecontrolstyle/default.md). You can change the value of this property to change the style of the controls or to hide the controls altogether. For a list of available control styles, see [MPMovieControlStyle](../mpmoviecontrolstyle.md).

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
