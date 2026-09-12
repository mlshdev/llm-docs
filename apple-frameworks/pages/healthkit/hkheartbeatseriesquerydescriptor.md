> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesquerydescriptor](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesquerydescriptor)

# HKHeartbeatSeriesQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.

## Declaration

```swift
struct HKHeartbeatSeriesQueryDescriptor
```

<a id="overview"></a>

## Overview

Use [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md) to read the heartbeat data included in a [HKHeartbeatSeriesSample](hkheartbeatseriessample.md). To read the individual heartbeats, create a heartbeat series query descriptor using the desired series sample, and then call the [results(for:)](hkheartbeatseriesquerydescriptor/results%28for_%29.md) method on the descriptor.

```swift
// Create the descriptor.
let heartbeatDescriptor = HKHeartbeatSeriesQueryDescriptor(myHeartbeatSample)

// Get the AsyncSequence that returns individual heartbeats.
let series = heartbeatDescriptor.results(for: store)

// Access the data for each haeartbeat.
for try await heartbeat in series {
    
    // Process the results here.
    print(heartbeat.precededByGap)
    print(heartbeat.timeIntervalSinceStart)
}
```

While this method returns an [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), unlike the long-running queries, this sequence has a finite size. Iterating over the sequence asynchronously returns heartbeat data, automatically terminating after you receive all the data.

## Topics

### Creating Heartbeat Series Query Descriptors

- [init(\_:)](hkheartbeatseriesquerydescriptor/init%28__%29.md): Creates a heartbeat series query descriptor.

### Running Queries

- [results(for:)](hkheartbeatseriesquerydescriptor/results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of data representing individual heartbeats.
- [HKHeartbeatSeriesQueryDescriptor.Results](hkheartbeatseriesquerydescriptor/results.md): An asynchronous sequence that emits data about individual heartbeats from a heartbeat series sample.
- [HKHeartbeatSeriesQueryDescriptor.Heartbeat](hkheartbeatseriesquerydescriptor/heartbeat.md): Data about an individual heartbeat.

### Accessing Query Properties

- [sample](hkheartbeatseriesquerydescriptor/sample.md): The sample containing the heartbeat series.

### Default Implementations

- [HKAsyncSequenceQuery Implementations](hkheartbeatseriesquerydescriptor/hkasyncsequencequery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncSequenceQuery](hkasyncsequencequery.md)

## See Also

### Series queries

- [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md): A query interface that reads the series data associated with quantity samples using Swift concurrency.
- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
