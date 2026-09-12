> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/timerangeoftransition(after:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/timerangeoftransition(after:))

# timeRangeOfTransition(after:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The time range during which the focus transitioned away from the given decision.

## Declaration

```swift
final func timeRangeOfTransition(after decision: CNDecision) -> CMTimeRange
```

## Parameters

- `decision`: The decision of interest.

<a id="return-value"></a>

## Return Value

The time range during which the focus transitioned away from the given decision.
