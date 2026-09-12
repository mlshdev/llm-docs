> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentboundaryguidelinesforvideocodectype:videoencoderspecification:](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentboundaryguidelinesforvideocodectype:videoencoderspecification:)

# segmentBoundaryGuidelinesForVideoCodecType:videoEncoderSpecification:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns segment boundary guidelines that help clients determine how to segment compression video tracks with best results.

## Declaration

```objectivec
+ (AVPlannedVideoSegmentBoundaryGuidelines) segmentBoundaryGuidelinesForVideoCodecType:(AVVideoCodecType) videoCodecType videoEncoderSpecification:(NSDictionary *) videoEncoderSpecification;
```

## Parameters

- `videoCodecType`: The output videoCodecType for the video track.
- `videoEncoderSpecification`: The video encoder specification includes options for choosing a specific video encoder. This is a dictionary containing kVTVideoEncoderSpecification\_\* keys specified in the VideoToolbox framework.

<a id="return-value"></a>

## Return Value

An AVPlannedVideoSegmentBoundaryGuidelines.

<a id="discussion"></a>

## Discussion

The videoEncoderSpecification parameter here is the same encoder specification the client uses to compress the video track.

## See Also

### Getting segment boundary guidance

- [segmentBoundaryRecommendationsForVideoAVAssetTrack:minimumSegmentDuration:minimumSegmentFrameCount:](segmentboundaryrecommendations%28forvideotrack_minimumsegmentduration_minimumsegmentframecount_%29.md): Returns segment boundary recommendations for a given source video asset track.
