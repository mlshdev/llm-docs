> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/totaldistance](https://developer.apple.com/documentation/healthkit/hkworkout/totaldistance)

# totalDistance (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The total distance traveled during the workout.

> Use [allStatistics](allstatistics.md) or [statistics(for:)](statistics%28for_%29.md)  instead.

## Declaration

```swift
var totalDistance: HKQuantity? { get }
```

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)

<a id="Discussion"></a>

## Discussion

This property contains a quantity using length units, or `nil`.

> **Note**

>  Provide a total distance value whenever the distance traveled is relevant to the workout type. In addition, add distance samples to a workout using the [add(\_:to:completion:)](../hkhealthstore/add%28__to_completion_%29.md) method. These samples should sum up to the total distance, while providing detailed information about how the intensity changes over the duration of the workout.

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statistics(for:)](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

# totalDistance (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The total distance traveled during the workout.

> Use [allStatistics](allstatistics.md) or [statisticsForType:](statistics%28for_%29.md)  instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) HKQuantity * totalDistance;
```

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)

<a id="Discussion"></a>

## Discussion

This property contains a quantity using length units, or `nil`.

> **Note**

>  Provide a total distance value whenever the distance traveled is relevant to the workout type. In addition, add distance samples to a workout using the [addSamples:toWorkout:completion:](../hkhealthstore/add%28__to_completion_%29.md) method. These samples should sum up to the total distance, while providing detailed information about how the intensity changes over the duration of the workout.

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statisticsForType:](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.
