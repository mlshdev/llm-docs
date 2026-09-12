> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner)

# AVAssetWritingPlanner (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetWritingPlanner orchestrates incremental writing of media files.

## Declaration

```swift
class AVAssetWritingPlanner
```

<a id="overview"></a>

## Overview

AVAssetWritingPlanner orchestrates an incremental and resumable asset file writing session. It keeps track of the progress of the incremental segments, and can resume the writing from the last checkpoint. This is NOT intended for any real time applications. Also, not all tracks can be written incrementally. The workflow is as follows:

1. The client creates the planner with a unique directoryForTemporaryFiles.
2. The client tells the planner which tracks are to be written incrementally by calling the “planTrack:withSegmentsGeneratedBy:” method, providing a callback block that writes one segment per block invocation.
3. The client kicks off the incremental writing session by calling the “executePlanWithCompletionHandler” method.
4. The planner will call the writingSegmentCallbackBlock to ask the client to write one incremental segment of one track at a time. The client code should write one incremental segment according to the “AVPlannedSegmentWritingRequest” object passed in to the callback block. Clients must call “finish” or “finishWithError” or “finishWithClientState” or “cancel” methods on the request object when it finishes the segment successfully, or encountered an error, or wants to cancel the writing of the segment.
5. At the end of the writing, after all incremental segments are finished, the planner calls the completionHandler. The client can use the “assemblyComposition” object passed in to the completionHandler to assemble the incremental segments into full tracks and export it to a final output file. The completionHandler will also be called when there is any irrecoverable error.
6. The client is responsible for cleaning all files in the directoryForTemporaryFiles after the incremental session is done and the final output file is written.

AVAssetWritingPlanner is able to recognize when a plan-in-progress matching the plan was already saved at directoryForTemporaryFiles, presumably by a previous invocation of the client, and possibly aborted due to that client being terminated abruptly, and will assist by resuming the plan at the first step that wasn’t previously completed.

## Topics

### Creating a planner

- [init(directoryForTemporaryFiles:)](avassetwritingplanner/init%28directoryfortemporaryfiles_%29.md): Creates an instance of AVAssetWritingPlanner given a unique file directory to host all incremental segment files and other intermediate files.

### Planning tracks

- [plan(\_:segmentHandler:)](avassetwritingplanner/plan%28__segmenthandler_%29.md): Adds a track plan with manual segment completion control.

### Executing the plan

- [executePlan()](avassetwritingplanner/executeplan%28%29.md): Starts the incremental segment writing.

### Getting segment boundary guidance

- [segmentBoundaryGuidelinesForVideo(codecType:encoderSpecification:)](avassetwritingplanner/segmentboundaryguidelinesforvideo%28codectype_encoderspecification_%29.md): Returns segment boundary guidelines that help clients determine how to segment compression video tracks with best results.
- [segmentBoundaryRecommendations(forVideoTrack:minimumSegmentDuration:minimumSegmentFrameCount:)](avassetwritingplanner/segmentboundaryrecommendations%28forvideotrack_minimumsegmentduration_minimumsegmentframecount_%29.md): Returns segment boundary recommendations for a given source video asset track.

### Getting progress

- [progress](avassetwritingplanner/progress.md): The current progress of the AVAssetWritingPlanner.

### Configuring segment boundaries

- [AVAssetWritingPlanner.SegmentBoundaryGuidelines](avassetwritingplanner/segmentboundaryguidelines.md): AVPlannedVideoSegmentBoundaryGuidelines provides guidance on determining planned segment boundaries for a video track in an incremental writing session executed by the AVAssetWritingPlanner.

### Handling segment results

- [AVAssetWritingPlanner.SegmentResult](avassetwritingplanner/segmentresult.md): Result type for manual segment completion control.

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

## See Also

### Planned export

- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

# AVAssetWritingPlanner (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetWritingPlanner orchestrates incremental writing of media files.

## Declaration

```objectivec
@interface AVAssetWritingPlanner : NSObject
```

<a id="overview"></a>

## Overview

AVAssetWritingPlanner orchestrates an incremental and resumable asset file writing session. It keeps track of the progress of the incremental segments, and can resume the writing from the last checkpoint. This is NOT intended for any real time applications. Also, not all tracks can be written incrementally. The workflow is as follows:

1. The client creates the planner with a unique directoryForTemporaryFiles.
2. The client tells the planner which tracks are to be written incrementally by calling the “planTrack:withSegmentsGeneratedBy:” method, providing a callback block that writes one segment per block invocation.
3. The client kicks off the incremental writing session by calling the “executePlanWithCompletionHandler” method.
4. The planner will call the writingSegmentCallbackBlock to ask the client to write one incremental segment of one track at a time. The client code should write one incremental segment according to the “AVPlannedSegmentWritingRequest” object passed in to the callback block. Clients must call “finish” or “finishWithError” or “finishWithClientState” or “cancel” methods on the request object when it finishes the segment successfully, or encountered an error, or wants to cancel the writing of the segment.
5. At the end of the writing, after all incremental segments are finished, the planner calls the completionHandler. The client can use the “assemblyComposition” object passed in to the completionHandler to assemble the incremental segments into full tracks and export it to a final output file. The completionHandler will also be called when there is any irrecoverable error.
6. The client is responsible for cleaning all files in the directoryForTemporaryFiles after the incremental session is done and the final output file is written.

AVAssetWritingPlanner is able to recognize when a plan-in-progress matching the plan was already saved at directoryForTemporaryFiles, presumably by a previous invocation of the client, and possibly aborted due to that client being terminated abruptly, and will assist by resuming the plan at the first step that wasn’t previously completed.

## Topics

### Creating a planner

- [initWithDirectoryForTemporaryFiles:](avassetwritingplanner/initwithdirectoryfortemporaryfiles_.md): Creates an instance of AVAssetWritingPlanner given a unique file directory to host all incremental segment files and other intermediate files.

### Planning tracks

- [planTrack:withSegmentsGeneratedBy:](avassetwritingplanner/plantrack_withsegmentsgeneratedby_.md): Adds an AVAssetTrackPlan to this AVAssetWritingPlanner, with a block to be called by the planner to generate each segment of the track.

### Executing the plan

- [executePlanWithCompletionHandler:](avassetwritingplanner/executeplanwithcompletionhandler_.md): Starts the incremental segment writing.
- [executePlanOnQueue:withCompletionHandler:](avassetwritingplanner/executeplanonqueue_withcompletionhandler_.md): Starts the incremental segment writing on a given dispatch queue

### Getting segment boundary guidance

- [segmentBoundaryGuidelinesForVideoCodecType:videoEncoderSpecification:](avassetwritingplanner/segmentboundaryguidelinesforvideocodectype_videoencoderspecification_.md): Returns segment boundary guidelines that help clients determine how to segment compression video tracks with best results.
- [segmentBoundaryRecommendationsForVideoAVAssetTrack:minimumSegmentDuration:minimumSegmentFrameCount:](avassetwritingplanner/segmentboundaryrecommendations%28forvideotrack_minimumsegmentduration_minimumsegmentframecount_%29.md): Returns segment boundary recommendations for a given source video asset track.

### Getting progress

- [progress](avassetwritingplanner/progress.md): The current progress of the AVAssetWritingPlanner.

### Configuring segment boundaries

- [AVPlannedVideoSegmentBoundaryGuidelines](avassetwritingplanner/segmentboundaryguidelines.md): AVPlannedVideoSegmentBoundaryGuidelines provides guidance on determining planned segment boundaries for a video track in an incremental writing session executed by the AVAssetWritingPlanner.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Planned export

- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.
