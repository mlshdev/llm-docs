> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedsegmentconfiguration](https://developer.apple.com/documentation/avfoundation/avplannedsegmentconfiguration)

# AVPlannedSegmentConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Declaration

```swift
class AVPlannedSegmentConfiguration
```

## Topics

### Creating a segment configuration

- [init(duration:)](avplannedsegmentconfiguration/init%28duration_%29.md): Creates an instance of AVPlannedSegmentConfiguration specifying the duration of the planned segment.

### Inspecting the configuration

- [duration](avplannedsegmentconfiguration/duration.md): The duration of this planned segment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md)

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
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.

# AVPlannedSegmentConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

AVPlannedSegmentConfiguration describes the requirements for a planned segment in an incremental writing session executed by the AVAssetWritingPlanner. Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Declaration

```objectivec
@interface AVPlannedSegmentConfiguration : NSObject
```

## Topics

### Creating a segment configuration

- [initWithDuration:](avplannedsegmentconfiguration/init%28duration_%29.md): Creates an instance of AVPlannedSegmentConfiguration specifying the duration of the planned segment.

### Inspecting the configuration

- [duration](avplannedsegmentconfiguration/duration.md): The duration of this planned segment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md)

## See Also

### Planned export

- [AVAssetWritingPlanner](avassetwritingplanner.md): AVAssetWritingPlanner orchestrates incremental writing of media files.
- [AVAssetWritingPlannerProgress](avassetwritingplannerprogress.md): AVAssetWritingPlannerProgress tracks the progress of incremental writing for each track in an AVAssetWritingPlanner session.
- [AVAssetTrackPlan](avassettrackplan.md): AVAssetTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVAssetVideoTrackPlan](avassetvideotrackplan.md): AVAssetVideoTrackPlan holds information about a track and how it should be segmented and executed in an incremental writing session.
- [AVPlannedVideoSegmentConfiguration](avplannedvideosegmentconfiguration.md): AVPlannedVideoSegmentConfiguration describes the requirements for a planned video segment in an incremental writing session executed by the AVAssetWritingPlanner.
- [AVPlannedSegmentWritingRequest](avplannedsegmentwritingrequest.md): AVPlannedSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental track segment.
- [AVPlannedVideoSegmentWritingRequest](avplannedvideosegmentwritingrequest.md): AVPlannedVideoSegmentWritingRequest encompasses a request from the AVAssetWritingPlanner to the client code to write one incremental video track segment with compression.
