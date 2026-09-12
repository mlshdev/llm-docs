> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/timerangeoftransitionafterdecision:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/timerangeoftransitionafterdecision:)

# timeRangeOfTransitionAfterDecision:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The time range during which the focus transitioned away from the given decision.

## Declaration

```objectivec
- (CMTimeRange) timeRangeOfTransitionAfterDecision:(CNDecision *) decision;
```

## Parameters

- `decision`: The decision of interest.

<a id="return-value"></a>

## Return Value

The time range during which the focus transitioned away from the given decision.
