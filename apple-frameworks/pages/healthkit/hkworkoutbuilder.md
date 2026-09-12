> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder)

# HKWorkoutBuilder (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

A builder object that incrementally constructs a workout.

## Declaration

```swift
class HKWorkoutBuilder
```

## Mentioned In

- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

Incrementally collect samples and events associated with a workout. When the workout ends, call [finishWorkout(completion:)](hkworkoutbuilder/finishworkout%28completion_%29.md) to create an [HKWorkout](hkworkout.md) sample and save it to the HealthKit store.

For watchOS, use an [HKWorkoutSession](hkworkoutsession.md) and an [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md) instead.

## Topics

### Creating the builder

- [init(healthStore:configuration:device:)](hkworkoutbuilder/init%28healthstore_configuration_device_%29.md): Returns a new workout builder object that is not connected to a workout session or other data source.
- [device](hkworkoutbuilder/device.md): The device associated with the workout.
- [workoutConfiguration](hkworkoutbuilder/workoutconfiguration.md): The configuration information for the workout.

### Starting the workout

- [beginCollection(withStart:completion:)](hkworkoutbuilder/begincollection%28withstart_completion_%29.md): Sets the workout’s start date and begins building the workout.
- [startDate](hkworkoutbuilder/startdate.md): The workout’s start date and time.
- [elapsedTime(at:)](hkworkoutbuilder/elapsedtime%28at_%29.md): Calculates the duration of the workout at the specified time.

### Associating samples with the workout

- [add(\_:completion:)](hkworkoutbuilder/add%28__completion_%29.md): Adds a sample to be associated with the workout.
- [seriesBuilder(for:)](hkworkoutbuilder/seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
- [statistics(for:)](hkworkoutbuilder/statistics%28for_%29.md): Returns the statistics calculated for matching samples added to the workout.

### Adding metadata to the workout

- [addMetadata(\_:completion:)](hkworkoutbuilder/addmetadata%28__completion_%29.md): Adds metadata to be saved with the workout.
- [metadata](hkworkoutbuilder/metadata.md): The metadata the builder saves with the workout.

### Adding events to the workout

- [addWorkoutEvents(\_:completion:)](hkworkoutbuilder/addworkoutevents%28__completion_%29.md): Adds a workout event to the builder.
- [workoutEvents](hkworkoutbuilder/workoutevents.md): The list of events added to the workout.

### Managing workout activities

- [addWorkoutActivity(\_:completion:)](hkworkoutbuilder/addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivity(uuid:adding:completion:)](hkworkoutbuilder/updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [updateActivity(uuid:end:completion:)](hkworkoutbuilder/updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
- [workoutActivities](hkworkoutbuilder/workoutactivities.md)

### Ending the workout

- [endCollection(withEnd:completion:)](hkworkoutbuilder/endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [endDate](hkworkoutbuilder/enddate.md): The workout’s end date and time.
- [finishWorkout(completion:)](hkworkoutbuilder/finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
- [discardWorkout()](hkworkoutbuilder/discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.

### Accessing workout statistics

- [allStatistics](hkworkoutbuilder/allstatistics.md): A dictionary that contains all the statistics for the workout builder.

### Configuring zone data

- [setCustomZoneConfiguration(\_:for:)](hkworkoutbuilder/setcustomzoneconfiguration%28__for_%29.md): Overrides the preferred zone configuration with a custom zone for the current workout.
- [zoneConfiguration(for:)](hkworkoutbuilder/zoneconfiguration%28for_%29.md): Returns the zone configuration for the specified quantity type.
- [zoneGroup(for:)](hkworkoutbuilder/zonegroup%28for_%29.md): Returns the current zone group for the specified quantity type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.

# HKWorkoutBuilder (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

A builder object that incrementally constructs a workout.

## Declaration

```objectivec
@interface HKWorkoutBuilder : NSObject
```

## Mentioned In

- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

Incrementally collect samples and events associated with a workout. When the workout ends, call [finishWorkoutWithCompletion:](hkworkoutbuilder/finishworkout%28completion_%29.md) to create an [HKWorkout](hkworkout.md) sample and save it to the HealthKit store.

For watchOS, use an [HKWorkoutSession](hkworkoutsession.md) and an [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md) instead.

## Topics

### Creating the builder

- [initWithHealthStore:configuration:device:](hkworkoutbuilder/init%28healthstore_configuration_device_%29.md): Returns a new workout builder object that is not connected to a workout session or other data source.
- [device](hkworkoutbuilder/device.md): The device associated with the workout.
- [workoutConfiguration](hkworkoutbuilder/workoutconfiguration.md): The configuration information for the workout.

### Starting the workout

- [beginCollectionWithStartDate:completion:](hkworkoutbuilder/begincollection%28withstart_completion_%29.md): Sets the workout’s start date and begins building the workout.
- [startDate](hkworkoutbuilder/startdate.md): The workout’s start date and time.
- [elapsedTimeAtDate:](hkworkoutbuilder/elapsedtime%28at_%29.md): Calculates the duration of the workout at the specified time.

### Associating samples with the workout

- [addSamples:completion:](hkworkoutbuilder/add%28__completion_%29.md): Adds a sample to be associated with the workout.
- [seriesBuilderForType:](hkworkoutbuilder/seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
- [statisticsForType:](hkworkoutbuilder/statistics%28for_%29.md): Returns the statistics calculated for matching samples added to the workout.

### Adding metadata to the workout

- [addMetadata:completion:](hkworkoutbuilder/addmetadata%28__completion_%29.md): Adds metadata to be saved with the workout.
- [metadata](hkworkoutbuilder/metadata.md): The metadata the builder saves with the workout.

### Adding events to the workout

- [addWorkoutEvents:completion:](hkworkoutbuilder/addworkoutevents%28__completion_%29.md): Adds a workout event to the builder.
- [workoutEvents](hkworkoutbuilder/workoutevents.md): The list of events added to the workout.

### Managing workout activities

- [addWorkoutActivity:completion:](hkworkoutbuilder/addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivityWithUUID:addMedatata:completion:](hkworkoutbuilder/updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [updateActivityWithUUID:endDate:completion:](hkworkoutbuilder/updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
- [workoutActivities](hkworkoutbuilder/workoutactivities.md)

### Ending the workout

- [endCollectionWithEndDate:completion:](hkworkoutbuilder/endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [endDate](hkworkoutbuilder/enddate.md): The workout’s end date and time.
- [finishWorkoutWithCompletion:](hkworkoutbuilder/finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
- [discardWorkout](hkworkoutbuilder/discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.

### Accessing workout statistics

- [allStatistics](hkworkoutbuilder/allstatistics.md): A dictionary that contains all the statistics for the workout builder.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.
