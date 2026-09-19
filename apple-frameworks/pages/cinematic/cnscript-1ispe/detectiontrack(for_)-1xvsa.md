> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/detectiontrack(for:)-1xvsa

# detectionTrack(for:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A detection track representing all detections selected by a given decision.

## Declaration

```swift
final func detectionTrack(for decision: CNDecision) -> CNDetectionTrack?
```

## Parameters

- `decision`: The desired decision.

<a id="return-value"></a>

## Return Value

A detection track representing all detections selected by a given decision.
