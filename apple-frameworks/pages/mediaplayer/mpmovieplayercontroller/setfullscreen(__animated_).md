> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/setfullscreen(_:animated:)](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/setfullscreen(_:animated:))

# setFullscreen(\_:animated:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Causes the movie player to enter or exit full-screen mode.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
func setFullscreen(_ fullscreen: Bool, animated: Bool)
```

## Parameters

- `fullscreen`: Specify [true](https://developer.apple.com/documentation/swift/true) to enter full-screen mode or [false](https://developer.apple.com/documentation/swift/false) to exit full-screen mode.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the transition between modes or [false](https://developer.apple.com/documentation/swift/false) to switch immediately to the new mode.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# setFullscreen:animated: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Causes the movie player to enter or exit full-screen mode.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
- (void) setFullscreen:(BOOL) fullscreen animated:(BOOL) animated;
```

## Parameters

- `fullscreen`: Specify [true](https://developer.apple.com/documentation/swift/true) to enter full-screen mode or [false](https://developer.apple.com/documentation/swift/false) to exit full-screen mode.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the transition between modes or [false](https://developer.apple.com/documentation/swift/false) to switch immediately to the new mode.

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
