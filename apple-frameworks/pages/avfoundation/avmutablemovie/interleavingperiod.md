> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/interleavingperiod](https://developer.apple.com/documentation/avfoundation/avmutablemovie/interleavingperiod)

# interleavingPeriod (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A time period indicating the duration for interleaving runs of samples for each track.

## Declaration

```swift
var interleavingPeriod: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Default value is `0.5` seconds.

## See Also

### Configuring a movie

- [isModified](ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [timescale](timescale.md): The time scale of the movie.
- [defaultMediaDataStorage](defaultmediadatastorage.md): The default storage container for media data that you add to a movie.

# interleavingPeriod (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A time period indicating the duration for interleaving runs of samples for each track.

## Declaration

```objectivec
@property (nonatomic) CMTime interleavingPeriod;
```

<a id="Discussion"></a>

## Discussion

Default value is `0.5` seconds.

## See Also

### Configuring a movie

- [modified](ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [timescale](timescale.md): The time scale of the movie.
- [defaultMediaDataStorage](defaultmediadatastorage.md): The default storage container for media data that you add to a movie.
