> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/allowsairplayvideo](https://developer.apple.com/documentation/avfoundation/avplayer/allowsairplayvideo)

# allowsAirPlayVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 9.0)

A Boolean value that indicates whether the player allows AirPlay video playback.

> Use [allowsExternalPlayback](allowsexternalplayback.md) instead.

## Declaration

```swift
var allowsAirPlayVideo: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring AirPlay behavior

- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. A Boolean value that indicates whether the player is playing video through AirPlay.
- [usesAirPlayVideoWhileAirPlayScreenIsActive](usesairplayvideowhileairplayscreenisactive.md): Deprecated. A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.

# allowsAirPlayVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 9.0)

A Boolean value that indicates whether the player allows AirPlay video playback.

> Use [allowsExternalPlayback](allowsexternalplayback.md) instead.

## Declaration

```objectivec
@property BOOL allowsAirPlayVideo;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring AirPlay behavior

- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. A Boolean value that indicates whether the player is playing video through AirPlay.
- [usesAirPlayVideoWhileAirPlayScreenIsActive](usesairplayvideowhileairplayscreenisactive.md): Deprecated. A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.
