> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/maximumquantity(for:)](https://developer.apple.com/documentation/healthkit/hkstatistics/maximumquantity(for:))

# maximumQuantity(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the maximum value from all the samples that match the query and that were created by the specified source.

## Declaration

```swift
func maximumQuantity(for source: HKSource) -> HKQuantity?
```

## Parameters

- `source`: A data source from the statistics object’s [sources](sources.md) array.

<a id="return-value"></a>

## Return Value

If both the [discreteMax](../hkstatisticsoptions/discretemax.md) option and the [separateBySource](../hkstatisticsoptions/separatebysource.md) option were set, this method returns a quantity object. This object contains the maximum value from all the samples that match the query and were created by the specified source. If the statistics options were not both set, this method returns `nil`.

## See Also

### Related Documentation

- [endDate](enddate.md): The end of the time period included in these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.
- [startDate](startdate.md): The start of the time period included in these statistics.

### Getting Statistics Data

- [averageQuantity()](averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantity(for:)](averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity()](maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [minimumQuantity()](minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantity(for:)](minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity()](sumquantity%28%29.md): Returns the sum of all the samples that match the query.
- [sumQuantity(for:)](sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration()](duration%28%29.md): Returns the total duration covering all the samples that match the query.
- [duration(for:)](duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.

# maximumQuantityForSource: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the maximum value from all the samples that match the query and that were created by the specified source.

## Declaration

```objectivec
- (HKQuantity *) maximumQuantityForSource:(HKSource *) source;
```

## Parameters

- `source`: A data source from the statistics object’s [sources](sources.md) array.

<a id="return-value"></a>

## Return Value

If both the [HKStatisticsOptionDiscreteMax](../hkstatisticsoptions/discretemax.md) option and the [HKStatisticsOptionSeparateBySource](../hkstatisticsoptions/separatebysource.md) option were set, this method returns a quantity object. This object contains the maximum value from all the samples that match the query and were created by the specified source. If the statistics options were not both set, this method returns `nil`.

## See Also

### Related Documentation

- [endDate](enddate.md): The end of the time period included in these statistics.
- [sources](sources.md): An array containing all the sources contributing to these statistics.
- [startDate](startdate.md): The start of the time period included in these statistics.

### Getting Statistics Data

- [averageQuantity](averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantityForSource:](averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity](maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [minimumQuantity](minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantityForSource:](minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity](sumquantity%28%29.md): Returns the sum of all the samples that match the query.
- [sumQuantityForSource:](sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration](duration%28%29.md): Returns the total duration covering all the samples that match the query.
- [durationForSource:](duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.
