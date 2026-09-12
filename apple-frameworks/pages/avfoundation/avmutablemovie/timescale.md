> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/timescale](https://developer.apple.com/documentation/avfoundation/avmutablemovie/timescale)

# timescale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The time scale of the movie.

## Declaration

```swift
var timescale: CMTimeScale { get set }
```

<a id="Discussion"></a>

## Discussion

The default movie time scale is `600`. In certain cases, you may want to set this to a different value. For example, a movie that contains a single audio track should set the movie time scale to the media time scale of that track. Set the value of this property on a new empty movie before you perform any edits on it.

## See Also

### Configuring a movie

- [isModified](ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [interleavingPeriod](interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
- [defaultMediaDataStorage](defaultmediadatastorage.md): The default storage container for media data that you add to a movie.

# timescale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The time scale of the movie.

## Declaration

```objectivec
@property (nonatomic, readwrite) CMTimeScale timescale;
```

<a id="Discussion"></a>

## Discussion

The default movie time scale is `600`. In certain cases, you may want to set this to a different value. For example, a movie that contains a single audio track should set the movie time scale to the media time scale of that track. Set the value of this property on a new empty movie before you perform any edits on it.

## See Also

### Configuring a movie

- [modified](ismodified.md): A Boolean value that indicates whether the movie is in a modified state.
- [interleavingPeriod](interleavingperiod.md): A time period indicating the duration for interleaving runs of samples for each track.
- [defaultMediaDataStorage](defaultmediadatastorage.md): The default storage container for media data that you add to a movie.
