> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/startdate](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/startdate)

# startDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The activitiy’s start date and time.

## Declaration

```swift
var startDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

If the [endDate](enddate.md) property is non-`nil`, the activity’s start date must be equal to or earlier than its end date.

## See Also

### Accessing workout data

- [uuid](uuid.md): The activity’s universally unique identifier (UUID).
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statistics(for:)](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

# startDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The activitiy’s start date and time.

## Declaration

```objectivec
@property (copy, readonly) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

If the [endDate](enddate.md) property is non-`nil`, the activity’s start date must be equal to or earlier than its end date.

## See Also

### Accessing workout data

- [UUID](uuid.md): The activity’s universally unique identifier (UUID).
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statisticsForType:](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.
