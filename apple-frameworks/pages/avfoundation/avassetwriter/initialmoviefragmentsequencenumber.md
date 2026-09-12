> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/initialmoviefragmentsequencenumber](https://developer.apple.com/documentation/avfoundation/avassetwriter/initialmoviefragmentsequencenumber)

# initialMovieFragmentSequenceNumber (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sequence number of the initial movie fragment.

## Declaration

```swift
var initialMovieFragmentSequenceNumber: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If you combine movie fragments that you create from multiple asset writers, movie fragment sequence numbers need to increase monotonically across the entire combined collection, in temporal order. The default value of this property is `1`.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
- [movieTimeScale](movietimescale.md): The time scale of the movie.

# initialMovieFragmentSequenceNumber (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sequence number of the initial movie fragment.

## Declaration

```objectivec
@property (nonatomic) NSInteger initialMovieFragmentSequenceNumber;
```

<a id="Discussion"></a>

## Discussion

If you combine movie fragments that you create from multiple asset writers, movie fragment sequence numbers need to increase monotonically across the entire combined collection, in temporal order. The default value of this property is `1`.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
- [movieTimeScale](movietimescale.md): The time scale of the movie.
