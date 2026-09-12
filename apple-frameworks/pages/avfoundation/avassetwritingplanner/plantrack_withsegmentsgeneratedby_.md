> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/plantrack:withsegmentsgeneratedby:](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/plantrack:withsegmentsgeneratedby:)

# planTrack:withSegmentsGeneratedBy:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an AVAssetTrackPlan to this AVAssetWritingPlanner, with a block to be called by the planner to generate each segment of the track.

## Declaration

```objectivec
- (void) planTrack:(AVAssetTrackPlan *) trackPlan withSegmentsGeneratedBy:(void (^)(AVPlannedSegmentWritingRequest *segmentWriteRequest)) writingSegmentCallbackBlock;
```

## Parameters

- `trackPlan`: The track plan contains information about the track and boundaries of all the segments.
- `writingSegmentCallbackBlock`: A block to be called by the AVAssetWritingPlanner on each incremental segment for this track to write the segment to an intermediate file, according to the specifications in the “segmentWriteRequest” object passed to the block.

<a id="discussion"></a>

## Discussion

This method throws NSInternalInconsistencyException if a trackPlan with the same assemblyTrackID already exists in the planner, or if called after executePlanWithCompletionHandler: has been invoked.
