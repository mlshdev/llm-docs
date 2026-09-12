> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/containsmoviefragments](https://developer.apple.com/documentation/avfoundation/avmovie/containsmoviefragments)

# containsMovieFragments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether at least one movie fragment extends the movie file.

## Declaration

```swift
var containsMovieFragments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is `YES` if [canContainMovieFragments](cancontainmoviefragments.md) is `YES` and at least one `moof` box is present after the `moov` box.

## See Also

### Determining fragment support

- [canContainMovieFragments](cancontainmoviefragments.md): A Boolean value that indicates whether fragments can extend the movie file.

# containsMovieFragments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether at least one movie fragment extends the movie file.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL containsMovieFragments;
```

<a id="Discussion"></a>

## Discussion

This property is `YES` if [canContainMovieFragments](cancontainmoviefragments.md) is `YES` and at least one `moof` box is present after the `moov` box.

## See Also

### Determining fragment support

- [canContainMovieFragments](cancontainmoviefragments.md): A Boolean value that indicates whether fragments can extend the movie file.
