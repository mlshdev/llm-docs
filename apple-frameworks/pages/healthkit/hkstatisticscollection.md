> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollection](https://developer.apple.com/documentation/healthkit/hkstatisticscollection)

# HKStatisticsCollection (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages a collection of statistics, representing the results calculated over separate time intervals.

## Declaration

```swift
class HKStatisticsCollection
```

<a id="overview"></a>

## Overview

For more information on statistics objects, see [HKStatistics](hkstatistics.md). For more information on calculating statistics over consecutive time intervals, see [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md).

## Topics

### Accessing Statistics Collections

- [statistics()](hkstatisticscollection/statistics%28%29.md): Returns an array of statistics objects representing the populated time intervals covered by the statistics collection query.
- [statistics(for:)](hkstatisticscollection/statistics%28for_%29.md): Returns the statistics object for the time interval that contains the provided date.
- [enumerateStatistics(from:to:with:)](hkstatisticscollection/enumeratestatistics%28from_to_with_%29.md): Enumerates the statistics objects for all the time intervals from the start date until the end date.

### Getting Information About Statistics Collections

- [sources()](hkstatisticscollection/sources%28%29.md): Returns a set containing all the sources that had samples matched by the statistics collection query.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQueryDescriptor](hkstatisticsquerydescriptor.md): A query descriptor that calculates the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQueryDescriptor](hkstatisticscollectionquerydescriptor.md): A query descriptor that gathers a collection of statistics calculated over a series of fixed-length time intervals.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.

# HKStatisticsCollection (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages a collection of statistics, representing the results calculated over separate time intervals.

## Declaration

```objectivec
@interface HKStatisticsCollection : NSObject
```

<a id="overview"></a>

## Overview

For more information on statistics objects, see [HKStatistics](hkstatistics.md). For more information on calculating statistics over consecutive time intervals, see [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md).

## Topics

### Accessing Statistics Collections

- [statistics](hkstatisticscollection/statistics%28%29.md): Returns an array of statistics objects representing the populated time intervals covered by the statistics collection query.
- [statisticsForDate:](hkstatisticscollection/statistics%28for_%29.md): Returns the statistics object for the time interval that contains the provided date.
- [enumerateStatisticsFromDate:toDate:withBlock:](hkstatisticscollection/enumeratestatistics%28from_to_with_%29.md): Enumerates the statistics objects for all the time intervals from the start date until the end date.

### Getting Information About Statistics Collections

- [sources](hkstatisticscollection/sources%28%29.md): Returns a set containing all the sources that had samples matched by the statistics collection query.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.
