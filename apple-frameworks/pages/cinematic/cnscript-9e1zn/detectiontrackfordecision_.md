> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/detectiontrackfordecision:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/detectiontrackfordecision:)

# detectionTrackForDecision:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A detection track representing all detections selected by a given decision.

## Declaration

```objectivec
- (CNDetectionTrack *) detectionTrackForDecision:(CNDecision *) decision;
```

## Parameters

- `decision`: The desired decision.

<a id="return-value"></a>

## Return Value

A detection track representing all detections selected by a given decision
