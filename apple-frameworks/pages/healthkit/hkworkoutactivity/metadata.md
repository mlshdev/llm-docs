> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/metadata](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/metadata)

# metadata (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Metadata that describes the activity.

## Declaration

```swift
var metadata: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The metadata dictionary contains extra information describing this activity. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values can be [NSString](../../foundation/nsstring.md) objects, [NSNumber](../../foundation/nsnumber.md) objects or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the workout activity’s capabilities.

## See Also

### Accessing workout data

- [uuid](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statistics(for:)](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

# metadata (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Metadata that describes the activity.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The metadata dictionary contains extra information describing this activity. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values can be [NSString](../../foundation/nsstring.md) objects, [NSNumber](../../foundation/nsnumber.md) objects or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the workout activity’s capabilities.

## See Also

### Accessing workout data

- [UUID](uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](startdate.md): The activitiy’s start date and time.
- [endDate](enddate.md): The activity’s end date and time.
- [duration](duration.md): The activity’s duration, measured in seconds.
- [allStatistics](allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statisticsForType:](statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.
