> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedsegmentwritingrequest/segmentfileoutputurl](https://developer.apple.com/documentation/avfoundation/avplannedsegmentwritingrequest/segmentfileoutputurl)

# segmentFileOutputURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The URL of the file where this incremental segment should be written to.

## Declaration

```swift
var segmentFileOutputURL: URL { get }
```

<a id="discussion"></a>

## Discussion

AVAssetWritingPlanner will request each incremental segment to be written to a different file. If the file already exists from a previous session, the client should delete it to allow the subsequent asset writer session to succeed.

## See Also

### Inspecting the request

- [timeRange](timerange.md): The PTS range for this segment.
- [progress](progress.md): The current progress for the track identified by assemblyTrackID.
- [assemblyTrackID](assemblytrackid.md): The trackID identifies which track should be written to this segment file. This is the same track ID in the AVAssetTrackPlan object. This is also the trackID the AVAssetWritingPlanner uses to build the assembled AVComposition before it calls the completion handler.

# segmentFileOutputURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The URL of the file where this incremental segment should be written to.

## Declaration

```objectivec
@property (readonly) NSURL * segmentFileOutputURL;
```

<a id="discussion"></a>

## Discussion

AVAssetWritingPlanner will request each incremental segment to be written to a different file. If the file already exists from a previous session, the client should delete it to allow the subsequent asset writer session to succeed.

## See Also

### Inspecting the request

- [timeRange](timerange.md): The PTS range for this segment.
- [progress](progress.md): The current progress for the track identified by assemblyTrackID.
- [assemblyTrackID](assemblytrackid.md): The trackID identifies which track should be written to this segment file. This is the same track ID in the AVAssetTrackPlan object. This is also the trackID the AVAssetWritingPlanner uses to build the assembled AVComposition before it calls the completion handler.
