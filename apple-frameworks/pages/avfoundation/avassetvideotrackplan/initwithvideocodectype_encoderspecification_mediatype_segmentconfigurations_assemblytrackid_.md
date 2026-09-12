> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvideotrackplan/initwithvideocodectype:encoderspecification:mediatype:segmentconfigurations:assemblytrackid:](https://developer.apple.com/documentation/avfoundation/avassetvideotrackplan/initwithvideocodectype:encoderspecification:mediatype:segmentconfigurations:assemblytrackid:)

# initWithVideoCodecType:encoderSpecification:mediaType:segmentConfigurations:assemblyTrackID:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an instance of AVAssetVideoTrackPlan

## Declaration

```objectivec
- (instancetype) initWithVideoCodecType:(AVVideoCodecType) videoCodecType encoderSpecification:(NSDictionary *) encoderSpecification mediaType:(AVMediaType) mediaType segmentConfigurations:(NSArray<AVPlannedSegmentConfiguration *> *) segmentConfigurations assemblyTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `videoCodecType`: Video codec type of the track
- `encoderSpecification`: The encoder specification the client will use to write planned segments of this track
- `mediaType`: Media type of the track. Only AVMediaTypeVideo and AVMediaTypeAuxiliaryPicture are supported.
- `segmentConfigurations`: Segment configurations of the track
- `trackID`: The trackID that identifies this track in the assemblyComposition the planner passes to the completion handler of the incremental writing session.

<a id="discussion"></a>

## Discussion

This initializer throws NSInvalidArgumentException in the following cases.

1. mediaType is not supported. Supported media types are AVMediaTypeVideo and AVMediaTypeAuxiliaryPicture
2. The encoder specified by videoCodecType and encoderSpecification does not support video encoding in segments
