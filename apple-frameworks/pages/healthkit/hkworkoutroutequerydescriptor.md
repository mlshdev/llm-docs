> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutequerydescriptor](https://developer.apple.com/documentation/healthkit/hkworkoutroutequerydescriptor)

# HKWorkoutRouteQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that reads the location data stored in a workout route using Swift concurrency.

## Declaration

```swift
struct HKWorkoutRouteQueryDescriptor
```

<a id="overview"></a>

## Overview

Use [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md) to access the individual [CLLocation](../corelocation/cllocation.md) objects stored in an [HKWorkoutRoute](hkworkoutroute.md) sample. To read the individual locations, create a workout route query descriptor using the desired route, and then call the descriptor’s [results(for:)](hkworkoutroutequerydescriptor/results%28for_%29.md) method.

```swift
// Create the descriptor.
let routeQueryDescriptor = HKWorkoutRouteQueryDescriptor(myRoute)

// Get the AsyncSequence that returns individual locations.
let locations = routeQueryDescriptor.results(for: store)

// Access each location.
for try await location in locations {
    
    // Process the results here.
    print(location.coordinate)
    print(location.timestamp)
}
```

While this method returns an [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), unlike the long-running queries, this sequence has a finite size. Iterating over the sequence asynchronously returns the route’s locations, automatically terminating after you receive all the locations.

## Topics

### Creating workout route query descriptors

- [init(\_:)](hkworkoutroutequerydescriptor/init%28__%29.md): Creates a query descriptor that reads locations from the provided workout route sample.

### Running queries

- [results(for:)](hkworkoutroutequerydescriptor/results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of data representing individual locations.
- [HKWorkoutRouteQueryDescriptor.Results](hkworkoutroutequerydescriptor/results.md): An asynchronous sequence that emits data about individual locations from a workout route sample.

### Accessing query properties

- [workoutRoute](hkworkoutroutequerydescriptor/workoutroute.md): A workout route sample that contains locations.

### Default Implementations

- [HKAsyncSequenceQuery Implementations](hkworkoutroutequerydescriptor/hkasyncsequencequery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncSequenceQuery](hkasyncsequencequery.md)

## See Also

### Series queries

- [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md): A query interface that reads the series data associated with quantity samples using Swift concurrency.
- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md): A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
