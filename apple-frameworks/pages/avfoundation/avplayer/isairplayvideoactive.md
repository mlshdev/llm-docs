> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/isairplayvideoactive](https://developer.apple.com/documentation/avfoundation/avplayer/isairplayvideoactive)

# isAirPlayVideoActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 9.0)

A Boolean value that indicates whether the player is playing video through AirPlay.

> Use [isExternalPlaybackActive](isexternalplaybackactive.md) instead.

## Declaration

```swift
var isAirPlayVideoActive: Bool { get }
```

## See Also

### Configuring AirPlay behavior

- [allowsAirPlayVideo](allowsairplayvideo.md): Deprecated. A Boolean value that indicates whether the player allows AirPlay video playback.
- [usesAirPlayVideoWhileAirPlayScreenIsActive](usesairplayvideowhileairplayscreenisactive.md): Deprecated. A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.

# airPlayVideoActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 9.0)

A Boolean value that indicates whether the player is playing video through AirPlay.

> Use [externalPlaybackActive](isexternalplaybackactive.md) instead.

## Declaration

```objectivec
@property (readonly, getter=isAirPlayVideoActive) BOOL airPlayVideoActive;
```

## See Also

### Configuring AirPlay behavior

- [allowsAirPlayVideo](allowsairplayvideo.md): Deprecated. A Boolean value that indicates whether the player allows AirPlay video playback.
- [usesAirPlayVideoWhileAirPlayScreenIsActive](usesairplayvideowhileairplayscreenisactive.md): Deprecated. A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.
