> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/preferredvolume](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/preferredvolume)

# preferredVolume

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The track’s volume preference for playing its audible media.

## Declaration

```swift
var preferredVolume: Float { get }
```

<a id="Discussion"></a>

## Discussion

The preferred volume for an audio track is typically, but not always, `1.0`. For non-audible tracks, the value is `0.0`.

## See Also

### Accessing audible characteristics

- [hasAudioSampleDependencies](hasaudiosampledependencies.md): A Boolean value that indicates whether the track has sample dependencies.
