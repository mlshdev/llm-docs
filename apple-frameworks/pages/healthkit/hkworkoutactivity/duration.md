> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/duration](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/duration)

# duration (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The activity’s duration, measured in seconds.

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit calculates the [duration](duration.md) as the elapsed time between the activity’s [startDate](startdate.md) and [endDate](enddate.md), ignoring any pause periods. If an activity is currently in progress, it has a `nil`-valued [endDate](enddate.md). In this case, HealthKit calculates the duration as the time between the [startDate](startdate.md) and the current time, ignoring any pause periods.

## See Also

### Accessing workout data

- [uuid](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statistics(for:)](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

# duration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The activity’s duration, measured in seconds.

## Declaration

```objectivec
@property (assign, readonly) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

HealthKit calculates the [duration](duration.md) as the elapsed time between the activity’s [startDate](startdate.md) and [endDate](enddate.md), ignoring any pause periods. If an activity is currently in progress, it has a `nil`-valued [endDate](enddate.md). In this case, HealthKit calculates the duration as the time between the [startDate](startdate.md) and the current time, ignoring any pause periods.

## See Also

### Accessing workout data

- [UUID](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statisticsForType:](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.
