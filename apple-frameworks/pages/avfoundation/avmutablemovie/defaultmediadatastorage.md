> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/defaultmediadatastorage](https://developer.apple.com/documentation/avfoundation/avmutablemovie/defaultmediadatastorage)

# defaultMediaDataStorage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The default storage container for media data that you add to a movie.

## Declaration

```swift
@NSCopying var defaultMediaDataStorage: AVMediaDataStorage? { get set }
```

<a id="Discussion"></a>

## Discussion

This value specifies a location to write sample data that you add to a movie, for any track for whose [mediaDataStorage](../avmutablemovietrack/mediadatastorage.md) property is `nil`.

## See Also

### Configuring a movie

- [isModified](ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [timescale](timescale.md): The time scale of the movie.
- [interleavingPeriod](interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.

# defaultMediaDataStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The default storage container for media data that you add to a movie.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVMediaDataStorage * defaultMediaDataStorage;
```

<a id="Discussion"></a>

## Discussion

This value specifies a location to write sample data that you add to a movie, for any track for whose [mediaDataStorage](../avmutablemovietrack/mediadatastorage.md) property is `nil`.

## See Also

### Configuring a movie

- [modified](ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [timescale](timescale.md): The time scale of the movie.
- [interleavingPeriod](interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
