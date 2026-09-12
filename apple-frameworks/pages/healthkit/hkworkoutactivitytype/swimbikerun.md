> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivitytype/swimbikerun](https://developer.apple.com/documentation/healthkit/hkworkoutactivitytype/swimbikerun)

# HKWorkoutActivityType.swimBikeRun (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The constant for multisport activities like triathlons.

## Declaration

```swift
case swimBikeRun
```

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

Use this constant to create workouts that contain the [HKWorkoutActivityType.swimming](swimming.md), [HKWorkoutActivityType.cycling](cycling.md), and [HKWorkoutActivityType.running](running.md) activities. These activities can happen in any order. For more information, see [HKWorkoutActivity](../hkworkoutactivity.md). HealthKit provides optimized calorie calculations for this activity based on the data from Apple Watch’s sensors.

## See Also

### Multisport activities

- [HKWorkoutActivityType.transition](transition.md): A constant for the transition time between activities in a multisport workout.

# HKWorkoutActivityTypeSwimBikeRun (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The constant for multisport activities like triathlons.

## Declaration

```objectivec
HKWorkoutActivityTypeSwimBikeRun
```

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

Use this constant to create workouts that contain the [HKWorkoutActivityTypeSwimming](swimming.md), [HKWorkoutActivityTypeCycling](cycling.md), and [HKWorkoutActivityTypeRunning](running.md) activities. These activities can happen in any order. For more information, see [HKWorkoutActivity](../hkworkoutactivity.md). HealthKit provides optimized calorie calculations for this activity based on the data from Apple Watch’s sensors.

## See Also

### Multisport activities

- [HKWorkoutActivityTypeTransition](transition.md): A constant for the transition time between activities in a multisport workout.
