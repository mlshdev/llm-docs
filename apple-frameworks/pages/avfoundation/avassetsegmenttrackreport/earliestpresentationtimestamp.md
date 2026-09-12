> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetsegmenttrackreport/earliestpresentationtimestamp](https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/earliestpresentationtimestamp)

# earliestPresentationTimeStamp (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The earliest presentation timestamp (PTS) for this track.

## Declaration

```swift
var earliestPresentationTimeStamp: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The value is [invalid](../../coremedia/cmtime/invalid.md) if there’s no information available.

## See Also

### Inspecting a report

- [trackID](trackid.md): A persistent unique identifier for a track.
- [mediaType](mediatype.md): The type of media a track contains.
- [duration](duration.md): The duration of a track.
- [firstVideoSampleInformation](firstvideosampleinformation.md): Information about the first video sample in a track.
- [AVAssetSegmentReportSampleInformation](../avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.

# earliestPresentationTimeStamp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The earliest presentation timestamp (PTS) for this track.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime earliestPresentationTimeStamp;
```

<a id="Discussion"></a>

## Discussion

The value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) if there’s no information available.

## See Also

### Inspecting a report

- [trackID](trackid.md): A persistent unique identifier for a track.
- [mediaType](mediatype.md): The type of media a track contains.
- [duration](duration.md): The duration of a track.
- [firstVideoSampleInformation](firstvideosampleinformation.md): Information about the first video sample in a track.
- [AVAssetSegmentReportSampleInformation](../avassetsegmentreportsampleinformation.md): An object that provides information about sample data in a track.
