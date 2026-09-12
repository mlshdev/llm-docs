> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsoptions/discretemostrecent](https://developer.apple.com/documentation/healthkit/hkstatisticsoptions/discretemostrecent)

# discreteMostRecent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

An option indicating that the system returns the most recent quantity from the matching samples.

> Use [mostRecent](mostrecent.md) instead.

## Declaration

```swift
static var discreteMostRecent: HKStatisticsOptions { get }
```

## See Also

### Related Documentation

- [mostRecentQuantity()](../hkstatistics/mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantity(for:)](../hkstatistics/mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval()](../hkstatistics/mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateInterval(for:)](../hkstatistics/mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.

# HKStatisticsOptionDiscreteMostRecent (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

An option indicating that the system returns the most recent quantity from the matching samples.

> Use [HKStatisticsOptionMostRecent](mostrecent.md) instead.

## Declaration

```objectivec
HKStatisticsOptionDiscreteMostRecent
```

## See Also

### Related Documentation

- [mostRecentQuantity](../hkstatistics/mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantityForSource:](../hkstatistics/mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval](../hkstatistics/mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateIntervalForSource:](../hkstatistics/mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.
