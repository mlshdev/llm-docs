> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedsegmentwritingrequest/timerange](https://developer.apple.com/documentation/avfoundation/avplannedsegmentwritingrequest/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The PTS range for this segment.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="discussion"></a>

## Discussion

The client is responsible for delivering the appropriate sample corresponding to timeRange.start if we are resuming a previous session that has already made incremental progress for this track.

## See Also

### Inspecting the request

- [segmentFileOutputURL](segmentfileoutputurl.md): The URL of the file where this incremental segment should be written to.
- [progress](progress.md): The current progress for the track identified by assemblyTrackID.
- [assemblyTrackID](assemblytrackid.md): The trackID identifies which track should be written to this segment file. This is the same track ID in the AVAssetTrackPlan object. This is also the trackID the AVAssetWritingPlanner uses to build the assembled AVComposition before it calls the completion handler.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The PTS range for this segment.

## Declaration

```objectivec
@property (readonly) CMTimeRange timeRange;
```

<a id="discussion"></a>

## Discussion

The client is responsible for delivering the appropriate sample corresponding to timeRange.start if we are resuming a previous session that has already made incremental progress for this track.

## See Also

### Inspecting the request

- [segmentFileOutputURL](segmentfileoutputurl.md): The URL of the file where this incremental segment should be written to.
- [progress](progress.md): The current progress for the track identified by assemblyTrackID.
- [assemblyTrackID](assemblytrackid.md): The trackID identifies which track should be written to this segment file. This is the same track ID in the AVAssetTrackPlan object. This is also the trackID the AVAssetWritingPlanner uses to build the assembled AVComposition before it calls the completion handler.
