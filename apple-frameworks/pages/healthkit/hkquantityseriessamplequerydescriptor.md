> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor)

# HKQuantitySeriesSampleQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that reads the series data associated with quantity samples using Swift concurrency.

## Declaration

```swift
struct HKQuantitySeriesSampleQueryDescriptor
```

<a id="overview"></a>

## Overview

Use [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md) to read the series data included in quantity samples. Apps can save any quantity data as a series using the [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md) class; however, series data typically comes from high-frequency data saved during a workout. Any [HKQuantitySample](hkquantitysample.md) that has a [count](hkquantitysample/count.md) greater than `1` contains series data.

> **Important**

>  Only use this query when you need direct access to the high-frequency series data, for example when visualizing the raw data or when exporting objects from the HealthKit store. For most common calculations, consider using a statistical query instead. Statistical queries correctly handle quantity data, whether the samples represent a single quantity or a series.

To read the individual data entries, create a predicate that identifies the sample type and limits the results to the desired data. For example, to read the series for a particular sample object, include a [predicateForObject(with:)](hkquery/predicateforobject%28with_%29.md) predicate. However, if you’re reading high-frequency data during a workout, you may want to include a [predicateForSamples(withStart:end:options:)](hkquery/predicateforsamples%28withstart_end_options_%29.md) predicate that returns matching series data based on the workout’s time period instead.

```swift
// Create the predicate for the data.
let heartRate = HKQuantityType(.heartRate)
let objectPredicate = HKQuery.predicateForObject(with: myHeartRateSample.uuid)
let predicate = HKSamplePredicate.quantitySample(type: heartRate,
                                                 predicate: objectPredicate)

// Create the source descriptor.
let seriesDescriptor =
HKQuantitySeriesSampleQueryDescriptor(predicate: predicate,
                                      options: .orderByQuantitySampleStartDate)

// Get the AsyncSequence that returns the individual data entries.
let series = seriesDescriptor.results(for: store)

// Access each data entry in the series
for try await entry in series {
    
    // Process results here.
    let steps = entry.quantity.doubleValue(for: .count())
    print(steps)
}
```

While this method returns an [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), unlike the long-running queries, this sequence has a finite size. Iterating over the sequence asynchronously returns data entries, automatically terminating after you receive all the data.

## Topics

### Creating Series Query Descriptors

- [init(predicate:options:)](hkquantityseriessamplequerydescriptor/init%28predicate_options_%29.md): Creates a quantity series query descriptor.
- [HKQuantitySeriesSampleQueryDescriptor.Options](hkquantityseriessamplequerydescriptor/options-swift.struct.md): Options used when querying series data.

### Running Queries

- [results(for:)](hkquantityseriessamplequerydescriptor/results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of matching series samples.
- [HKQuantitySeriesSampleQueryDescriptor.Results](hkquantityseriessamplequerydescriptor/results.md): An asynchronous sequence that emits data from the quantity series query.
- [HKQuantitySeriesSampleQueryDescriptor.Result](hkquantityseriessamplequerydescriptor/result.md): A set of results from a quantity series sample descriptor.

### Accessing Query Properties

- [options](hkquantityseriessamplequerydescriptor/options-swift.property.md): A set of options for the query. For a list of possible values, see [HKQuantitySeriesSampleQueryDescriptor.Options](hkquantityseriessamplequerydescriptor/options-swift.struct.md).
- [predicate](hkquantityseriessamplequerydescriptor/predicate.md): A predicate that defines the set of series samples that the query returns.

### Default Implementations

- [HKAsyncSequenceQuery Implementations](hkquantityseriessamplequerydescriptor/hkasyncsequencequery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncSequenceQuery](hkasyncsequencequery.md)

## See Also

### Series queries

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md): A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
