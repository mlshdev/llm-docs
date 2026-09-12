> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiontype](https://developer.apple.com/documentation/healthkit/hkworkoutsessiontype)

# HKWorkoutSessionType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

The type of session.

## Declaration

```swift
enum HKWorkoutSessionType
```

## Topics

### Types

- [HKWorkoutSessionType.mirrored](hkworkoutsessiontype/mirrored.md): A mirrored session, running on the companion iOS device.
- [HKWorkoutSessionType.primary](hkworkoutsessiontype/primary.md): A primary session running on watchOS.

### Initializers

- [init(rawValue:)](hkworkoutsessiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.

# HKWorkoutSessionType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

The type of session.

## Declaration

```objectivec
enum HKWorkoutSessionType : NSInteger;
```

## Topics

### Types

- [HKWorkoutSessionTypeMirrored](hkworkoutsessiontype/mirrored.md): A mirrored session, running on the companion iOS device.
- [HKWorkoutSessionTypePrimary](hkworkoutsessiontype/primary.md): A primary session running on watchOS.

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.
