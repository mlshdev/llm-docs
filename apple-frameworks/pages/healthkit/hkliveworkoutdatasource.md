> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutdatasource](https://developer.apple.com/documentation/healthkit/hkliveworkoutdatasource)

# HKLiveWorkoutDataSource (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

A data source that automatically provides live data from an active workout session.

## Declaration

```swift
class HKLiveWorkoutDataSource
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)

## Topics

### Creating a live data source

- [init(healthStore:workoutConfiguration:)](hkliveworkoutdatasource/init%28healthstore_workoutconfiguration_%29.md): Creates a new data source based on the provided workout configuration.
- [typesToCollect](hkliveworkoutdatasource/typestocollect.md): The quantity type samples that the data source automatically sends to the workout builder.

### Calculating statistics

- [enableCollection(for:predicate:)](hkliveworkoutdatasource/enablecollection%28for_predicate_%29.md): Begins automatically calculating statistics for samples that match the quantity type and predicate.
- [disableCollection(for:)](hkliveworkoutdatasource/disablecollection%28for_%29.md): Stops automatically calculating statistics for the quantity type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.

# HKLiveWorkoutDataSource (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

A data source that automatically provides live data from an active workout session.

## Declaration

```objectivec
@interface HKLiveWorkoutDataSource : NSObject
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)

## Topics

### Creating a live data source

- [initWithHealthStore:workoutConfiguration:](hkliveworkoutdatasource/init%28healthstore_workoutconfiguration_%29.md): Creates a new data source based on the provided workout configuration.
- [typesToCollect](hkliveworkoutdatasource/typestocollect.md): The quantity type samples that the data source automatically sends to the workout builder.

### Calculating statistics

- [enableCollectionForType:predicate:](hkliveworkoutdatasource/enablecollection%28for_predicate_%29.md): Begins automatically calculating statistics for samples that match the quantity type and predicate.
- [disableCollectionForType:](hkliveworkoutdatasource/disablecollection%28for_%29.md): Stops automatically calculating statistics for the quantity type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKWorkoutSessionState](hkworkoutsessionstate.md): A workout session’s state.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
