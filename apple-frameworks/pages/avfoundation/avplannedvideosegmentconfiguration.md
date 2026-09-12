> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedvideosegmentconfiguration](https://developer.apple.com/documentation/avfoundation/avplannedvideosegmentconfiguration)

# AVPlannedVideoSegmentConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.

## Declaration

```swift
class AVPlannedVideoSegmentConfiguration
```

<a id="overview"></a>

## Overview

Use this class instead of the base class AVPlannedSegmentConfiguration if you are setting up AVAssetWriterInput to do video compression. AVAssetWritingPlanner will provide required video compression properties in its AVPlannedSegmentWritingRequest that are needed to prevent visual artifacts on segment boundaries.

## Topics

### Creating a video segment configuration

- [init(numberOfFrames:duration:)](avplannedvideosegmentconfiguration/init%28numberofframes_duration_%29.md): Creates an instance of AVPlannedVideoSegmentConfiguration specifying the number of frames in and total duration of the segment.

### Inspecting the configuration

- [frameCount](avplannedvideosegmentconfiguration/framecount.md): The number of frames in this planned video segment.

## Relationships

### Inherits From

- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md)

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
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

# AVPlannedVideoSegmentConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.

## Declaration

```objectivec
@interface AVPlannedVideoSegmentConfiguration : AVPlannedSegmentConfiguration
```

<a id="overview"></a>

## Overview

Use this class instead of the base class AVPlannedSegmentConfiguration if you are setting up AVAssetWriterInput to do video compression. AVAssetWritingPlanner will provide required video compression properties in its AVPlannedSegmentWritingRequest that are needed to prevent visual artifacts on segment boundaries.

## Topics

### Creating a video segment configuration

- [initWithNumberOfFrames:duration:](avplannedvideosegmentconfiguration/init%28numberofframes_duration_%29.md): Creates an instance of AVPlannedVideoSegmentConfiguration specifying the number of frames in and total duration of the segment.

### Inspecting the configuration

- [frameCount](avplannedvideosegmentconfiguration/framecount.md): The number of frames in this planned video segment.

## Relationships

### Inherits From

- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.
