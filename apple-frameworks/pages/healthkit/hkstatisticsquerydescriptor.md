> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsquerydescriptor](https://developer.apple.com/documentation/healthkit/hkstatisticsquerydescriptor)

# HKStatisticsQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query descriptor that calculates the minimum, maximum, average, or sum over a set of samples from the HealthKit store.

## Declaration

```swift
struct HKStatisticsQueryDescriptor
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use the [HKStatisticsQueryDescriptor](hkstatisticsquerydescriptor.md) to perform calculations over sets of samples currently saved in the HealthKit store.

```swift
// Create a predicate for today's samples.
let calendar = Calendar(identifier: .gregorian)
let startDate = calendar.startOfDay(for: Date())
let endDate = calendar.date(byAdding: .day, value: 1, to: startDate)
let today = HKQuery.predicateForSamples(withStart: startDate, end: endDate)

// Create the query descriptor.
let stepType = HKQuantityType(.stepCount)
let stepsToday = HKSamplePredicate.quantitySample(type: stepType, predicate:today)
let sumOfStepsQuery = HKStatisticsQueryDescriptor(predicate: stepsToday, options: .cumulativeSum)

// Run the query.
let stepCount = try await sumOfStepsQuery.result(for: store)?
    .sumQuantity()?
    .doubleValue(for: HKUnit.count())

// Use the step count here.
```

## Topics

### Creating Query Descriptors

- [init(predicate:options:)](hkstatisticsquerydescriptor/init%28predicate_options_%29.md): Creates a statistics query descriptor.

### Running Queries

- [result(for:)](hkstatisticsquerydescriptor/result%28for_%29.md): Runs a one-shot query and asynchronously returns a snapshot of the current matching results.

### Accessing Query Properties

- [predicate](hkstatisticsquerydescriptor/predicate.md): A predicate that defines the set of data that the query uses to calculate the statistics.
- [options](hkstatisticsquerydescriptor/options.md): A list of options that define the type of statistical calculations performed and the way in which HealthKit merges data from multiple sources.

### Default Implementations

- [HKAsyncQuery Implementations](hkstatisticsquerydescriptor/hkasyncquery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQueryDescriptor](hkstatisticscollectionquerydescriptor.md): A query descriptor that gathers a collection of statistics calculated over a series of fixed-length time intervals.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.
