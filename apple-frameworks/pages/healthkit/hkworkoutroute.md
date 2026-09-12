> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroute](https://developer.apple.com/documentation/healthkit/hkworkoutroute)

# HKWorkoutRoute (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A sample that contains a workout’s route data.

## Declaration

```swift
class HKWorkoutRoute
```

## Mentioned In

- [Reading route data](reading-route-data.md)
- [Creating a workout route](creating-a-workout-route.md)

<a id="overview"></a>

## Overview

When creating a workout route, you do not instantiate the [HKWorkoutRoute](hkworkoutroute.md) objects directly. Instead, create a [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md) object, and provide it with location data throughout the workout. After the workout ends, call the route builder’s  [finishRoute(with:metadata:completion:)](hkworkoutroutebuilder/finishroute%28with_metadata_completion_%29.md) method to create the route. For detailed instructions, see [Creating a workout route](creating-a-workout-route.md).

The route’s location data is stored as an array of [CLLocation](../corelocation/cllocation.md) objects. Because the route may contain a large number of location objects, use a [HKWorkoutRouteQuery](hkworkoutroutequery.md) object to asynchronously read the location data from the HealthKit store in batches. For more information, see [Reading route data](reading-route-data.md).

<a id="Using-workout-routes"></a>

### Using workout routes

As with many HealthKit classes, don’t subclass the [HKWorkoutRoute](hkworkoutroute.md) class. You can extend [HKWorkoutRoute](hkworkoutroute.md) objects by adding custom metadata keys and values to the metadata dictionary when the object is created.

## Relationships

### Inherits From

- [HKSeriesSample](hkseriessample.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Route data

- [Creating a workout route](creating-a-workout-route.md): Record the user’s route during a workout.
- [Reading route data](reading-route-data.md): Access the user’s route for a workout.
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.
- [HKSeriesBuilder](hkseriesbuilder.md): An abstract base class for building series samples.
- [HKSeriesSample](hkseriessample.md): An abstract base class that defines samples that contain a series of items.

# HKWorkoutRoute (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A sample that contains a workout’s route data.

## Declaration

```objectivec
@interface HKWorkoutRoute : HKSeriesSample
```

## Mentioned In

- [Reading route data](reading-route-data.md)
- [Creating a workout route](creating-a-workout-route.md)

<a id="overview"></a>

## Overview

When creating a workout route, you do not instantiate the [HKWorkoutRoute](hkworkoutroute.md) objects directly. Instead, create a [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md) object, and provide it with location data throughout the workout. After the workout ends, call the route builder’s  [finishRouteWithWorkout:metadata:completion:](hkworkoutroutebuilder/finishroute%28with_metadata_completion_%29.md) method to create the route. For detailed instructions, see [Creating a workout route](creating-a-workout-route.md).

The route’s location data is stored as an array of [CLLocation](../corelocation/cllocation.md) objects. Because the route may contain a large number of location objects, use a [HKWorkoutRouteQuery](hkworkoutroutequery.md) object to asynchronously read the location data from the HealthKit store in batches. For more information, see [Reading route data](reading-route-data.md).

<a id="Using-workout-routes"></a>

### Using workout routes

As with many HealthKit classes, don’t subclass the [HKWorkoutRoute](hkworkoutroute.md) class. You can extend [HKWorkoutRoute](hkworkoutroute.md) objects by adding custom metadata keys and values to the metadata dictionary when the object is created.

## Relationships

### Inherits From

- [HKSeriesSample](hkseriessample.md)

## See Also

### Route data

- [Creating a workout route](creating-a-workout-route.md): Record the user’s route during a workout.
- [Reading route data](reading-route-data.md): Access the user’s route for a workout.
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.
- [HKSeriesBuilder](hkseriesbuilder.md): An abstract base class for building series samples.
- [HKSeriesSample](hkseriessample.md): An abstract base class that defines samples that contain a series of items.
