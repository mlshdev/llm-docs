> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity](https://developer.apple.com/documentation/healthkit/hkworkoutactivity)

# HKWorkoutActivity (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that describes an activity within a longer workout.

## Declaration

```swift
class HKWorkoutActivity
```

## Mentioned In

- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)

<a id="overview"></a>

## Overview

Workout activity objects partition a workout into a set of separate activities. For example, you can use workout activities to record the swim, bike, and running portions of a multisport event, like a triathlon, or to represent the active and rest periods during interval training. All [HKWorkout](hkworkout.md) instances have at least one associated [HKWorkoutActivity](hkworkoutactivity.md). If you don’t explicitly set workout activities, HealthKit assigns a workout activity that matches the [HKWorkout](hkworkout.md) object’s activity type. For more information, see [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md).

## Topics

### Creating workout activities

- [init(workoutConfiguration:start:end:metadata:)](hkworkoutactivity/init%28workoutconfiguration_start_end_metadata_%29.md): Creates a workout activity using the provided configuration, start date, end date, and metadata.

### Accessing workout data

- [uuid](hkworkoutactivity/uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](hkworkoutactivity/startdate.md): The activitiy’s start date and time.
- [endDate](hkworkoutactivity/enddate.md): The activity’s end date and time.
- [duration](hkworkoutactivity/duration.md): The activity’s duration, measured in seconds.
- [allStatistics](hkworkoutactivity/allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statistics(for:)](hkworkoutactivity/statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](hkworkoutactivity/metadata.md): Metadata that describes the activity.
- [workoutConfiguration](hkworkoutactivity/workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](hkworkoutactivity/workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

### Accessing zone data

- [zoneGroupsByType](hkworkoutactivity/zonegroupsbytype.md): A property that contains a dictionary that maps quantity types to their zone groups for this activity.
- [zoneGroup(for:)](hkworkoutactivity/zonegroup%28for_%29.md): Returns a zone group for the specified quantity type.

### Specifying predicate key paths

- [HKPredicateKeyPathWorkoutActivity](hkpredicatekeypathworkoutactivity.md): The key path for accessing a specific workout activity.
- [HKPredicateKeyPathWorkoutActivityType](hkpredicatekeypathworkoutactivitytype.md): The key path for accessing activities that match a workout activity type.
- [HKPredicateKeyPathWorkoutActivityStartDate](hkpredicatekeypathworkoutactivitystartdate.md): The key path for accessing activities with a matching start date.
- [HKPredicateKeyPathWorkoutActivityEndDate](hkpredicatekeypathworkoutactivityenddate.md): The key path for accessing activities with a matching end date.
- [HKPredicateKeyPathWorkoutActivityDuration](hkpredicatekeypathworkoutactivityduration.md): The key path for accessing activities with a matching duration.
- [HKPredicateKeyPathWorkoutActivityAverageQuantity](hkpredicatekeypathworkoutactivityaveragequantity.md): The key path for accessing activities with a matching average quantity.
- [HKPredicateKeyPathWorkoutActivityMaximumQuantity](hkpredicatekeypathworkoutactivitymaximumquantity.md): The key path for accessing activities with a matching maximum quantity.
- [HKPredicateKeyPathWorkoutActivityMinimumQuantity](hkpredicatekeypathworkoutactivityminimumquantity.md): The key path for accessing activities with a matching minimum quantity.
- [HKPredicateKeyPathWorkoutActivitySumQuantity](hkpredicatekeypathworkoutactivitysumquantity.md): The key path for accessing activities with a matching sum.

### Initializers

- [init(coder:)](hkworkoutactivity/init%28coder_%29.md)
- [init(workoutConfiguration:startDate:endDate:metadata:)](hkworkoutactivity/init%28workoutconfiguration_startdate_enddate_metadata_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.

# HKWorkoutActivity (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that describes an activity within a longer workout.

## Declaration

```objectivec
@interface HKWorkoutActivity : NSObject
```

## Mentioned In

- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)

<a id="overview"></a>

## Overview

Workout activity objects partition a workout into a set of separate activities. For example, you can use workout activities to record the swim, bike, and running portions of a multisport event, like a triathlon, or to represent the active and rest periods during interval training. All [HKWorkout](hkworkout.md) instances have at least one associated [HKWorkoutActivity](hkworkoutactivity.md). If you don’t explicitly set workout activities, HealthKit assigns a workout activity that matches the [HKWorkout](hkworkout.md) object’s activity type. For more information, see [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md).

## Topics

### Creating workout activities

- [initWithWorkoutConfiguration:startDate:endDate:metadata:](hkworkoutactivity/init%28workoutconfiguration_start_end_metadata_%29.md): Creates a workout activity using the provided configuration, start date, end date, and metadata.

### Accessing workout data

- [UUID](hkworkoutactivity/uuid.md): The activity’s universally unique identifier (UUID).
- [startDate](hkworkoutactivity/startdate.md): The activitiy’s start date and time.
- [endDate](hkworkoutactivity/enddate.md): The activity’s end date and time.
- [duration](hkworkoutactivity/duration.md): The activity’s duration, measured in seconds.
- [allStatistics](hkworkoutactivity/allstatistics.md): A dictionary that contains all the statistics for the activity.
- [statisticsForType:](hkworkoutactivity/statistics%28for_%29.md): Returns the activity’s statistics for the provided quantity type.
- [metadata](hkworkoutactivity/metadata.md): Metadata that describes the activity.
- [workoutConfiguration](hkworkoutactivity/workoutconfiguration.md): The configuration information for this part of the workout.
- [workoutEvents](hkworkoutactivity/workoutevents.md): An array of events associated with the containing workout and occurring during the activity’s duration.

### Specifying predicate key paths

- [HKPredicateKeyPathWorkoutActivity](hkpredicatekeypathworkoutactivity.md): The key path for accessing a specific workout activity.
- [HKPredicateKeyPathWorkoutActivityType](hkpredicatekeypathworkoutactivitytype.md): The key path for accessing activities that match a workout activity type.
- [HKPredicateKeyPathWorkoutActivityStartDate](hkpredicatekeypathworkoutactivitystartdate.md): The key path for accessing activities with a matching start date.
- [HKPredicateKeyPathWorkoutActivityEndDate](hkpredicatekeypathworkoutactivityenddate.md): The key path for accessing activities with a matching end date.
- [HKPredicateKeyPathWorkoutActivityDuration](hkpredicatekeypathworkoutactivityduration.md): The key path for accessing activities with a matching duration.
- [HKPredicateKeyPathWorkoutActivityAverageQuantity](hkpredicatekeypathworkoutactivityaveragequantity.md): The key path for accessing activities with a matching average quantity.
- [HKPredicateKeyPathWorkoutActivityMaximumQuantity](hkpredicatekeypathworkoutactivitymaximumquantity.md): The key path for accessing activities with a matching maximum quantity.
- [HKPredicateKeyPathWorkoutActivityMinimumQuantity](hkpredicatekeypathworkoutactivityminimumquantity.md): The key path for accessing activities with a matching minimum quantity.
- [HKPredicateKeyPathWorkoutActivitySumQuantity](hkpredicatekeypathworkoutactivitysumquantity.md): The key path for accessing activities with a matching sum.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.
