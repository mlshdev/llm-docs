> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/userdecisionsintimerange:

# userDecisionsInTimeRange:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

All user decisions in the given time range.

## Declaration

```objectivec
- (NSArray<CNDecision *> *) userDecisionsInTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range of interest.

<a id="return-value"></a>

## Return Value

An array of user decisions in the given time range. These include user decisions made during recording or added to the script.
