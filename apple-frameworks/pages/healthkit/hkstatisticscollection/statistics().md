> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollection/statistics()](https://developer.apple.com/documentation/healthkit/hkstatisticscollection/statistics())

# statistics() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of statistics objects representing the populated time intervals covered by the statistics collection query.

## Declaration

```swift
func statistics() -> [HKStatistics]
```

<a id="return-value"></a>

## Return Value

An array of statistics objects. The statistics objects are sorted in chronological order.

<a id="Discussion"></a>

## Discussion

The resulting array contains a statistics object for each time interval that has at least one sample that matches the query. The statistics objects are returned in chronological order, but they are not necessarily contiguous. This method ignores time intervals that do not have any samples. As a result, there may be arbitrarily large gaps in time between adjacent statistics objects in the array.

## See Also

### Accessing Statistics Collections

- [statistics(for:)](statistics%28for_%29.md): Returns the statistics object for the time interval that contains the provided date.
- [enumerateStatistics(from:to:with:)](enumeratestatistics%28from_to_with_%29.md): Enumerates the statistics objects for all the time intervals from the start date until the end date.

# statistics (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of statistics objects representing the populated time intervals covered by the statistics collection query.

## Declaration

```objectivec
- (NSArray<HKStatistics *> *) statistics;
```

<a id="return-value"></a>

## Return Value

An array of statistics objects. The statistics objects are sorted in chronological order.

<a id="Discussion"></a>

## Discussion

The resulting array contains a statistics object for each time interval that has at least one sample that matches the query. The statistics objects are returned in chronological order, but they are not necessarily contiguous. This method ignores time intervals that do not have any samples. As a result, there may be arbitrarily large gaps in time between adjacent statistics objects in the array.

## See Also

### Accessing Statistics Collections

- [statisticsForDate:](statistics%28for_%29.md): Returns the statistics object for the time interval that contains the provided date.
- [enumerateStatisticsFromDate:toDate:withBlock:](enumeratestatistics%28from_to_with_%29.md): Enumerates the statistics objects for all the time intervals from the start date until the end date.
