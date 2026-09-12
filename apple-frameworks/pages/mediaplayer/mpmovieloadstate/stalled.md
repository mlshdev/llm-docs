> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieloadstate/stalled](https://developer.apple.com/documentation/mediaplayer/mpmovieloadstate/stalled)

# stalled (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

> Use AVPlayerViewController in AVKit

## Declaration

```swift
static var stalled: MPMovieLoadState { get }
```

<a id="Discussion"></a>

## Discussion

The buffering of data has stalled. If started now, playback may pause automatically if the player runs out of buffered data.

## See Also

### Constants

- [playable](playable.md): Deprecated.
- [playthroughOK](playthroughok.md): Deprecated.

# MPMovieLoadStateStalled (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration Case  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
MPMovieLoadStateStalled
```

<a id="Discussion"></a>

## Discussion

The buffering of data has stalled. If started now, playback may pause automatically if the player runs out of buffered data.

## See Also

### Constants

- [MPMovieLoadStateUnknown](mpmovieloadstateunknown.md): Deprecated.
- [MPMovieLoadStatePlayable](playable.md): Deprecated.
- [MPMovieLoadStatePlaythroughOK](playthroughok.md): Deprecated.
