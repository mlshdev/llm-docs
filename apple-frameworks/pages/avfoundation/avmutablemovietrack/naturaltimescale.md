> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/naturaltimescale](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/naturaltimescale)

# naturalTimeScale

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The natural time scale of the media that a track references.

## Declaration

```swift
var naturalTimeScale: CMTimeScale { get }
```

## See Also

### Accessing temporal information

- [timeRange](timerange.md): The time range of the track within the overall timeline of the asset.
- [timescale](timescale.md): The time scale for tracks that contain the `moov` atom.
- [estimatedDataRate](estimateddatarate.md): The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTime(forTrackTime:)](samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
