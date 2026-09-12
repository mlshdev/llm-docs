> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/mostrecentquantity(for:)](https://developer.apple.com/documentation/healthkit/hkstatistics/mostrecentquantity(for:))

# mostRecentQuantity(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the most recent value from all the samples that match the query and were created by the specified source.

## Declaration

```swift
func mostRecentQuantity(for source: HKSource) -> HKQuantity?
```

## See Also

### Related Documentation

- [discreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity()](mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantityDateInterval()](mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateInterval(for:)](mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.

# mostRecentQuantityForSource: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the most recent value from all the samples that match the query and were created by the specified source.

## Declaration

```objectivec
- (HKQuantity *) mostRecentQuantityForSource:(HKSource *) source;
```

## See Also

### Related Documentation

- [HKStatisticsOptionDiscreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity](mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantityDateInterval](mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateIntervalForSource:](mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.
