> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/sumquantity()](https://developer.apple.com/documentation/healthkit/hkstatistics/sumquantity())

# sumQuantity() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the sum of all the samples that match the query.

## Declaration

```swift
func sumQuantity() -> HKQuantity?
```

<a id="return-value"></a>

## Return Value

If the [cumulativeSum](../hkstatisticsoptions/cumulativesum.md) option was set, this method returns a quantity object containing the sum of all the samples matching the query; otherwise, it returns `nil`.

## Mentioned In

- [Executing Statistics Collection Queries](../executing-statistics-collection-queries.md)

## See Also

### Related Documentation

- [endDate](enddate.md): The end of the time period included in these statistics.
- [startDate](startdate.md): The start of the time period included in these statistics.

### Getting Statistics Data

- [averageQuantity()](averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantity(for:)](averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity()](maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [maximumQuantity(for:)](maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
- [minimumQuantity()](minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantity(for:)](minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity(for:)](sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration()](duration%28%29.md): Returns the total duration covering all the samples that match the query.
- [duration(for:)](duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.

# sumQuantity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the sum of all the samples that match the query.

## Declaration

```objectivec
- (HKQuantity *) sumQuantity;
```

<a id="return-value"></a>

## Return Value

If the [HKStatisticsOptionCumulativeSum](../hkstatisticsoptions/cumulativesum.md) option was set, this method returns a quantity object containing the sum of all the samples matching the query; otherwise, it returns `nil`.

## Mentioned In

- [Executing Statistics Collection Queries](../executing-statistics-collection-queries.md)

## See Also

### Related Documentation

- [endDate](enddate.md): The end of the time period included in these statistics.
- [startDate](startdate.md): The start of the time period included in these statistics.

### Getting Statistics Data

- [averageQuantity](averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantityForSource:](averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity](maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [maximumQuantityForSource:](maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
- [minimumQuantity](minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantityForSource:](minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantityForSource:](sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration](duration%28%29.md): Returns the total duration covering all the samples that match the query.
- [durationForSource:](duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.
