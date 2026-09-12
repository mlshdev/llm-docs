> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/detectiontrackforid:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/detectiontrackforid:)

# detectionTrackForID:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A detection track representing all detections with the given detection ID, over the entire Cinematic script.

## Declaration

```objectivec
- (CNDetectionTrack *) detectionTrackForID:(CNDetectionID) detectionID;
```

## Parameters

- `detectionID`: The detection ID of interest.

<a id="return-value"></a>

## Return Value

A detection track representing all detections with the detection ID of interest, over the entire Cinematic script.
