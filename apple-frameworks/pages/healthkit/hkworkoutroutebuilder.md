> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutebuilder](https://developer.apple.com/documentation/healthkit/hkworkoutroutebuilder)

# HKWorkoutRouteBuilder (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A builder object that incrementally constructs a workout route.

## Declaration

```swift
class HKWorkoutRouteBuilder
```

<a id="overview"></a>

## Overview

To create a workout route, use [seriesBuilder(for:)](hkworkoutbuilder/seriesbuilder%28for_%29.md) to instantiate a [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md), and provide it with location data throughout the workout. After the workout ends, call the builder’s [finishRoute(with:metadata:completion:)](hkworkoutroutebuilder/finishroute%28with_metadata_completion_%29.md) method to construct the route. Instantiating a [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md) directly is discouraged. For detailed instructions, see [Creating a workout route](creating-a-workout-route.md).

## Topics

### Creating the builder

- [seriesBuilder(for:)](hkworkoutbuilder/seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
- [init(healthStore:device:)](hkworkoutroutebuilder/init%28healthstore_device_%29.md): Creates and returns a new workout route builder.

### Building the route

- [finishRoute(with:metadata:completion:)](hkworkoutroutebuilder/finishroute%28with_metadata_completion_%29.md): Creates, saves, and associates the route with the provided workout.
- [insertRouteData(\_:completion:)](hkworkoutroutebuilder/insertroutedata%28__completion_%29.md): Adds route data to the builder.
- [addMetadata(\_:completion:)](hkworkoutroutebuilder/addmetadata%28__completion_%29.md): Adds metadata to the builder.

## Relationships

### Inherits From

- [HKSeriesBuilder](hkseriesbuilder.md)

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

### Route data

- [Creating a workout route](creating-a-workout-route.md): Record the user’s route during a workout.
- [Reading route data](reading-route-data.md): Access the user’s route for a workout.
- [HKWorkoutRoute](hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.
- [HKSeriesBuilder](hkseriesbuilder.md): An abstract base class for building series samples.
- [HKSeriesSample](hkseriessample.md): An abstract base class that defines samples that contain a series of items.

# HKWorkoutRouteBuilder (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A builder object that incrementally constructs a workout route.

## Declaration

```objectivec
@interface HKWorkoutRouteBuilder : HKSeriesBuilder
```

<a id="overview"></a>

## Overview

To create a workout route, use [seriesBuilderForType:](hkworkoutbuilder/seriesbuilder%28for_%29.md) to instantiate a [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md), and provide it with location data throughout the workout. After the workout ends, call the builder’s [finishRouteWithWorkout:metadata:completion:](hkworkoutroutebuilder/finishroute%28with_metadata_completion_%29.md) method to construct the route. Instantiating a [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md) directly is discouraged. For detailed instructions, see [Creating a workout route](creating-a-workout-route.md).

## Topics

### Creating the builder

- [seriesBuilderForType:](hkworkoutbuilder/seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
- [initWithHealthStore:device:](hkworkoutroutebuilder/init%28healthstore_device_%29.md): Creates and returns a new workout route builder.

### Building the route

- [finishRouteWithWorkout:metadata:completion:](hkworkoutroutebuilder/finishroute%28with_metadata_completion_%29.md): Creates, saves, and associates the route with the provided workout.
- [insertRouteData:completion:](hkworkoutroutebuilder/insertroutedata%28__completion_%29.md): Adds route data to the builder.
- [addMetadata:completion:](hkworkoutroutebuilder/addmetadata%28__completion_%29.md): Adds metadata to the builder.

## Relationships

### Inherits From

- [HKSeriesBuilder](hkseriesbuilder.md)

## See Also

### Route data

- [Creating a workout route](creating-a-workout-route.md): Record the user’s route during a workout.
- [Reading route data](reading-route-data.md): Access the user’s route for a workout.
- [HKWorkoutRoute](hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.
- [HKSeriesBuilder](hkseriesbuilder.md): An abstract base class for building series samples.
- [HKSeriesSample](hkseriessample.md): An abstract base class that defines samples that contain a series of items.
