> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/duration](https://developer.apple.com/documentation/healthkit/hkworkout/duration)

# duration (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The workout’s duration.

## Declaration

```swift
var duration: TimeInterval { get }
```

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)

<a id="Discussion"></a>

## Discussion

A workout’s duration can be specified in one of three ways. The [init(activityType:start:end:)](init%28activitytype_start_end_%29.md) method uses the time interval between the provided start and end dates. The [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:metadata:)](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md) method sets the duration to the provided value. And the [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md) method calculates the total active duration based on the start and end dates and the workout events.

## See Also

### Accessing workout data

- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statistics(for:)](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

# duration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The workout’s duration.

## Declaration

```objectivec
@property (assign, readonly) NSTimeInterval duration;
```

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)

<a id="Discussion"></a>

## Discussion

A workout’s duration can be specified in one of three ways. The [workoutWithActivityType:startDate:endDate:](init%28activitytype_start_end_%29.md) method uses the time interval between the provided start and end dates. The [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md) method sets the duration to the provided value. And the [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md) method calculates the total active duration based on the start and end dates and the workout events.

## See Also

### Accessing workout data

- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [statisticsForType:](statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.
