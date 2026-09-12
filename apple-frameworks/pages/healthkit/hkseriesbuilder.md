> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkseriesbuilder](https://developer.apple.com/documentation/healthkit/hkseriesbuilder)

# HKSeriesBuilder (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An abstract base class for building series samples.

## Declaration

```swift
class HKSeriesBuilder
```

<a id="overview"></a>

## Overview

Never instantiate [HKSeriesBuilder](hkseriesbuilder.md) objects directly. Instead, user one of the concrete subclasses (for example, the [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md) class).

## Topics

### Managing series generation

- [discard()](hkseriesbuilder/discard%28%29.md): Invalidates the builder and discards the collected data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md)
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md)

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
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
- [HKWorkoutRoute](hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.
- [HKSeriesSample](hkseriessample.md): An abstract base class that defines samples that contain a series of items.

# HKSeriesBuilder (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An abstract base class for building series samples.

## Declaration

```objectivec
@interface HKSeriesBuilder : NSObject
```

<a id="overview"></a>

## Overview

Never instantiate [HKSeriesBuilder](hkseriesbuilder.md) objects directly. Instead, user one of the concrete subclasses (for example, the [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md) class).

## Topics

### Managing series generation

- [discard](hkseriesbuilder/discard%28%29.md): Invalidates the builder and discards the collected data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md)
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md)

## See Also

### Route data

- [Creating a workout route](creating-a-workout-route.md): Record the user’s route during a workout.
- [Reading route data](reading-route-data.md): Access the user’s route for a workout.
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
- [HKWorkoutRoute](hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKWorkoutRouteTypeIdentifier](hkworkoutroutetypeidentifier.md): A series sample containing location data that defines the route the user took during a workout.
- [HKSeriesSample](hkseriessample.md): An abstract base class that defines samples that contain a series of items.
