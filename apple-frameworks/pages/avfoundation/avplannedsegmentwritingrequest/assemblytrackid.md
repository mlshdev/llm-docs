> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedsegmentwritingrequest/assemblytrackid](https://developer.apple.com/documentation/avfoundation/avplannedsegmentwritingrequest/assemblytrackid)

# assemblyTrackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The trackID identifies which track should be written to this segment file. This is the same track ID in the AVAssetTrackPlan object. This is also the trackID the AVAssetWritingPlanner uses to build the assembled AVComposition before it calls the completion handler.

## Declaration

```swift
var assemblyTrackID: CMPersistentTrackID { get }
```

## See Also

### Inspecting the request

- [timeRange](timerange.md): The PTS range for this segment.
- [segmentFileOutputURL](segmentfileoutputurl.md): The URL of the file where this incremental segment should be written to.
- [progress](progress.md): The current progress for the track identified by assemblyTrackID.

# assemblyTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The trackID identifies which track should be written to this segment file. This is the same track ID in the AVAssetTrackPlan object. This is also the trackID the AVAssetWritingPlanner uses to build the assembled AVComposition before it calls the completion handler.

## Declaration

```objectivec
@property (readonly) CMPersistentTrackID assemblyTrackID;
```

## See Also

### Inspecting the request

- [timeRange](timerange.md): The PTS range for this segment.
- [segmentFileOutputURL](segmentfileoutputurl.md): The URL of the file where this incremental segment should be written to.
- [progress](progress.md): The current progress for the track identified by assemblyTrackID.
