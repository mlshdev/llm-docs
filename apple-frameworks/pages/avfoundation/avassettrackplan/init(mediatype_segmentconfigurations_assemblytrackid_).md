> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackplan/init(mediatype:segmentconfigurations:assemblytrackid:)](https://developer.apple.com/documentation/avfoundation/avassettrackplan/init(mediatype:segmentconfigurations:assemblytrackid:))

# init(mediaType:segmentConfigurations:assemblyTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an instance of AVAssetTrackPlan

## Declaration

```swift
init(mediaType: AVMediaType, segmentConfigurations: [AVPlannedSegmentConfiguration], assemblyTrackID trackID: CMPersistentTrackID)
```

## Parameters

- `mediaType`: Media type of the track
- `segmentConfigurations`: Segment configurations of the track
- `trackID`: The trackID that identifies this track in the assemblyComposition the planner passes to the completion handler of the incremental writing session.

<a id="discussion"></a>

## Discussion

This initializer throws NSInvalidArgumentException if trackID is kCMPersistentTrackID_Invalid.

# initWithMediaType:segmentConfigurations:assemblyTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an instance of AVAssetTrackPlan

## Declaration

```objectivec
- (instancetype) initWithMediaType:(AVMediaType) mediaType segmentConfigurations:(NSArray<AVPlannedSegmentConfiguration *> *) segmentConfigurations assemblyTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `mediaType`: Media type of the track
- `segmentConfigurations`: Segment configurations of the track
- `trackID`: The trackID that identifies this track in the assemblyComposition the planner passes to the completion handler of the incremental writing session.

<a id="discussion"></a>

## Discussion

This initializer throws NSInvalidArgumentException if trackID is kCMPersistentTrackID_Invalid.
