> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollection/sources()](https://developer.apple.com/documentation/healthkit/hkstatisticscollection/sources())

# sources() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a set containing all the sources that had samples matched by the statistics collection query.

## Declaration

```swift
func sources() -> Set<HKSource>
```

<a id="return-value"></a>

## Return Value

A set of sources if the [separateBySource](../hkstatisticsoptions/separatebysource.md) option was specified; otherwise, it returns `nil`.

<a id="Discussion"></a>

## Discussion

If the [separateBySource](../hkstatisticsoptions/separatebysource.md) option was set, each of the statistics objects returned by the statistics collection also has a [sources](../hkstatistics/sources.md) array. The statistic object’s array should contain a subset of the sources returned by this method. Specifically, it contains only those sources that contributed samples to that particular statistics object. You can use the source objects in these arrays to request source-specific statistical data.

## See Also

### Related Documentation

- [sources](../hkstatistics/sources.md): An array containing all the sources contributing to these statistics.
- [averageQuantity(for:)](../hkstatistics/averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [sumQuantity(for:)](../hkstatistics/sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [minimumQuantity(for:)](../hkstatistics/minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity(for:)](../hkstatistics/maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.

# sources (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a set containing all the sources that had samples matched by the statistics collection query.

## Declaration

```objectivec
- (NSSet<HKSource *> *) sources;
```

<a id="return-value"></a>

## Return Value

A set of sources if the [HKStatisticsOptionSeparateBySource](../hkstatisticsoptions/separatebysource.md) option was specified; otherwise, it returns `nil`.

<a id="Discussion"></a>

## Discussion

If the [HKStatisticsOptionSeparateBySource](../hkstatisticsoptions/separatebysource.md) option was set, each of the statistics objects returned by the statistics collection also has a [sources](../hkstatistics/sources.md) array. The statistic object’s array should contain a subset of the sources returned by this method. Specifically, it contains only those sources that contributed samples to that particular statistics object. You can use the source objects in these arrays to request source-specific statistical data.

## See Also

### Related Documentation

- [sources](../hkstatistics/sources.md): An array containing all the sources contributing to these statistics.
- [averageQuantityForSource:](../hkstatistics/averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [sumQuantityForSource:](../hkstatistics/sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [minimumQuantityForSource:](../hkstatistics/minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [maximumQuantityForSource:](../hkstatistics/maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
