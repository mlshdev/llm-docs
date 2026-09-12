> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/estimateddatarate](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/estimateddatarate)

# estimatedDataRate

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The estimated data rate, in bits per second, of the media that the track references.

## Declaration

```swift
var estimatedDataRate: Float { get }
```

## See Also

### Accessing temporal information

- [timeRange](timerange.md): The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](naturaltimescale.md): The natural time scale of the media that a track references.
- [samplePresentationTime(forTrackTime:)](samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
