> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvideotrackplan/init(videocodectype:encoderspecification:mediatype:segmentconfigurations:assemblytrackid:)](https://developer.apple.com/documentation/avfoundation/avassetvideotrackplan/init(videocodectype:encoderspecification:mediatype:segmentconfigurations:assemblytrackid:))

# init(videoCodecType:encoderSpecification:mediaType:segmentConfigurations:assemblyTrackID:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an instance of AVAssetVideoTrackPlan.

## Declaration

```swift
convenience init(videoCodecType: AVVideoCodecType, encoderSpecification: [String : any Sendable]? = nil, mediaType: AVMediaType, segmentConfigurations: [AVPlannedVideoSegmentConfiguration], assemblyTrackID: CMPersistentTrackID)
```

## Parameters

- `videoCodecType`: Video codec type of the track.
- `encoderSpecification`: A dictionary describing the characteristics of a video encoder to use. Pass nil to let the system choose an encoder. If the client provides a specification, it should omit the following keys: kVTCompressionPropertyKey_SourceFrameCount, kVTCompressionPropertyKey_MoreFramesBeforeStart, and kVTCompressionPropertyKey_MoreFramesAfterEnd, since such keys will be overwritten by the underlying implementation.
- `mediaType`: Media type of the track. Only AVMediaTypeVideo and AVMediaTypeAuxiliaryPicture are supported.
- `segmentConfigurations`: Segment configurations of the track.
- `assemblyTrackID`: The trackID that identifies this track in the assemblyComposition the planner passes to the completion handler of the incremental writing session.

<a id="discussion"></a>

## Discussion

This initializer throws NSInvalidArgumentException in the following cases:

1. mediaType is not supported. Supported media types are AVMediaTypeVideo and AVMediaTypeAuxiliaryPicture
2. The encoder specified by videoCodecType and encoderSpecification does not support video encoding in segments
