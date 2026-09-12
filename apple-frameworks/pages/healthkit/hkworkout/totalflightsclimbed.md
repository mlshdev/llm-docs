> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/totalflightsclimbed](https://developer.apple.com/documentation/healthkit/hkworkout/totalflightsclimbed)

# totalFlightsClimbed (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 4.0+ (deprecated in 11.0)

The total number of flights of stairs climbed during the workout.

> Use [allStatistics](allstatistics.md) or [statistics(for:)](statistics%28for_%29.md)  instead.

## Declaration

```swift
var totalFlightsClimbed: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a quantity using count units, or `nil`.

> **Note**

>  Provide the total flights climbed value whenever the number of flights climbed is relevant to the workout type. In addition, add flights climbed samples to a workout using the [add(\_:to:completion:)](../hkhealthstore/add%28__to_completion_%29.md) method. These samples should sum up to the total flights climbed, while providing detailed information about how the intensity changes over the duration of the workout.

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statistics(for:)](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

# totalFlightsClimbed (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 4.0+ (deprecated in 11.0)

The total number of flights of stairs climbed during the workout.

> Use [allStatistics](allstatistics.md) or [statisticsForType:](statistics%28for_%29.md)  instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) HKQuantity * totalFlightsClimbed;
```

<a id="Discussion"></a>

## Discussion

This property contains a quantity using count units, or `nil`.

> **Note**

>  Provide the total flights climbed value whenever the number of flights climbed is relevant to the workout type. In addition, add flights climbed samples to a workout using the [addSamples:toWorkout:completion:](../hkhealthstore/add%28__to_completion_%29.md) method. These samples should sum up to the total flights climbed, while providing detailed information about how the intensity changes over the duration of the workout.

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statisticsForType:](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.
