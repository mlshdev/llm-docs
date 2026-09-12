> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/cancontainmoviefragments](https://developer.apple.com/documentation/avfoundation/avmovie/cancontainmoviefragments)

# canContainMovieFragments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether fragments can extend the movie file.

## Declaration

```swift
var canContainMovieFragments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `YES` if an `mvex` box is present in the `moov` box. The `mvex` box is necessary to signal the possible presence of later `moof` boxes.

## See Also

### Determining fragment support

- [containsMovieFragments](containsmoviefragments.md): A Boolean value that indicates whether at least one movie fragment extends the movie file.

# canContainMovieFragments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether fragments can extend the movie file.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canContainMovieFragments;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `YES` if an `mvex` box is present in the `moov` box. The `mvex` box is necessary to signal the possible presence of later `moof` boxes.

## See Also

### Determining fragment support

- [containsMovieFragments](containsmoviefragments.md): A Boolean value that indicates whether at least one movie fragment extends the movie file.
