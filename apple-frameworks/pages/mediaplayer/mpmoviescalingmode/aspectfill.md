> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmoviescalingmode/aspectfill](https://developer.apple.com/documentation/mediaplayer/mpmoviescalingmode/aspectfill)

# MPMovieScalingMode.aspectFill (Swift)

**Framework:** Media Player  
**Kind:** Case  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Scale the movie uniformly until the movie fills the visible bounds of the view. Content at the edges of the larger of the two dimensions is clipped so that the other dimension fits the view exactly. The aspect ratio of the movie is preserved.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
case aspectFill
```

## See Also

### Constants

- [MPMovieScalingMode.none](none.md): Deprecated. Do not scale the movie.
- [MPMovieScalingMode.aspectFit](aspectfit.md): Deprecated. Scale the movie uniformly until one dimension fits the visible bounds of the view exactly. In the other dimension, the region between the edge of the movie and the edge of the view is filled with a black bar. The aspect ratio of the movie is preserved.
- [MPMovieScalingMode.fill](fill.md): Deprecated. Scale the movie until both dimensions fit the visible bounds of the view exactly. The aspect ratio of the movie is not preserved.

# MPMovieScalingModeAspectFill (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration Case  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Scale the movie uniformly until the movie fills the visible bounds of the view. Content at the edges of the larger of the two dimensions is clipped so that the other dimension fits the view exactly. The aspect ratio of the movie is preserved.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
MPMovieScalingModeAspectFill
```

## See Also

### Constants

- [MPMovieScalingModeNone](none.md): Deprecated. Do not scale the movie.
- [MPMovieScalingModeAspectFit](aspectfit.md): Deprecated. Scale the movie uniformly until one dimension fits the visible bounds of the view exactly. In the other dimension, the region between the edge of the movie and the edge of the view is filled with a black bar. The aspect ratio of the movie is preserved.
- [MPMovieScalingModeFill](fill.md): Deprecated. Scale the movie until both dimensions fit the visible bounds of the view exactly. The aspect ratio of the movie is not preserved.
