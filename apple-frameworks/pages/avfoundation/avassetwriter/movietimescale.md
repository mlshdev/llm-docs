> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/movietimescale](https://developer.apple.com/documentation/avfoundation/avassetwriter/movietimescale)

# movieTimeScale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time scale of the movie.

## Declaration

```swift
var movieTimeScale: CMTimeScale { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates that the asset writer chooses an appropriate value, if applicable.

You can’t set this property value after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.

# movieTimeScale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time scale of the movie.

## Declaration

```objectivec
@property (nonatomic) CMTimeScale movieTimeScale;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates that the asset writer chooses an appropriate value, if applicable.

You can’t set this property value after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
