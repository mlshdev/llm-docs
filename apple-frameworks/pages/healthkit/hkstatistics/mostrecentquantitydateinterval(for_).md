> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/mostrecentquantitydateinterval(for:)](https://developer.apple.com/documentation/healthkit/hkstatistics/mostrecentquantitydateinterval(for:))

# mostRecentQuantityDateInterval(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the date interval of the most recent sample that matches the query and was created by the specified source.

## Declaration

```swift
func mostRecentQuantityDateInterval(for source: HKSource) -> DateInterval?
```

## See Also

### Related Documentation

- [discreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity()](mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantity(for:)](mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval()](mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.

# mostRecentQuantityDateIntervalForSource: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the date interval of the most recent sample that matches the query and was created by the specified source.

## Declaration

```objectivec
- (NSDateInterval *) mostRecentQuantityDateIntervalForSource:(HKSource *) source;
```

## See Also

### Related Documentation

- [HKStatisticsOptionDiscreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity](mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantityForSource:](mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval](mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
