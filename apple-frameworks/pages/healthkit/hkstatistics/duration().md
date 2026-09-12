> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/duration()](https://developer.apple.com/documentation/healthkit/hkstatistics/duration())

# duration() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the total duration covering all the samples that match the query.

## Declaration

```swift
func duration() -> HKQuantity?
```

<a id="Discussion"></a>

## Discussion

If you set the [duration](../hkstatisticsoptions/duration.md) option, this method returns a quantity object containing total duration covering all the samples that match the query; otherwise, it returns `nil`.

## See Also

### Getting Statistics Data

- [averageQuantity()](averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantity(for:)](averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity()](maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [maximumQuantity(for:)](maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
- [minimumQuantity()](minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantity(for:)](minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity()](sumquantity%28%29.md): Returns the sum of all the samples that match the query.
- [sumQuantity(for:)](sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration(for:)](duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.

# duration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the total duration covering all the samples that match the query.

## Declaration

```objectivec
- (HKQuantity *) duration;
```

<a id="Discussion"></a>

## Discussion

If you set the [HKStatisticsOptionDuration](../hkstatisticsoptions/duration.md) option, this method returns a quantity object containing total duration covering all the samples that match the query; otherwise, it returns `nil`.

## See Also

### Getting Statistics Data

- [averageQuantity](averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantityForSource:](averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity](maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [maximumQuantityForSource:](maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
- [minimumQuantity](minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantityForSource:](minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity](sumquantity%28%29.md): Returns the sum of all the samples that match the query.
- [sumQuantityForSource:](sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [durationForSource:](duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.
