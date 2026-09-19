> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/basedecisions(in:)

# baseDecisions(in:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

All base decisions made automatically during recording in the given time range.

## Declaration

```swift
final func baseDecisions(in timeRange: CMTimeRange) -> [CNDecision]
```

## Parameters

- `timeRange`: The time range of the base decisions.

<a id="return-value"></a>

## Return Value

An array of base decisions in a given time range. These apply if no user decision overrides them.
