> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetsegmenttrackreport](https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport)

# AVAssetSegmentTrackReport (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that provides information on a track in segment data.

## Declaration

```swift
class AVAssetSegmentTrackReport
```

## Topics

### Inspecting a report

- [trackID](avassetsegmenttrackreport/trackid.md): A persistent unique identifier for a track.
- [mediaType](avassetsegmenttrackreport/mediatype.md): The type of media a track contains.
- [duration](avassetsegmenttrackreport/duration.md): The duration of a track.
- [earliestPresentationTimeStamp](avassetsegmenttrackreport/earliestpresentationtimestamp.md): The earliest presentation timestamp (PTS) for this track.
- [firstVideoSampleInformation](avassetsegmenttrackreport/firstvideosampleinformation.md): Information about the first video sample in a track.
- [AVAssetSegmentReportSampleInformation](avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a report

- [segmentType](avassetsegmentreport/segmenttype.md): The type of segment data.
- [AVAssetSegmentType](avassetsegmenttype.md): Constants that define the type of a segment.
- [trackReports](avassetsegmentreport/trackreports.md): The reports for the segment’s track data.

# AVAssetSegmentTrackReport (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that provides information on a track in segment data.

## Declaration

```objectivec
@interface AVAssetSegmentTrackReport : NSObject
```

## Topics

### Inspecting a report

- [trackID](avassetsegmenttrackreport/trackid.md): A persistent unique identifier for a track.
- [mediaType](avassetsegmenttrackreport/mediatype.md): The type of media a track contains.
- [duration](avassetsegmenttrackreport/duration.md): The duration of a track.
- [earliestPresentationTimeStamp](avassetsegmenttrackreport/earliestpresentationtimestamp.md): The earliest presentation timestamp (PTS) for this track.
- [firstVideoSampleInformation](avassetsegmenttrackreport/firstvideosampleinformation.md): Information about the first video sample in a track.
- [AVAssetSegmentReportSampleInformation](avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting a report

- [segmentType](avassetsegmentreport/segmenttype.md): The type of segment data.
- [AVAssetSegmentType](avassetsegmenttype.md): Constants that define the type of a segment.
- [trackReports](avassetsegmentreport/trackreports.md): The reports for the segment’s track data.
