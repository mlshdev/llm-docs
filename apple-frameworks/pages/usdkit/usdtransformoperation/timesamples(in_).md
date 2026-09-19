> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdtransformoperation/timesamples(in:)

# timeSamples(in:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns time samples authored within the specified interval.

## Declaration

```swift
func timeSamples(in interval: ClosedRange<USDStage.TimeCode>) -> [USDStage.TimeCode]
```

## Parameters

- `interval`: The time interval to query.

<a id="return-value"></a>

## Return Value

Time samples within the interval, or an empty array if none exist.
