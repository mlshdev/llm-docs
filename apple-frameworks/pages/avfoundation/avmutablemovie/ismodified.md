> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/ismodified](https://developer.apple.com/documentation/avfoundation/avmutablemovie/ismodified)

# isModified (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the movie is in a modified state.

## Declaration

```swift
var isModified: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value is true if you’ve modified the movie since you created it, saved it, or had its modified state cleared.

## See Also

### Configuring a movie

- [timescale](timescale.md): The time scale of the movie.
- [interleavingPeriod](interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
- [defaultMediaDataStorage](defaultmediadatastorage.md): The default storage container for media data that you add to a movie.

# modified (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the movie is in a modified state.

## Declaration

```objectivec
@property (nonatomic, getter=isModified) BOOL modified;
```

<a id="Discussion"></a>

## Discussion

The value is true if you’ve modified the movie since you created it, saved it, or had its modified state cleared.

## See Also

### Configuring a movie

- [timescale](timescale.md): The time scale of the movie.
- [interleavingPeriod](interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
- [defaultMediaDataStorage](defaultmediadatastorage.md): The default storage container for media data that you add to a movie.
