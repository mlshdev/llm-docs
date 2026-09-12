> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackplan/mediatype](https://developer.apple.com/documentation/avfoundation/avassettrackplan/mediatype)

# mediaType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The media type of this track.

## Declaration

```swift
var mediaType: AVMediaType { get }
```

## See Also

### Inspecting the track plan

- [segmentConfigurations](segmentconfigurations.md): Array of AVPlannedSegmentConfigurations, each element specifying the configuration of a planned segment, ordered in output PTS order.
- [assemblyTrackID](assemblytrackid.md): This is the track ID of this track when it is included in the assemblyComposition the planner passes to the completion handler to assemble all planned segments of all tracks into a single AVComposition.

# mediaType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The media type of this track.

## Declaration

```objectivec
@property (readonly) AVMediaType mediaType;
```

## See Also

### Inspecting the track plan

- [segmentConfigurations](segmentconfigurations.md): Array of AVPlannedSegmentConfigurations, each element specifying the configuration of a planned segment, ordered in output PTS order.
- [assemblyTrackID](assemblytrackid.md): This is the track ID of this track when it is included in the assemblyComposition the planner passes to the completion handler to assemble all planned segments of all tracks into a single AVComposition.
