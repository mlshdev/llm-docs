> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequery](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequery)

# HKQuantitySeriesSampleQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A query that accesses the series data associated with a quantity sample.

## Declaration

```swift
class HKQuantitySeriesSampleQuery
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)

<a id="overview"></a>

## Overview

Use a series query to access the individual [HKQuantity](hkquantity.md) objects added to a sample using an [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md).

> **Important**

>  For many common calculations, consider using a statistical query instead. Statistical queries correctly handle quantity data, whether the samples represent a single quantity or a series.

## Topics

### Creating a Series Query

- [init(quantityType:predicate:quantityHandler:)](hkquantityseriessamplequery/init%28quantitytype_predicate_quantityhandler_%29.md): Creates a new query for a series of the specified quantity type.
- [includeSample](hkquantityseriessamplequery/includesample.md): A Boolean value that determines whether the query should return the series sample.
- [orderByQuantitySampleStartDate](hkquantityseriessamplequery/orderbyquantitysamplestartdate.md): A Boolean value that determines whether the query groups the results based on the quantity sample’s start date.

### Deprecated Mehtods

- [init(sample:quantityHandler:)](hkquantityseriessamplequery/init%28sample_quantityhandler_%29.md): Deprecated. Creates a new series query.

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

### Related Documentation

- [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md): A builder object for incrementally building a sample that contains multiple quantities.
- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.

### Series queries

- [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md): A query interface that reads the series data associated with quantity samples using Swift concurrency.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md): A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)

# HKQuantitySeriesSampleQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A query that accesses the series data associated with a quantity sample.

## Declaration

```objectivec
@interface HKQuantitySeriesSampleQuery : HKQuery
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)

<a id="overview"></a>

## Overview

Use a series query to access the individual [HKQuantity](hkquantity.md) objects added to a sample using an [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md).

> **Important**

>  For many common calculations, consider using a statistical query instead. Statistical queries correctly handle quantity data, whether the samples represent a single quantity or a series.

## Topics

### Creating a Series Query

- [initWithQuantityType:predicate:quantityHandler:](hkquantityseriessamplequery/init%28quantitytype_predicate_quantityhandler_%29.md): Creates a new query for a series of the specified quantity type.
- [includeSample](hkquantityseriessamplequery/includesample.md): A Boolean value that determines whether the query should return the series sample.
- [orderByQuantitySampleStartDate](hkquantityseriessamplequery/orderbyquantitysamplestartdate.md): A Boolean value that determines whether the query groups the results based on the quantity sample’s start date.

### Deprecated Mehtods

- [initWithSample:quantityHandler:](hkquantityseriessamplequery/init%28sample_quantityhandler_%29.md): Deprecated. Creates a new series query.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Related Documentation

- [HKQuantitySeriesSampleBuilder](hkquantityseriessamplebuilder.md): A builder object for incrementally building a sample that contains multiple quantities.
- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.

### Series queries

- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
