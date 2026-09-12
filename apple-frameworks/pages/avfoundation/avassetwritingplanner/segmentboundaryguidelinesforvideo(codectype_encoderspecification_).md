> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentboundaryguidelinesforvideo(codectype:encoderspecification:)](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentboundaryguidelinesforvideo(codectype:encoderspecification:))

# segmentBoundaryGuidelinesForVideo(codecType:encoderSpecification:)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns segment boundary guidelines that help clients determine how to segment compression video tracks with best results.

## Declaration

```swift
static func segmentBoundaryGuidelinesForVideo(codecType: AVVideoCodecType, encoderSpecification: [String : any Sendable]) -> AVAssetWritingPlanner.SegmentBoundaryGuidelines
```

## Parameters

- `codecType`: The output video codec type for the video track.
- `encoderSpecification`: A dictionary of kVTVideoEncoderSpecification\_\* keys describing the video encoder. This is the same specification the client uses to compress the video track.

<a id="return-value"></a>

## Return Value

An AVAssetWritingPlanner.SegmentBoundaryGuidelines with the minimum frame count and duration for the given codec and encoder.

<a id="discussion"></a>

## Discussion

The encoderSpecification parameter here is the same encoder specification the client uses to compress the video track.

## See Also

### Getting segment boundary guidance

- [segmentBoundaryRecommendations(forVideoTrack:minimumSegmentDuration:minimumSegmentFrameCount:)](segmentboundaryrecommendations%28forvideotrack_minimumsegmentduration_minimumsegmentframecount_%29.md): Returns segment boundary recommendations for a given source video asset track.
