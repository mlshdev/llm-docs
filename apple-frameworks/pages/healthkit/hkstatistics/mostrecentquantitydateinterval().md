> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/mostrecentquantitydateinterval()](https://developer.apple.com/documentation/healthkit/hkstatistics/mostrecentquantitydateinterval())

# mostRecentQuantityDateInterval() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the date interval of the most recent sample that matches the query.

## Declaration

```swift
func mostRecentQuantityDateInterval() -> DateInterval?
```

## See Also

### Related Documentation

- [discreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity()](mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantity(for:)](mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval(for:)](mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.

# mostRecentQuantityDateInterval (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the date interval of the most recent sample that matches the query.

## Declaration

```objectivec
- (NSDateInterval *) mostRecentQuantityDateInterval;
```

## See Also

### Related Documentation

- [HKStatisticsOptionDiscreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity](mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantityForSource:](mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateIntervalForSource:](mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.
