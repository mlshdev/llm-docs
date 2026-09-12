> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/statistics(for:)](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/statistics(for:))

# statistics(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the activity’s statistics for the provided quantity type.

## Declaration

```swift
func statistics(for quantityType: HKQuantityType) -> HKStatistics?
```

## Parameters

- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the statistics.

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object based on the [HKQuantitySample](../hkquantitysample.md) objects that meet the following requirements:

- Match the specified [HKQuantityType](../hkquantitytype.md).
- Are associated with the containing workout.
- Fall within the activity’s time frame.

Furthermore, if a quantity sample extends beyond the activity’s time frame, HealthKit interpolates a quantity value to represent the portion within the time frame, and uses that value instead.

If there are no matching quantity values, this method returns `nil`.

## See Also

### Accessing workout data

- [uuid](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

# statisticsForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the activity’s statistics for the provided quantity type.

## Declaration

```objectivec
- (HKStatistics *) statisticsForType:(HKQuantityType *) quantityType;
```

## Parameters

- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the statistics.

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object based on the [HKQuantitySample](../hkquantitysample.md) objects that meet the following requirements:

- Match the specified [HKQuantityType](../hkquantitytype.md).
- Are associated with the containing workout.
- Fall within the activity’s time frame.

Furthermore, if a quantity sample extends beyond the activity’s time frame, HealthKit interpolates a quantity value to represent the portion within the time frame, and uses that value instead.

If there are no matching quantity values, this method returns `nil`.

## See Also

### Accessing workout data

- [UUID](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.
