> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogramquery](https://developer.apple.com/documentation/healthkit/hkelectrocardiogramquery)

# HKElectrocardiogramQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query that returns the underlying voltage measurements for an electrocardiogram sample.

## Declaration

```swift
class HKElectrocardiogramQuery
```

<a id="overview"></a>

## Overview

Use the [HKElectrocardiogramQuery](hkelectrocardiogramquery.md) query to access the individual voltage measurements associated with an [HKElectrocardiogram](hkelectrocardiogram.md) sample.

```swift
// Create a query for the voltage measurements
let voltageQuery = HKElectrocardiogramQuery(ecgSample) { (query, result) in
    switch(result) {
    
    case .measurement(let measurement):
        if let voltageQuantity = measurement.quantity(for: .appleWatchSimilarToLeadI) {
            // Do something with the voltage quantity here.

        }
    
    case .done:
        // No more voltages. Finish processing the existing voltages.

    case .error(let error):
        // Handle the error here.

    }
}

// Execute the query.
healthStore.execute(voltageQuery)
```

The query calls the data handler once for each voltage measurement, passing a [HKElectrocardiogramQuery.Result.measurement(\_:)](hkelectrocardiogramquery/result/measurement%28__%29.md) instance that contains the voltage data. After it has sent all the voltage measurements, the query calls the data handler one last time, passing [HKElectrocardiogramQuery.Result.done](hkelectrocardiogramquery/result/done.md). If an error occurs, it stops collecting voltage data and passes [HKElectrocardiogramQuery.Result.error(\_:)](hkelectrocardiogramquery/result/error%28__%29.md) instead.

Electrocardiogram queries are immutable: You set query’s properties when you create it, and they don’t change.

## Topics

### Creating the Query

- [init(\_:dataHandler:)](hkelectrocardiogramquery/init%28__datahandler_%29.md): Creates a new electrocardiogram query object.

### Accessing the Results

- [HKElectrocardiogramQuery.Result](hkelectrocardiogramquery/result.md): Partial results for an electrocardiogram query.
- [init(electrocardiogram:dataHandler:)](hkelectrocardiogramquery/init%28electrocardiogram_datahandler_%29.md): Creates a new electrocardiogram query object.

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

### Series queries

- [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md): A query interface that reads the series data associated with quantity samples using Swift concurrency.
- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md): A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)

# HKElectrocardiogramQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A query that returns the underlying voltage measurements for an electrocardiogram sample.

## Declaration

```objectivec
@interface HKElectrocardiogramQuery : HKQuery
```

<a id="overview"></a>

## Overview

Use the [HKElectrocardiogramQuery](hkelectrocardiogramquery.md) query to access the individual voltage measurements associated with an [HKElectrocardiogram](hkelectrocardiogram.md) sample.

```swift
// Create a query for the voltage measurements
let voltageQuery = HKElectrocardiogramQuery(ecgSample) { (query, result) in
    switch(result) {
    
    case .measurement(let measurement):
        if let voltageQuantity = measurement.quantity(for: .appleWatchSimilarToLeadI) {
            // Do something with the voltage quantity here.

        }
    
    case .done:
        // No more voltages. Finish processing the existing voltages.

    case .error(let error):
        // Handle the error here.

    }
}

// Execute the query.
healthStore.execute(voltageQuery)
```

The query calls the data handler once for each voltage measurement, passing a [HKElectrocardiogramQuery.Result.measurement(\_:)](hkelectrocardiogramquery/result/measurement%28__%29.md) instance that contains the voltage data. After it has sent all the voltage measurements, the query calls the data handler one last time, passing [HKElectrocardiogramQuery.Result.done](hkelectrocardiogramquery/result/done.md). If an error occurs, it stops collecting voltage data and passes [HKElectrocardiogramQuery.Result.error(\_:)](hkelectrocardiogramquery/result/error%28__%29.md) instead.

Electrocardiogram queries are immutable: You set query’s properties when you create it, and they don’t change.

## Topics

### Accessing the Results

- [initWithElectrocardiogram:dataHandler:](hkelectrocardiogramquery/init%28electrocardiogram_datahandler_%29.md): Creates a new electrocardiogram query object.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Series queries

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
