> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/userdecisions(in:)

# userDecisions(in:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

All user decisions in the given time range.

## Declaration

```swift
final func userDecisions(in timeRange: CMTimeRange) -> [CNDecision]
```

## Parameters

- `timeRange`: The time range of interest.

<a id="return-value"></a>

## Return Value

An array of user decisions in the given time range. These include user decisions made during recording or added to the script.
