> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/hasaudiosampledependencies](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/hasaudiosampledependencies)

# hasAudioSampleDependencies

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the track has sample dependencies.

## Declaration

```swift
var hasAudioSampleDependencies: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is always [false](https://developer.apple.com/documentation/swift/false) for nonaudible media.

## See Also

### Accessing audible characteristics

- [preferredVolume](preferredvolume.md): The track’s volume preference for playing its audible media.
