> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/statistics(for:)](https://developer.apple.com/documentation/healthkit/hkworkout/statistics(for:))

# statistics(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the workout’s statistics for the provided quantity type.

## Declaration

```swift
func statistics(for quantityType: HKQuantityType) -> HKStatistics?
```

## Parameters

- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the statistics.

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object based on the [HKQuantitySample](../hkquantitysample.md) objects associated with the workout that also match the specified [HKQuantityType](../hkquantitytype.md).

If there are no matching quantity values, this method returns `nil`.

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

# statisticsForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the workout’s statistics for the provided quantity type.

## Declaration

```objectivec
- (HKStatistics *) statisticsForType:(HKQuantityType *) quantityType;
```

## Parameters

- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the statistics.

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object based on the [HKQuantitySample](../hkquantitysample.md) objects associated with the workout that also match the specified [HKQuantityType](../hkquantitytype.md).

If there are no matching quantity values, this method returns `nil`.

## See Also

### Accessing workout data

- [duration](duration.md): The workout’s duration.
- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](workoutactivities.md)
- [workoutEvents](workoutevents.md): An array of workout event objects.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.
