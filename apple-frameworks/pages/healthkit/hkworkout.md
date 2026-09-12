> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout](https://developer.apple.com/documentation/healthkit/hkworkout)

# HKWorkout (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A workout sample that stores information about a single physical activity.

## Declaration

```swift
class HKWorkout
```

## Mentioned In

- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)
- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Creating a workout route](creating-a-workout-route.md)

<a id="overview"></a>

## Overview

The [HKWorkout](hkworkout.md) class is a concrete subclass of the [HKSample](hksample.md) class; however, they behave somewhat differently than other sample types.

- You don’t need a specific type identifier to create the [HKWorkoutType](hkworkouttype.md) instance. All workouts use the same type identifier.
- You must provide an [HKWorkoutActivityType](hkworkoutactivitytype.md) value for each workout. This value defines the type of activity performed during the workout.
- After saving the workout to the HealthKit store, you must associate additional samples with the workout (for example, active energy burned or distance samples). These samples provide fine-grained details. Use the [add(\_:to:completion:)](hkhealthstore/add%28__to_completion_%29.md) method to associate them with the workout.

![An illustration showing how a workout is created and added to the store.](https://developer.apple.com/images/com.apple.healthkit/media-3570087@2x.png)

The workout records a summary of information about a single physical activity (for example, the duration, total distance, and total energy burned). It also acts as a container for other [HKSample](hksample.md) objects. You can associate any number of samples with a workout, adding details over the course of the workout. For example, you may want to break a single run into a number of shorter intervals, and then add samples to track the user’s heart rate, energy burned, distance traveled, and steps taken for each interval. For more information, see [Adding samples to a workout](adding-samples-to-a-workout.md).

> **Note**

>  If a workout has summary information, it also needs a set of associated samples that add up to the summary’s total. See [Adding samples to a workout](adding-samples-to-a-workout.md).

HealthKit supports a wide range of activity types. For a complete list, see [HKWorkoutActivityType](hkworkoutactivitytype.md).

Workouts are mostly immutable. You set their properties when you instantiate the workout, and they can’t change. However, you can continue to add samples to the workouts.

<a id="Fill-the-Activity-rings"></a>

### Fill the Activity rings

Workouts can contribute to the Move and Exercise rings in the Activity app. To affect the rings, you must associate one or more active energy burned samples with the workout. Additionally:

- In watchOS. Use a workout session to track the user’s activity. When the session has ended, create a workout object and the associated active energy burned samples. For more information, see [HKWorkoutSession](hkworkoutsession.md).

The system updates the Move ring based on the active energy burned samples. It updates the Exercise ring based on the amount of time the user spent actually exerting themselves during the workout session, as calculated by the watch’s sensors.

- In iOS. No additional work is necessary. Workout objects automatically contribute to both the Move and Exercise rings. The Exercise ring increases by the workout’s total duration, and the Move ring increases by the number of calories in the associated active energy burned samples. HealthKit also increases the Stand ring by one hour for each wall-clock hour that the workout overlaps.

Create and save workouts on the device that makes the most sense for your application—typically the device processing the user’s workout.

<a id="Extend-workouts"></a>

### Extend workouts

As with many HealthKit classes, don’t subclass the [HKWorkout](hkworkout.md) class. You may extend workouts by adding metadata with custom keys as appropriate for your app.

For more information, see the methods [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:metadata:)](hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md) and [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:metadata:)](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md).

## Topics

### Creating workouts

