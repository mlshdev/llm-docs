> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/primarydecision(at:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/primarydecision(at:))

# primaryDecision(at:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The primary decision that’s in effect at the specified time, unless it’s outside the time range of the Cinematic script.

## Declaration

```swift
final func primaryDecision(at time: CMTime) -> CNDecision?
```

## Parameters

- `time`: The time of interest.

<a id="return-value"></a>

## Return Value

A value representing the primary decision that’s in effect at the specified time, unless it’s outside the time range of the Cinematic script. The value also represents the decision being transitioned away from the given time is during a focus transition.
