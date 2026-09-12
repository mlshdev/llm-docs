> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/overalldurationhint](https://developer.apple.com/documentation/avfoundation/avassetwriter/overalldurationhint)

# overallDurationHint (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A hint of the final duration of the output file.

## Declaration

```swift
var overallDurationHint: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of [invalid](../../coremedia/cmtime/invalid.md) indicates that the asset writer doesn’t write an overall duration hint to the file. The asset writer ignores this value if it doesn’t write movie fragments.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [movieTimeScale](movietimescale.md): The time scale of the movie.

# overallDurationHint (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A hint of the final duration of the output file.

## Declaration

```objectivec
@property (nonatomic) CMTime overallDurationHint;
```

<a id="Discussion"></a>

## Discussion

The default value of [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) indicates that the asset writer doesn’t write an overall duration hint to the file. The asset writer ignores this value if it doesn’t write movie fragments.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [movieTimeScale](movietimescale.md): The time scale of the movie.
