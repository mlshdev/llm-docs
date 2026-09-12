> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/naturalsize](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/naturalsize)

# naturalSize (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The width and height of the movie frame.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var naturalSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

This property reports the clean aperture of the video in square pixels. Thus, the reported dimensions take into account anamorphic content and aperture modes.

It is possible for the natural size of a movie to change during playback. This typically happens when the bit-rate of streaming content changes or when playback toggles between audio-only and a combination of audio and video.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# naturalSize (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The width and height of the movie frame.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize naturalSize;
```

<a id="Discussion"></a>

## Discussion

This property reports the clean aperture of the video in square pixels. Thus, the reported dimensions take into account anamorphic content and aperture modes.

It is possible for the natural size of a movie to change during playback. This typically happens when the bit-rate of streaming content changes or when playback toggles between audio-only and a combination of audio and video.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
