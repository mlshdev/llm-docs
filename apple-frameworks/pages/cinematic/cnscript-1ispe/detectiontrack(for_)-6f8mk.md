> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/detectiontrack(for:)-6f8mk](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/detectiontrack(for:)-6f8mk)

# detectionTrack(for:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A detection track representing all detections with the given detection ID, over the entire Cinematic script.

## Declaration

```swift
final func detectionTrack(for detectionID: CNDetectionID) -> CNDetectionTrack?
```

## Parameters

- `detectionID`: The detection ID of interest.

<a id="return-value"></a>

## Return Value

A detection track representing all detections with the detection ID of interest, over the entire Cinematic script.
