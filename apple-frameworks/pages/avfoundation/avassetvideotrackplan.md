> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvideotrackplan](https://developer.apple.com/documentation/avfoundation/avassetvideotrackplan)

# AVAssetVideoTrackPlan (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.

## Declaration

```swift
class AVAssetVideoTrackPlan
```

<a id="overview"></a>

## Overview

Call AVAssetWritingPlanner’s “planTrack:withSegmentsGeneratedBy:” method to add an AVAssetTrackPlan to the planner’s plan to include it in the incremental writing session. Use this class instead of the base class AVAssetTrackPlan if you are setting up AVAssetWriter with video compression. This configuration hints to the planner that it must coordinate segment boundaries transitions between segments. This is abstracted from the client via using either the resumableAssetWriterInputWithMediaType or createResumableCompressionSessionWithAllocator helper functions within the AVPlannedVideoSegmentWritingRequest.

## Topics

### Creating a video track plan

- [init(videoCodecType:encoderSpecification:mediaType:segmentConfigurations:assemblyTrackID:)](avassetvideotrackplan/init%28videocodectype_encoderspecification_mediatype_segmentconfigurations_assemblytrackid_%29.md): Creates an instance of AVAssetVideoTrackPlan.

### Inspecting the video track plan

- [videoCodecType](avassetvideotrackplan/videocodectype.md): Video codec type of this track

## Relationships

### Inherits From

- [AVAssetTrackPlan](avassettrackplan.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

# AVAssetVideoTrackPlan (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.

## Declaration

```objectivec
@interface AVAssetVideoTrackPlan : AVAssetTrackPlan
```

<a id="overview"></a>

## Overview

Call AVAssetWritingPlanner’s “planTrack:withSegmentsGeneratedBy:” method to add an AVAssetTrackPlan to the planner’s plan to include it in the incremental writing session. Use this class instead of the base class AVAssetTrackPlan if you are setting up AVAssetWriter with video compression. This configuration hints to the planner that it must coordinate segment boundaries transitions between segments. This is abstracted from the client via using either the resumableAssetWriterInputWithMediaType or createResumableCompressionSessionWithAllocator helper functions within the AVPlannedVideoSegmentWritingRequest.

## Topics

### Creating a video track plan

- [initWithVideoCodecType:encoderSpecification:mediaType:segmentConfigurations:assemblyTrackID:](avassetvideotrackplan/initwithvideocodectype_encoderspecification_mediatype_segmentconfigurations_assemblytrackid_.md): Returns an instance of AVAssetVideoTrackPlan

### Inspecting the video track plan

- [videoCodecType](avassetvideotrackplan/videocodectype.md): Video codec type of this track

## Relationships

### Inherits From

- [AVAssetTrackPlan](avassettrackplan.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.
