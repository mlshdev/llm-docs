> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/moviesourcetype](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/moviesourcetype)

# movieSourceType (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The playback type of the movie.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var movieSourceType: MPMovieSourceType { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [MPMovieSourceType.unknown](../mpmoviesourcetype/unknown.md). This property provides a clue to the playback system as to how it should download and buffer the movie content. If you know the source type of the movie, setting the value of this property before playback begins can improve the load times for the movie content. If you do not set the source type explicitly before playback, the movie player controller must gather this information, which might delay playback.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# movieSourceType (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The playback type of the movie.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic) MPMovieSourceType movieSourceType;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [MPMovieSourceTypeUnknown](../mpmoviesourcetype/unknown.md). This property provides a clue to the playback system as to how it should download and buffer the movie content. If you know the source type of the movie, setting the value of this property before playback begins can improve the load times for the movie content. If you do not set the source type explicitly before playback, the movie player controller must gather this information, which might delay playback.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
