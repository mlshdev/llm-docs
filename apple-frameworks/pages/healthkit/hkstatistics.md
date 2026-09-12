> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatistics](https://developer.apple.com/documentation/healthkit/hkstatistics)

# HKStatistics (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.

## Declaration

```swift
class HKStatistics
```

<a id="overview"></a>

## Overview

HealthKit creates statistic objects using either a statistics query or a statistics collection query. For the statistics query, it performs the specified calculations over all the samples that match the query. For the statistics collection query, it partitions the matching samples into a set of time intervals and performs the calculations over each interval separately.

By default, these queries automatically merge the data from all of your data sources before performing the calculations. If you want to merge the data yourself, you can set the [separateBySource](hkstatisticsoptions/separatebysource.md) option. You can then request the statistical data for each source separately.

When requesting data from a statistics object, your request must match the options you used when creating the query. For example, if you create a query using the [discreteAverage](hkstatisticsoptions/discreteaverage.md) option, you must access the results using the [averageQuantity()](hkstatistics/averagequantity%28%29.md) method.

For more information on calculating statistical data, see [HKStatisticsQuery](hkstatisticsquery.md) Class Reference. To calculate the statistics over a series of time intervals, see the [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md) Class Reference.

## Topics

### Getting Property Data

- [startDate](hkstatistics/startdate.md): The start of the time period included in these statistics.
- [endDate](hkstatistics/enddate.md): The end of the time period included in these statistics.
- [quantityType](hkstatistics/quantitytype.md): The quantity type of the samples used to calculate these statistics.
- [sources](hkstatistics/sources.md): An array containing all the sources contributing to these statistics.

### Getting Statistics Data

- [averageQuantity()](hkstatistics/averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantity(for:)](hkstatistics/averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity()](hkstatistics/maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [maximumQuantity(for:)](hkstatistics/maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
- [minimumQuantity()](hkstatistics/minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantity(for:)](hkstatistics/minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity()](hkstatistics/sumquantity%28%29.md): Returns the sum of all the samples that match the query.
- [sumQuantity(for:)](hkstatistics/sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration()](hkstatistics/duration%28%29.md): Returns the total duration covering all the samples that match the query.
- [duration(for:)](hkstatistics/duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.

### Getting the Most Recent Quantity

- [mostRecentQuantity()](hkstatistics/mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantity(for:)](hkstatistics/mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval()](hkstatistics/mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateInterval(for:)](hkstatistics/mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.

### Initializers

- [init(coder:)](hkstatistics/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
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
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.

# HKStatistics (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.

## Declaration

```objectivec
@interface HKStatistics : NSObject
```

<a id="overview"></a>

## Overview

HealthKit creates statistic objects using either a statistics query or a statistics collection query. For the statistics query, it performs the specified calculations over all the samples that match the query. For the statistics collection query, it partitions the matching samples into a set of time intervals and performs the calculations over each interval separately.

By default, these queries automatically merge the data from all of your data sources before performing the calculations. If you want to merge the data yourself, you can set the [HKStatisticsOptionSeparateBySource](hkstatisticsoptions/separatebysource.md) option. You can then request the statistical data for each source separately.

When requesting data from a statistics object, your request must match the options you used when creating the query. For example, if you create a query using the [HKStatisticsOptionDiscreteAverage](hkstatisticsoptions/discreteaverage.md) option, you must access the results using the [averageQuantity](hkstatistics/averagequantity%28%29.md) method.

For more information on calculating statistical data, see [HKStatisticsQuery](hkstatisticsquery.md) Class Reference. To calculate the statistics over a series of time intervals, see the [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md) Class Reference.

## Topics

### Getting Property Data

- [startDate](hkstatistics/startdate.md): The start of the time period included in these statistics.
- [endDate](hkstatistics/enddate.md): The end of the time period included in these statistics.
- [quantityType](hkstatistics/quantitytype.md): The quantity type of the samples used to calculate these statistics.
- [sources](hkstatistics/sources.md): An array containing all the sources contributing to these statistics.

### Getting Statistics Data

- [averageQuantity](hkstatistics/averagequantity%28%29.md): Returns the average value from all the samples that match the query.
- [averageQuantityForSource:](hkstatistics/averagequantity%28for_%29.md): Returns the average value from all the samples that match the query and that were created by the specified source.
- [maximumQuantity](hkstatistics/maximumquantity%28%29.md): Returns the maximum value from all the samples that match the query.
- [maximumQuantityForSource:](hkstatistics/maximumquantity%28for_%29.md): Returns the maximum value from all the samples that match the query and that were created by the specified source.
- [minimumQuantity](hkstatistics/minimumquantity%28%29.md): Returns the minimum value from all the samples that match the query.
- [minimumQuantityForSource:](hkstatistics/minimumquantity%28for_%29.md): Returns the minimum value from all the samples that match the query and that were created by the specified source.
- [sumQuantity](hkstatistics/sumquantity%28%29.md): Returns the sum of all the samples that match the query.
- [sumQuantityForSource:](hkstatistics/sumquantity%28for_%29.md): Returns the sum of all the samples that match the query and that were created by the specified source.
- [duration](hkstatistics/duration%28%29.md): Returns the total duration covering all the samples that match the query.
- [durationForSource:](hkstatistics/duration%28for_%29.md): Returns the total duration covering all the samples created by the specified source that also match the query.

### Getting the Most Recent Quantity

- [mostRecentQuantity](hkstatistics/mostrecentquantity%28%29.md): Returns the most recent value from all the samples that match the query.
- [mostRecentQuantityForSource:](hkstatistics/mostrecentquantity%28for_%29.md): Returns the most recent value from all the samples that match the query and were created by the specified source.
- [mostRecentQuantityDateInterval](hkstatistics/mostrecentquantitydateinterval%28%29.md): Returns the date interval of the most recent sample that matches the query.
- [mostRecentQuantityDateIntervalForSource:](hkstatistics/mostrecentquantitydateinterval%28for_%29.md): Returns the date interval of the most recent sample that matches the query and was created by the specified source.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.
