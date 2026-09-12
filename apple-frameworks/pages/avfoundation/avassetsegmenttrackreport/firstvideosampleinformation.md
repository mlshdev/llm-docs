> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetsegmenttrackreport/firstvideosampleinformation](https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/firstvideosampleinformation)

# firstVideoSampleInformation (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Information about the first video sample in a track.

## Declaration

```swift
var firstVideoSampleInformation: AVAssetSegmentReportSampleInformation? { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if this track isn’t a video track, or if sample information isn’t available.

## See Also

### Inspecting a report

- [trackID](trackid.md): A persistent unique identifier for a track.
- [mediaType](mediatype.md): The type of media a track contains.
- [duration](duration.md): The duration of a track.
- [earliestPresentationTimeStamp](earliestpresentationtimestamp.md): The earliest presentation timestamp (PTS) for this track.
- [AVAssetSegmentReportSampleInformation](../avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.

# firstVideoSampleInformation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Information about the first video sample in a track.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAssetSegmentReportSampleInformation * firstVideoSampleInformation;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if this track isn’t a video track, or if sample information isn’t available.

## See Also

### Inspecting a report

- [trackID](trackid.md): A persistent unique identifier for a track.
- [mediaType](mediatype.md): The type of media a track contains.
- [duration](duration.md): The duration of a track.
- [earliestPresentationTimeStamp](earliestpresentationtimestamp.md): The earliest presentation timestamp (PTS) for this track.
- [AVAssetSegmentReportSampleInformation](../avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.
