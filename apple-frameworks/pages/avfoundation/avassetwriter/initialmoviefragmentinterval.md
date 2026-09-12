> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/initialmoviefragmentinterval](https://developer.apple.com/documentation/avfoundation/avassetwriter/initialmoviefragmentinterval)

# initialMovieFragmentInterval (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The interval at which to write the initial movie fragment.

## Declaration

```swift
var initialMovieFragmentInterval: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

When using fragment writing, you can set this property value to indicate the interval at which to write the initial fragment.

The default value is [invalid](../../coremedia/cmtime/invalid.md), which indicates to use the interval set in the [movieFragmentInterval](moviefragmentinterval.md) property. The [movieFragmentInterval](moviefragmentinterval.md) property is typically set to 10 seconds, so if an error occurs before writing the first fragment, the movie file won’t be playable. To avoid this case, your app may want to set a shorter interval, such as 1 second, to write the initial fragment, and then use a 10 second interval for subsequent fragments.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
- [movieTimeScale](movietimescale.md): The time scale of the movie.

# initialMovieFragmentInterval (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The interval at which to write the initial movie fragment.

## Declaration

```objectivec
@property (nonatomic) CMTime initialMovieFragmentInterval;
```

<a id="Discussion"></a>

## Discussion

When using fragment writing, you can set this property value to indicate the interval at which to write the initial fragment.

The default value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md), which indicates to use the interval set in the [movieFragmentInterval](moviefragmentinterval.md) property. The [movieFragmentInterval](moviefragmentinterval.md) property is typically set to 10 seconds, so if an error occurs before writing the first fragment, the movie file won’t be playable. To avoid this case, your app may want to set a shorter interval, such as 1 second, to write the initial fragment, and then use a 10 second interval for subsequent fragments.

You can’t set this property after writing starts.

## See Also

### Configuring fragment output

- [movieFragmentInterval](moviefragmentinterval.md): The interval at which to write movie fragments.
- [initialMovieFragmentSequenceNumber](initialmoviefragmentsequencenumber.md): The sequence number of the initial movie fragment.
- [producesCombinableFragments](producescombinablefragments.md): A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.
- [overallDurationHint](overalldurationhint.md): A hint of the final duration of the output file.
- [movieTimeScale](movietimescale.md): The time scale of the movie.
