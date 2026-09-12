> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquery](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquery)

# HKStatisticsCollectionQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query that performs multiple statistics queries over a series of fixed-length time intervals.

## Declaration

```swift
class HKStatisticsCollectionQuery
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md)

<a id="overview"></a>

## Overview

Statistics collection queries are often used to produce data for graphs and charts. For example, you might create a statistics collection query that calculates the total number of steps for each day or the average heart rate for each hour. Like observer queries, collection queries can also act as long-running queries, receiving updates when the HealthKit store’s content changes.

> **Important**

>  You can only use statistics collection queries with quantity samples. If you want to calculate statistics over workouts or correlation samples, you must perform the appropriate query and process the data yourself.

Statistics collection queries are mostly immutable. You can assign the query’s [initialResultsHandler](hkstatisticscollectionquery/initialresultshandler.md) and [statisticsUpdateHandler](hkstatisticscollectionquery/statisticsupdatehandler.md) properties after instantiating the object. You must set all other properties when you instantiate the object, and they can’t change.

For more information about statistics queries, see [HKStatisticsQuery](hkstatisticsquery.md).

## Topics

### Creating Statistics Collection Objects

- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [init(quantityType:quantitySamplePredicate:options:anchorDate:intervalComponents:)](hkstatisticscollectionquery/init%28quantitytype_quantitysamplepredicate_options_anchordate_intervalcomponents_%29.md): Initializes a statistics collection query to perform the specified calculations over a set of time intervals.

### Getting and Setting Results Handlers

- [initialResultsHandler](hkstatisticscollectionquery/initialresultshandler.md): The results handler for the query’s initial results.
- [statisticsUpdateHandler](hkstatisticscollectionquery/statisticsupdatehandler.md): The results handler for monitoring updates to the HealthKit store.

### Getting Property Data

- [anchorDate](hkstatisticscollectionquery/anchordate.md): The anchor date for the collection’s time intervals.
- [intervalComponents](hkstatisticscollectionquery/intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
- [options](hkstatisticscollectionquery/options.md): A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

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
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.

# HKStatisticsCollectionQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A query that performs multiple statistics queries over a series of fixed-length time intervals.

## Declaration

```objectivec
@interface HKStatisticsCollectionQuery : HKQuery
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md)

<a id="overview"></a>

## Overview

Statistics collection queries are often used to produce data for graphs and charts. For example, you might create a statistics collection query that calculates the total number of steps for each day or the average heart rate for each hour. Like observer queries, collection queries can also act as long-running queries, receiving updates when the HealthKit store’s content changes.

> **Important**

>  You can only use statistics collection queries with quantity samples. If you want to calculate statistics over workouts or correlation samples, you must perform the appropriate query and process the data yourself.

Statistics collection queries are mostly immutable. You can assign the query’s [initialResultsHandler](hkstatisticscollectionquery/initialresultshandler.md) and [statisticsUpdateHandler](hkstatisticscollectionquery/statisticsupdatehandler.md) properties after instantiating the object. You must set all other properties when you instantiate the object, and they can’t change.

For more information about statistics queries, see [HKStatisticsQuery](hkstatisticsquery.md).

## Topics

### Creating Statistics Collection Objects

- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [initWithQuantityType:quantitySamplePredicate:options:anchorDate:intervalComponents:](hkstatisticscollectionquery/init%28quantitytype_quantitysamplepredicate_options_anchordate_intervalcomponents_%29.md): Initializes a statistics collection query to perform the specified calculations over a set of time intervals.

### Getting and Setting Results Handlers

- [initialResultsHandler](hkstatisticscollectionquery/initialresultshandler.md): The results handler for the query’s initial results.
- [statisticsUpdateHandler](hkstatisticscollectionquery/statisticsupdatehandler.md): The results handler for monitoring updates to the HealthKit store.

### Getting Property Data

- [anchorDate](hkstatisticscollectionquery/anchordate.md): The anchor date for the collection’s time intervals.
- [intervalComponents](hkstatisticscollectionquery/intervalcomponents.md): The date components that define the time interval for each statistics object in the collection.
- [options](hkstatisticscollectionquery/options.md): A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.
