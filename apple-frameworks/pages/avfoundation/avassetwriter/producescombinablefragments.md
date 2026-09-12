> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/producescombinablefragments](https://developer.apple.com/documentation/avfoundation/avassetwriter/producescombinablefragments)

# producesCombinableFragments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.

## Declaration

```swift
var producesCombinableFragments: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) when you use multiple asset writers to produce distinct streams that complement each other, such as HLS encodings or bit rate variants.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
- [movieTimeScale](movietimescale.md): The time scale of the movie.

# producesCombinableFragments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.

## Declaration

```objectivec
@property (nonatomic) BOOL producesCombinableFragments;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) when you use multiple asset writers to produce distinct streams that complement each other, such as HLS encodings or bit rate variants.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentInterval](initialmoviefragmentinterval.md): The interval at which to write the initial movie fragment.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
- [movieTimeScale](movietimescale.md): The time scale of the movie.
