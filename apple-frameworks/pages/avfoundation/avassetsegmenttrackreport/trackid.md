> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetsegmenttrackreport/trackid](https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/trackid)

# trackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A persistent unique identifier for a track.

## Declaration

```swift
var trackID: CMPersistentTrackID { get }
```

## See Also

### Inspecting a report

- [mediaType](mediatype.md): The type of media a track contains.
- [duration](duration.md): The duration of a track.
- [earliestPresentationTimeStamp](earliestpresentationtimestamp.md): The earliest presentation timestamp (PTS) for this track.
- [firstVideoSampleInformation](firstvideosampleinformation.md): Information about the first video sample in a track.
- [AVAssetSegmentReportSampleInformation](../avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.

# trackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A persistent unique identifier for a track.

## Declaration

```objectivec
@property (nonatomic, readonly) CMPersistentTrackID trackID;
```

## See Also

### Inspecting a report

- [mediaType](mediatype.md): The type of media a track contains.
- [duration](duration.md): The duration of a track.
- [earliestPresentationTimeStamp](earliestpresentationtimestamp.md): The earliest presentation timestamp (PTS) for this track.
- [firstVideoSampleInformation](firstvideosampleinformation.md): Information about the first video sample in a track.
- [AVAssetSegmentReportSampleInformation](../avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.
