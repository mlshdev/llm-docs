> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieloadstate/playable](https://developer.apple.com/documentation/mediaplayer/mpmovieloadstate/playable)

# playable (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

> Use AVPlayerViewController in AVKit

## Declaration

```swift
static var playable: MPMovieLoadState { get }
```

<a id="Discussion"></a>

## Discussion

The buffer has enough data that playback can begin, but it may run out of data before playback finishes.

## See Also

### Constants

- [playthroughOK](playthroughok.md): Deprecated.
- [stalled](stalled.md): Deprecated.

# MPMovieLoadStatePlayable (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration Case  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
MPMovieLoadStatePlayable
```

<a id="Discussion"></a>

## Discussion

The buffer has enough data that playback can begin, but it may run out of data before playback finishes.

## See Also

### Constants

- [MPMovieLoadStateUnknown](mpmovieloadstateunknown.md): Deprecated.
- [MPMovieLoadStatePlaythroughOK](playthroughok.md): Deprecated.
- [MPMovieLoadStateStalled](stalled.md): Deprecated.
