> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplannerprogress](https://developer.apple.com/documentation/avfoundation/avassetwritingplannerprogress)

# AVAssetWritingPlannerProgress (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.

## Declaration

```swift
class AVAssetWritingPlannerProgress
```

<a id="overview"></a>

## Overview

This class provides per-track progress information as a percentage of the total duration completed. Progress can be queried by assemblyTrackID.

## Topics

### Getting progress

- [overallProgress](avassetwritingplannerprogress/overallprogress.md): The overall progress across all tracks.
- [progress(forTrack:)](avassetwritingplannerprogress/progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.
- [progress(forTrack:)](avassetwritingplannerprogress/progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

# AVAssetWritingPlannerProgress (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.

## Declaration

```objectivec
@interface AVAssetWritingPlannerProgress : NSObject
```

<a id="overview"></a>

## Overview

This class provides per-track progress information as a percentage of the total duration completed. Progress can be queried by assemblyTrackID.

## Topics

### Getting progress

- [overallProgress](avassetwritingplannerprogress/overallprogress.md): The overall progress across all tracks.
- [progressForTrack:](avassetwritingplannerprogress/progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.
- [progressForTrack:](avassetwritingplannerprogress/progress%28fortrack_%29.md): Returns the progress for a specific track identified by its assemblyTrackID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedSegmentConfiguration](avplannedsegmentconfiguration.md): AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.
