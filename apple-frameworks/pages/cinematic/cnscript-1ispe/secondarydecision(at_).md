> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/secondarydecision(at:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/secondarydecision(at:))

# secondaryDecision(at:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

If a given time is during a focus transition, the system transitions toward a secondary decision.

## Declaration

```swift
final func secondaryDecision(at time: CMTime) -> CNDecision?
```

## Parameters

- `time`: The time of the focus transition.

<a id="return-value"></a>

## Return Value

The secondary decision the system is transitioning toward for the given time.
