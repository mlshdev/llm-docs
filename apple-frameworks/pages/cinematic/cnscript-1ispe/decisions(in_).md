> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/decisions(in:)

# decisions(in:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

All decisions within the given time range.

## Declaration

```swift
final func decisions(in timeRange: CMTimeRange) -> [CNDecision]
```

## Parameters

- `timeRange`: The time range of the decision.

<a id="return-value"></a>

## Return Value

An array of decisions within the given time range.
