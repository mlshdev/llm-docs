> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutequery](https://developer.apple.com/documentation/healthkit/hkworkoutroutequery)

# HKWorkoutRouteQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query to access the location data stored in a workout route.

## Declaration

```swift
class HKWorkoutRouteQuery
```

## Mentioned In

- [Reading route data](reading-route-data.md)

<a id="overview"></a>

## Overview

Use a workout route query to access the location data associated with an [HKWorkoutRoute](hkworkoutroute.md). Because a route sample can include a large number of [CLLocation](../corelocation/cllocation.md) objects, the query asynchronously returns the locations in batches. For detailed instructions, see `Reading Route Data`.

## Topics

### Creating route queries

- [init(route:dataHandler:)](hkworkoutroutequery/init%28route_datahandler_%29.md): Creates a new query to access the location data associated with a workout route.
- [init(route:dateInterval:dataHandler:)](hkworkoutroutequery/init%28route_dateinterval_datahandler_%29.md): Creates a new query to access the location data associated with a workout route during the specified date interval.

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
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md): A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)

# HKWorkoutRouteQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A query to access the location data stored in a workout route.

## Declaration

```objectivec
@interface HKWorkoutRouteQuery : HKQuery
```

## Mentioned In

- [Reading route data](reading-route-data.md)

<a id="overview"></a>

## Overview

Use a workout route query to access the location data associated with an [HKWorkoutRoute](hkworkoutroute.md). Because a route sample can include a large number of [CLLocation](../corelocation/cllocation.md) objects, the query asynchronously returns the locations in batches. For detailed instructions, see `Reading Route Data`.

## Topics

### Creating route queries

- [initWithRoute:dataHandler:](hkworkoutroutequery/init%28route_datahandler_%29.md): Creates a new query to access the location data associated with a workout route.
- [initWithRoute:dateInterval:dataHandler:](hkworkoutroutequery/init%28route_dateinterval_datahandler_%29.md): Creates a new query to access the location data associated with a workout route during the specified date interval.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Series queries

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
