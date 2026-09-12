> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/workoutactivitytype](https://developer.apple.com/documentation/healthkit/hkworkout/workoutactivitytype)

# workoutActivityType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The type of activity performed during the workout.

## Declaration

```swift
var workoutActivityType: HKWorkoutActivityType { get }
```

<a id="Discussion"></a>

## Discussion

For the complete list of activity types, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statistics(for:)](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

# workoutActivityType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The type of activity performed during the workout.

## Declaration

```objectivec
@property (assign, readonly) HKWorkoutActivityType workoutActivityType;
```

<a id="Discussion"></a>

## Discussion

For the complete list of activity types, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statisticsForType:](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.
