> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/uuid](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/uuid)

# uuid (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The activity’s universally unique identifier (UUID).

## Declaration

```swift
var uuid: UUID { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to the workout activity when you create it. If you want to add your own unique ID, add it to the activity’s [metadata](metadata.md) using the [HKMetadataKeyExternalUUID](../hkmetadatakeyexternaluuid.md) key.

## See Also

### Accessing workout data

- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statistics(for:)](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

# UUID (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The activity’s universally unique identifier (UUID).

## Declaration

```objectivec
@property (copy, readonly) NSUUID * UUID;
```

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to the workout activity when you create it. If you want to add your own unique ID, add it to the activity’s [metadata](metadata.md) using the [HKMetadataKeyExternalUUID](../hkmetadatakeyexternaluuid.md) key.

## See Also

### Accessing workout data

- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statisticsForType:](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](metadata.md): Metadata that describes the activity.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.
