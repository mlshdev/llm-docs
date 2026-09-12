> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics/mostrecentquantity()](https://developer.apple.com/documentation/healthkit/hkstatistics/mostrecentquantity())

# mostRecentQuantity() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the most recent value from all the samples that match the query.

## Declaration

```swift
func mostRecentQuantity() -> HKQuantity?
```

## See Also

### Related Documentation

- [discreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantity(for:)](mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval()](mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateInterval(for:)](mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.

# mostRecentQuantity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the most recent value from all the samples that match the query.

## Declaration

```objectivec
- (HKQuantity *) mostRecentQuantity;
```

## See Also

### Related Documentation

- [HKStatisticsOptionDiscreteMostRecent](../hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Getting the Most Recent Quantity

- [mostRecentQuantityForSource:](mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval](mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateIntervalForSource:](mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.
