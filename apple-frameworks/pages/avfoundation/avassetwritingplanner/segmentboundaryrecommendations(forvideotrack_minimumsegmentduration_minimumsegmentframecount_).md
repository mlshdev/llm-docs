> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/segmentboundaryrecommendations(forvideotrack:minimumsegmentduration:minimumsegmentframecount:)](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/segmentboundaryrecommendations(forvideotrack:minimumsegmentduration:minimumsegmentframecount:))

# segmentBoundaryRecommendations(forVideoTrack:minimumSegmentDuration:minimumSegmentFrameCount:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns segment boundary recommendations for a given source video asset track.

## Declaration

```swift
class func segmentBoundaryRecommendations(forVideoTrack videoAssetTrack: AVAssetTrack, minimumSegmentDuration: CMTime, minimumSegmentFrameCount: Int) -> [AVPlannedVideoSegmentConfiguration]
```

## Parameters

- `videoAssetTrack`: The source video AVAssetTrack to be analyzed.
- `minimumSegmentDuration`: The client selected minimum duration for the segments.
- `minimumSegmentFrameCount`: The minimum number of source frames in a segment.

<a id="return-value"></a>

## Return Value

Array of AVPlannedVideoSegmentConfiguration objects, each element specifying the configuration of a planned video segment, ordered in output PTS order

<a id="discussion"></a>

## Discussion

This is a convenience method that can help clients to pick optimal segmentation boundaries for a given source video AVAssetTrack based on the structure of the track and the minimumSegmentDuration and minimumSegmentFrameCount values provided.

The client needs to ensure that the minimumSegmentDuration is greater than or equal to the segment boundary guidelines for the codec type. The client should also ensure that minimumSegmentFrameCount also exceeds the segment boundary guidelines.

The segments returned will satisfy both the minimumSegmentDuration and minimumSegmentFrameCount requirements. The only exception is the very last segment, which may be shorter.

The returned array will ensure that segment boundaries occur on sample boundaries.

Clients can use these results to fill in the AVPlannedVideoSegmentConfiguration for this asset track, if the output maintains the source timing. If the output timing differs from the source, then the returned AVPlannedVideoSegmentConfiguration array’s results need to be modified accordingly by the client.

This method throws NSInvalidArgumentException if minimumSegmentDuration is not numeric or is less than or equal to zero, or if minimumSegmentFrameCount is less than or equal to 0.

## See Also

### Getting segment boundary guidance

- [segmentBoundaryGuidelinesForVideo(codecType:encoderSpecification:)](segmentboundaryguidelinesforvideo%28codectype_encoderspecification_%29.md): Returns segment boundary guidelines that help clients determine how to segment compression video tracks with best results.

# segmentBoundaryRecommendationsForVideoAVAssetTrack:minimumSegmentDuration:minimumSegmentFrameCount: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns segment boundary recommendations for a given source video asset track.

## Declaration

```objectivec
+ (NSArray<AVPlannedVideoSegmentConfiguration *> *) segmentBoundaryRecommendationsForVideoAVAssetTrack:(AVAssetTrack *) videoAssetTrack minimumSegmentDuration:(CMTime) minimumSegmentDuration minimumSegmentFrameCount:(NSInteger) minimumSegmentFrameCount;
```

## Parameters

- `videoAssetTrack`: The source video AVAssetTrack to be analyzed.
- `minimumSegmentDuration`: The client selected minimum duration for the segments.
- `minimumSegmentFrameCount`: The minimum number of source frames in a segment.

<a id="return-value"></a>

## Return Value

Array of AVPlannedVideoSegmentConfiguration objects, each element specifying the configuration of a planned video segment, ordered in output PTS order

<a id="discussion"></a>

## Discussion

This is a convenience method that can help clients to pick optimal segmentation boundaries for a given source video AVAssetTrack based on the structure of the track and the minimumSegmentDuration and minimumSegmentFrameCount values provided.

The client needs to ensure that the minimumSegmentDuration is greater than or equal to the segment boundary guidelines for the codec type. The client should also ensure that minimumSegmentFrameCount also exceeds the segment boundary guidelines.

The segments returned will satisfy both the minimumSegmentDuration and minimumSegmentFrameCount requirements. The only exception is the very last segment, which may be shorter.

The returned array will ensure that segment boundaries occur on sample boundaries.

Clients can use these results to fill in the AVPlannedVideoSegmentConfiguration for this asset track, if the output maintains the source timing. If the output timing differs from the source, then the returned AVPlannedVideoSegmentConfiguration array’s results need to be modified accordingly by the client.

This method throws NSInvalidArgumentException if minimumSegmentDuration is not numeric or is less than or equal to zero, or if minimumSegmentFrameCount is less than or equal to 0.

## See Also

### Getting segment boundary guidance

- [segmentBoundaryGuidelinesForVideoCodecType:videoEncoderSpecification:](segmentboundaryguidelinesforvideocodectype_videoencoderspecification_.md): Returns segment boundary guidelines that help clients determine how to segment compression video tracks with best results.
