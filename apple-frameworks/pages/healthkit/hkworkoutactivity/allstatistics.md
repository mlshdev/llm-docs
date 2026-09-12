> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/allstatistics](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/allstatistics)

# allStatistics (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A dictionary that contains all the statistics for the activity.

## Declaration

```swift
var allStatistics: [HKQuantityType : HKStatistics] { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object for each [HKQuantityType](../hkquantitytype.md), based on the [HKQuantitySample](../hkquantitysample.md) objects associated with the containing workout, and falling within the workout activity’s time frame.

Furthermore, if a quantity sample extends beyond the activity’s time frame, HealthKit interpolates a quantity value to represent the portion within the time frame, and uses that value instead.

## See Also

### Accessing workout data

- [uuid](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [statistics(for:)](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

# allStatistics (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A dictionary that contains all the statistics for the activity.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<HKQuantityType *,HKStatistics *> * allStatistics;
```

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object for each [HKQuantityType](../hkquantitytype.md), based on the [HKQuantitySample](../hkquantitysample.md) objects associated with the containing workout, and falling within the workout activity’s time frame.

Furthermore, if a quantity sample extends beyond the activity’s time frame, HealthKit interpolates a quantity value to represent the portion within the time frame, and uses that value instead.

## See Also

### Accessing workout data

- [UUID](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [statisticsForType:](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.
