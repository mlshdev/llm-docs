> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/hasaudiosampledependencies

# hasAudioSampleDependencies

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

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

- [preferredVolume](preferredvolume.md): The preferred volume for the audible medata data of the track.
