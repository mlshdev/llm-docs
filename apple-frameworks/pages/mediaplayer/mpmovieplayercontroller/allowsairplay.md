> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/allowsairplay](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/allowsairplay)

# allowsAirPlay (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies whether the movie player allows AirPlay movie playback.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var allowsAirPlay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A movie player supports wireless movie playback to AirPlay-enabled hardware. When enabled, the user can select AirPlay-enabled hardware in the Control Panel when such hardware is in range.

The default value is [true](https://developer.apple.com/documentation/swift/true). To disable AirPlay movie playback, set this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

# allowsAirPlay (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies whether the movie player allows AirPlay movie playback.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic) BOOL allowsAirPlay;
```

<a id="Discussion"></a>

## Discussion

A movie player supports wireless movie playback to AirPlay-enabled hardware. When enabled, the user can select AirPlay-enabled hardware in the Control Panel when such hardware is in range.

The default value is [true](https://developer.apple.com/documentation/swift/true). To disable AirPlay movie playback, set this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.
