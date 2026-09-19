> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkstatisticscollection/statistics(for:)

# statistics(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the statistics object for the time interval that contains the provided date.

## Declaration

```swift
func statistics(for date: Date) -> HKStatistics?
```

## Parameters

- `date`: The target date.

<a id="return-value"></a>

## Return Value

A statistics object for the time interval containing the provided date. If there are no samples for the selected time interval, the statistics object has a `nil`-valued quantity.

## See Also

### Accessing Statistics Collections

- [statistics()](statistics%28%29.md): Returns an array of statistics objects representing the populated time intervals covered by the statistics collection query.
- [enumerateStatistics(from:to:with:)](enumeratestatistics%28from_to_with_%29.md): Enumerates the statistics objects for all the time intervals from the start date until the end date.

# statisticsForDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the statistics object for the time interval that contains the provided date.

## Declaration

```objectivec
- (HKStatistics *) statisticsForDate:(NSDate *) date;
```

## Parameters

- `date`: The target date.

<a id="return-value"></a>

## Return Value

A statistics object for the time interval containing the provided date. If there are no samples for the selected time interval, the statistics object has a `nil`-valued quantity.

## See Also

### Accessing Statistics Collections

- [statistics](statistics%28%29.md): Returns an array of statistics objects representing the populated time intervals covered by the statistics collection query.
- [enumerateStatisticsFromDate:toDate:withBlock:](enumeratestatistics%28from_to_with_%29.md): Enumerates the statistics objects for all the time intervals from the start date until the end date.
