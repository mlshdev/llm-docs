> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/timerangeoftransition(before:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/timerangeoftransition(before:))

# timeRangeOfTransition(before:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The time range during which the focus transitioned toward the given decision.

## Declaration

```swift
final func timeRangeOfTransition(before decision: CNDecision) -> CMTimeRange
```

## Parameters

- `decision`: The decision of interest.

<a id="return-value"></a>

## Return Value

A value representing the time range during which the focus transitioned toward the given decision.
