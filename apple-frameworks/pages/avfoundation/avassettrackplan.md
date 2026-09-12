> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackplan](https://developer.apple.com/documentation/avfoundation/avassettrackplan)

# AVAssetTrackPlan (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.

## Declaration

```swift
class AVAssetTrackPlan
```

<a id="overview"></a>

## Overview

Call AVAssetWritingPlanner’s “planTrack:withSegmentsGeneratedBy:” method to add an AVAssetTrackPlan to the planner to include it in the incremental writing session.

## Topics

### Creating a track plan

- [init(mediaType:segmentConfigurations:assemblyTrackID:)](avassettrackplan/init%28mediatype_segmentconfigurations_assemblytrackid_%29.md): Returns an instance of AVAssetTrackPlan

### Inspecting the track plan

- [mediaType](avassettrackplan/mediatype.md): The media type of this track.
- [segmentConfigurations](avassettrackplan/segmentconfigurations.md): Array of AVPlannedSegmentConfigurations, each element specifying the configuration of a planned segment, ordered in output PTS order.
- [assemblyTrackID](avassettrackplan/assemblytrackid.md): This is the track ID of this track when it is included in the assemblyComposition the planner passes to the completion handler to assemble all planned segments of all tracks into a single AVComposition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAssetVideoTrackPlan](avassetvideotrackplan.md)

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
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

# AVAssetTrackPlan (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.

## Declaration

```objectivec
@interface AVAssetTrackPlan : NSObject
```

<a id="overview"></a>

## Overview

Call AVAssetWritingPlanner’s “planTrack:withSegmentsGeneratedBy:” method to add an AVAssetTrackPlan to the planner to include it in the incremental writing session.

## Topics

### Creating a track plan

- [initWithMediaType:segmentConfigurations:assemblyTrackID:](avassettrackplan/init%28mediatype_segmentconfigurations_assemblytrackid_%29.md): Returns an instance of AVAssetTrackPlan

### Inspecting the track plan

- [mediaType](avassettrackplan/mediatype.md): The media type of this track.
- [segmentConfigurations](avassettrackplan/segmentconfigurations.md): Array of AVPlannedSegmentConfigurations, each element specifying the configuration of a planned segment, ordered in output PTS order.
- [assemblyTrackID](avassettrackplan/assemblytrackid.md): This is the track ID of this track when it is included in the assemblyComposition the planner passes to the completion handler to assemble all planned segments of all tracks into a single AVComposition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAssetVideoTrackPlan](avassetvideotrackplan.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.
