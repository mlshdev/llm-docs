> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/detectiontrack(for:)-6f8mk

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
