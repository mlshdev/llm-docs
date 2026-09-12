> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/hasaudiosampledependencies](https://developer.apple.com/documentation/avfoundation/avassettrack/hasaudiosampledependencies)

# hasAudioSampleDependencies (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · watchOS 6.0+ (deprecated in 9.0)

A Boolean value that indicates whether the track has sample dependencies.

> Load the value of [hasAudioSampleDependencies](../avpartialasyncproperty/hasaudiosampledependencies.md) asynchronously instead.

## Declaration

```swift
var hasAudioSampleDependencies: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is always [false](https://developer.apple.com/documentation/swift/false) for nonaudible media.

# hasAudioSampleDependencies (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the track has sample dependencies.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAudioSampleDependencies;
```

<a id="Discussion"></a>

## Discussion

The value is always [false](https://developer.apple.com/documentation/swift/false) for nonaudible media.

## See Also

### Accessing audible characteristics

- [preferredVolume](preferredvolume.md): Deprecated. The track’s volume preference for playing its audible media.
