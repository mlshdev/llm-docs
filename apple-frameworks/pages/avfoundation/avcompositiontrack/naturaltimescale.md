> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/naturaltimescale](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/naturaltimescale)

# naturalTimeScale

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The natural time scale of the media that a track references.

## Declaration

```swift
var naturalTimeScale: CMTimeScale { get }
```

## See Also

### Accessing temporal information

- [timeRange](timerange.md): The time range of the track within the overall timeline of the asset.
- [estimatedDataRate](estimateddatarate.md): The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTime(forTrackTime:)](samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
