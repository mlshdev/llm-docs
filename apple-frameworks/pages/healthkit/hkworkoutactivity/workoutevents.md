> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/workoutevents](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/workoutevents)

# workoutEvents (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An array of events associated with the containing workout and occurring during the activity’s duration.

## Declaration

```swift
var workoutEvents: [HKWorkoutEvent] { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit sorts the events in ascending order. These events are a subset of the containing workout’s events, that take place between the activity’s [startDate](startdate.md) and [endDate](enddate.md). This includes any event that partially overlaps the activity. As a result, these events may appear in more than one activity.

## See Also

### Accessing workout data

- [uuid](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statistics(for:)](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.

# workoutEvents (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An array of events associated with the containing workout and occurring during the activity’s duration.

## Declaration

```objectivec
@property (copy, readonly) NSArray<HKWorkoutEvent *> * workoutEvents;
```

<a id="Discussion"></a>

## Discussion

HealthKit sorts the events in ascending order. These events are a subset of the containing workout’s events, that take place between the activity’s [startDate](startdate.md) and [endDate](enddate.md). This includes any event that partially overlaps the activity. As a result, these events may appear in more than one activity.

## See Also

### Accessing workout data

- [UUID](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statisticsForType:](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
