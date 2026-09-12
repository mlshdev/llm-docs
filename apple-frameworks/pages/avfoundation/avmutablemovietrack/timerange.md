> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/timerange](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/timerange)

# timeRange

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The time range of the track within the overall timeline of the asset.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

If the start of the time range is greater than [zero](../../coremedia/cmtime/zero.md), the track doesn’t initially have media data to present. This condition may occur when the media delays an audio track to align the start of audio with a specific video frame. You can test for this as the example below shows:

```swift
if track.timeRange.start > .zero {
    // Delayed start.
}
```

## See Also

### Accessing temporal information

- [timescale](timescale.md): The time scale for tracks that contain the `moov` atom.
- [naturalTimeScale](naturaltimescale.md): The natural time scale of the media that a track references.
- [estimatedDataRate](estimateddatarate.md): The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTime(forTrackTime:)](samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
