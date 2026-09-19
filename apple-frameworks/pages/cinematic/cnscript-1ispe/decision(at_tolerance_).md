> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/decision(at:tolerance:)

# decision(at:tolerance:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The closest decision to the given time within the given tolerance.

## Declaration

```swift
final func decision(at time: CMTime, tolerance: CMTime) -> CNDecision?
```

## Parameters

- `time`: The time of the decision.
- `tolerance`: The tolerance time.

<a id="return-value"></a>

## Return Value

A decision representing the closest decision to the given time within the given tolerance. Returns nil if there are none.