- [init(activityType:start:end:)](hkworkout/init%28activitytype_start_end_%29.md): Deprecated. Instantiates a new workout.
- [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:metadata:)](hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout that includes the energy burned, distance, and metadata for the workout.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:metadata:)](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout whose duration is calculated based on the start and end dates and the provided workout events.
- [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:device:metadata:)](hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a new workout activity that includes the device that produced the sample data.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:)](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a workout that includes both workout events and the device that produced the sample data.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:)](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of flights of stairs climbed.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:)](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of strokes while swimming.

### Accessing workout data

- [duration](hkworkout/duration.md): The workout’s duration.
- [workoutActivityType](hkworkout/workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](hkworkout/workoutactivities.md)
- [workoutEvents](hkworkout/workoutevents.md): An array of workout event objects.
- [statistics(for:)](hkworkout/statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](hkworkout/allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](hkworkout/totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](hkworkout/totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](hkworkout/totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](hkworkout/totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

### Accessing zone data

- [zoneGroupsByType](hkworkout/zonegroupsbytype.md): A property that contains a dictionary that maps quantity types to their zone groups for this workout.
- [zoneGroup(for:)](hkworkout/zonegroup%28for_%29.md): Returns the current zone group for the specified quantity type.

### Specifying sort identifiers

- [HKWorkoutSortIdentifierDuration](hkworkoutsortidentifierduration.md): A constant for sorting workouts based on their duration.
- [HKWorkoutSortIdentifierTotalDistance](hkworkoutsortidentifiertotaldistance.md): A constant for sorting workouts based on their total distance.
- [HKWorkoutSortIdentifierTotalEnergyBurned](hkworkoutsortidentifiertotalenergyburned.md): A constant for sorting workouts based on the total energy burned.

### Specifying predicate key paths

- [HKPredicateKeyPathWorkoutType](hkpredicatekeypathworkouttype.md): The key path for accessing the workout’s type.
- [HKPredicateKeyPathWorkoutDuration](hkpredicatekeypathworkoutduration.md): The key path for accessing the workout’s duration.
- [HKPredicateKeyPathWorkoutTotalDistance](hkpredicatekeypathworkouttotaldistance.md): Deprecated. The key path for accessing the workout’s total distance.
- [HKPredicateKeyPathWorkoutTotalEnergyBurned](hkpredicatekeypathworkouttotalenergyburned.md): Deprecated. The key path for accessing the workout’s total energy burned.
- [HKPredicateKeyPathWorkoutAverageQuantity](hkpredicatekeypathworkoutaveragequantity.md): The key path for accessing workouts with a matching average quantity.
- [HKPredicateKeyPathWorkoutMaximumQuantity](hkpredicatekeypathworkoutmaximumquantity.md): The key path for accessing workouts with a matching maximum quantity.
- [HKPredicateKeyPathWorkoutMinimumQuantity](hkpredicatekeypathworkoutminimumquantity.md): The key path for accessing workouts with a matching minimum quantity.
- [HKPredicateKeyPathWorkoutSumQuantity](hkpredicatekeypathworkoutsumquantity.md): The key path for accessing workouts with a matching sum.

### Specifying metadata keys

- [Workout Metadata Keys](workout-metadata-keys.md): Constants that can be used to add metadata to workouts.

### Setting additional properties

- [workoutPlan](hkworkout/workoutplan.md)

### Initializers

- [init(activityType:startDate:endDate:)](hkworkout/init%28activitytype_startdate_enddate_%29.md): Deprecated.
- [init(activityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:device:metadata:)](hkworkout/init%28activitytype_startdate_enddate_duration_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated.
- [init(activityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:)](hkworkout/init%28activitytype_startdate_enddate_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated.
- [init(activityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:)](hkworkout/init%28activitytype_startdate_enddate_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated.
- [init(activityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:metadata:)](hkworkout/init%28activitytype_startdate_enddate_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated.
- [init(activityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:)](hkworkout/init%28activitytype_startdate_enddate_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated.
- [init(activityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:)](hkworkout/init%28activitytype_startdate_enddate_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.

# HKWorkout (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A workout sample that stores information about a single physical activity.

## Declaration

```objectivec
@interface HKWorkout : HKSample
```

## Mentioned In

- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)
- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Creating a workout route](creating-a-workout-route.md)

<a id="overview"></a>

## Overview

The [HKWorkout](hkworkout.md) class is a concrete subclass of the [HKSample](hksample.md) class; however, they behave somewhat differently than other sample types.

- You don’t need a specific type identifier to create the [HKWorkoutType](hkworkouttype.md) instance. All workouts use the same type identifier.
- You must provide an [HKWorkoutActivityType](hkworkoutactivitytype.md) value for each workout. This value defines the type of activity performed during the workout.
- After saving the workout to the HealthKit store, you must associate additional samples with the workout (for example, active energy burned or distance samples). These samples provide fine-grained details. Use the [addSamples:toWorkout:completion:](hkhealthstore/add%28__to_completion_%29.md) method to associate them with the workout.

![An illustration showing how a workout is created and added to the store.](https://developer.apple.com/images/com.apple.healthkit/media-3570087@2x.png)

The workout records a summary of information about a single physical activity (for example, the duration, total distance, and total energy burned). It also acts as a container for other [HKSample](hksample.md) objects. You can associate any number of samples with a workout, adding details over the course of the workout. For example, you may want to break a single run into a number of shorter intervals, and then add samples to track the user’s heart rate, energy burned, distance traveled, and steps taken for each interval. For more information, see [Adding samples to a workout](adding-samples-to-a-workout.md).

> **Note**

>  If a workout has summary information, it also needs a set of associated samples that add up to the summary’s total. See [Adding samples to a workout](adding-samples-to-a-workout.md).

HealthKit supports a wide range of activity types. For a complete list, see [HKWorkoutActivityType](hkworkoutactivitytype.md).

Workouts are mostly immutable. You set their properties when you instantiate the workout, and they can’t change. However, you can continue to add samples to the workouts.

<a id="Fill-the-Activity-rings"></a>

### Fill the Activity rings

Workouts can contribute to the Move and Exercise rings in the Activity app. To affect the rings, you must associate one or more active energy burned samples with the workout. Additionally:

- In watchOS. Use a workout session to track the user’s activity. When the session has ended, create a workout object and the associated active energy burned samples. For more information, see [HKWorkoutSession](hkworkoutsession.md).

The system updates the Move ring based on the active energy burned samples. It updates the Exercise ring based on the amount of time the user spent actually exerting themselves during the workout session, as calculated by the watch’s sensors.

- In iOS. No additional work is necessary. Workout objects automatically contribute to both the Move and Exercise rings. The Exercise ring increases by the workout’s total duration, and the Move ring increases by the number of calories in the associated active energy burned samples. HealthKit also increases the Stand ring by one hour for each wall-clock hour that the workout overlaps.

Create and save workouts on the device that makes the most sense for your application—typically the device processing the user’s workout.

<a id="Extend-workouts"></a>

### Extend workouts

As with many HealthKit classes, don’t subclass the [HKWorkout](hkworkout.md) class. You may extend workouts by adding metadata with custom keys as appropriate for your app.

For more information, see the methods [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:](hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md) and [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:metadata:](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md).

## Topics

### Creating workouts

- [workoutWithActivityType:startDate:endDate:](hkworkout/init%28activitytype_start_end_%29.md): Deprecated. Instantiates a new workout.
- [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:](hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout that includes the energy burned, distance, and metadata for the workout.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:metadata:](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout whose duration is calculated based on the start and end dates and the provided workout events.
- [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:device:metadata:](hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a new workout activity that includes the device that produced the sample data.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a workout that includes both workout events and the device that produced the sample data.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of flights of stairs climbed.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:](hkworkout/init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of strokes while swimming.

### Accessing workout data

- [duration](hkworkout/duration.md): The workout’s duration.
- [workoutActivityType](hkworkout/workoutactivitytype.md): The type of activity performed during the workout.
- [workoutActivities](hkworkout/workoutactivities.md)
- [workoutEvents](hkworkout/workoutevents.md): An array of workout event objects.
- [statisticsForType:](hkworkout/statistics%28for_%29.md): Returns the workout’s statistics for the provided quantity type.
- [allStatistics](hkworkout/allstatistics.md): A dictionary that contains all the statistics for the workout.
- [totalDistance](hkworkout/totaldistance.md): Deprecated. The total distance traveled during the workout.
- [totalEnergyBurned](hkworkout/totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [totalFlightsClimbed](hkworkout/totalflightsclimbed.md): Deprecated. The total number of flights of stairs climbed during the workout.
- [totalSwimmingStrokeCount](hkworkout/totalswimmingstrokecount.md): Deprecated. The total stroke count for the workout.

### Specifying sort identifiers

- [HKWorkoutSortIdentifierDuration](hkworkoutsortidentifierduration.md): A constant for sorting workouts based on their duration.
- [HKWorkoutSortIdentifierTotalDistance](hkworkoutsortidentifiertotaldistance.md): A constant for sorting workouts based on their total distance.
- [HKWorkoutSortIdentifierTotalEnergyBurned](hkworkoutsortidentifiertotalenergyburned.md): A constant for sorting workouts based on the total energy burned.

### Specifying predicate key paths

- [HKPredicateKeyPathWorkoutType](hkpredicatekeypathworkouttype.md): The key path for accessing the workout’s type.
- [HKPredicateKeyPathWorkoutDuration](hkpredicatekeypathworkoutduration.md): The key path for accessing the workout’s duration.
- [HKPredicateKeyPathWorkoutTotalDistance](hkpredicatekeypathworkouttotaldistance.md): Deprecated. The key path for accessing the workout’s total distance.
- [HKPredicateKeyPathWorkoutTotalEnergyBurned](hkpredicatekeypathworkouttotalenergyburned.md): Deprecated. The key path for accessing the workout’s total energy burned.
- [HKPredicateKeyPathWorkoutAverageQuantity](hkpredicatekeypathworkoutaveragequantity.md): The key path for accessing workouts with a matching average quantity.
- [HKPredicateKeyPathWorkoutMaximumQuantity](hkpredicatekeypathworkoutmaximumquantity.md): The key path for accessing workouts with a matching maximum quantity.
- [HKPredicateKeyPathWorkoutMinimumQuantity](hkpredicatekeypathworkoutminimumquantity.md): The key path for accessing workouts with a matching minimum quantity.
- [HKPredicateKeyPathWorkoutSumQuantity](hkpredicatekeypathworkoutsumquantity.md): The key path for accessing workouts with a matching sum.

### Specifying metadata keys

- [Workout Metadata Keys](workout-metadata-keys.md): Constants that can be used to add metadata to workouts.

## Relationships

### Inherits From

- [HKSample](hksample.md)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
- [HKWorkoutEvent](hkworkoutevent.md): An object representing an important event during a workout.
