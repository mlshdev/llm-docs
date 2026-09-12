> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesquery](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesquery)

# HKHeartbeatSeriesQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query that returns the heartbeat data contained in a heartbeat series sample.

## Declaration

```swift
class HKHeartbeatSeriesQuery
```

## Topics

### Creating a Heartbeat Series Query

- [init(heartbeatSeries:dataHandler:)](hkheartbeatseriesquery/init%28heartbeatseries_datahandler_%29.md): Creates a new heartbeat series query.

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
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)

# HKHeartbeatSeriesQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A query that returns the heartbeat data contained in a heartbeat series sample.

## Declaration

```objectivec
@interface HKHeartbeatSeriesQuery : HKQuery
```

## Topics

### Creating a Heartbeat Series Query

- [initWithHeartbeatSeries:dataHandler:](hkheartbeatseriesquery/init%28heartbeatseries_datahandler_%29.md): Creates a new heartbeat series query.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Series queries

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
