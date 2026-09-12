> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackplan/assemblytrackid](https://developer.apple.com/documentation/avfoundation/avassettrackplan/assemblytrackid)

# assemblyTrackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

This is the track ID of this track when it is included in the assemblyComposition the planner passes to the completion handler to assemble all planned segments of all tracks into a single AVComposition.

## Declaration

```swift
var assemblyTrackID: CMPersistentTrackID { get }
```

<a id="discussion"></a>

## Discussion

The assemblyTrackID serves the purpose as a unique identifier of the track in the incremental writing session. This does not necessarily match the trackID of the source asset. The client is responsible for remembering the relationship between assemblyTrackID and the trackID in the source asset.

## See Also

### Inspecting the track plan

- [mediaType](mediatype.md): The media type of this track.
- [segmentConfigurations](segmentconfigurations.md): Array of AVPlannedSegmentConfigurations, each element specifying the configuration of a planned segment, ordered in output PTS order.

# assemblyTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

This is the track ID of this track when it is included in the assemblyComposition the planner passes to the completion handler to assemble all planned segments of all tracks into a single AVComposition.

## Declaration

```objectivec
@property (readonly) CMPersistentTrackID assemblyTrackID;
```

<a id="discussion"></a>

## Discussion

The assemblyTrackID serves the purpose as a unique identifier of the track in the incremental writing session. This does not necessarily match the trackID of the source asset. The client is responsible for remembering the relationship between assemblyTrackID and the trackID in the source asset.

## See Also

### Inspecting the track plan

- [mediaType](mediatype.md): The media type of this track.
- [segmentConfigurations](segmentconfigurations.md): Array of AVPlannedSegmentConfigurations, each element specifying the configuration of a planned segment, ordered in output PTS order.
