> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/init(activitytype:start:end:)](https://developer.apple.com/documentation/healthkit/hkworkout/init(activitytype:start:end:))

# init(activityType:start:end:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

Instantiates a new workout.

> Use HKWorkoutBuilder

## Declaration

```swift
convenience init(activityType workoutActivityType: HKWorkoutActivityType, start startDate: Date, end endDate: Date)
```

## Parameters

- `workoutActivityType`: The type of activity being performed during the workout. For a list of possible activity types, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).
- `startDate`: The date and time when the activity started.
- `endDate`: The date and time when the activity ended. This date must be equal to or later than the start date.

<a id="return-value"></a>

## Return Value

A workout activity.

<a id="Discussion"></a>

## Discussion

The workout’s duration is calculated from its start and end times. The workout’s total distance, total energy burned, workout events, device, and metadata are all set to `nil`.

**Swift**

```swift
let basketball = HKWorkout(activityType:HKWorkoutActivityType.Basketball,
                           startDate: start, endDate: end)
 
 
healthStore.saveObject(basketball) { (success, error) -> Void in
    guard success else {
        // Perform proper error handling here...
        fatalError("*** An error occurred while saving this " +
            "workout: \(error?.localizedDescription)")
    }
}
```

**Objective-C**

```objc
HKWorkout *basketball =
[HKWorkout workoutWithActivityType:HKWorkoutActivityTypeBasketball
                         startDate:start
                           endDate:end];
 
[self.healthStore
 saveObject:basketball
 withCompletion:^(BOOL success, NSError *error) {
 
     if (!success) {
         // Perform proper error handling here...
         NSLog(@"*** An error occurred while saving this "
               @"workout: %@ ***", error.localizedDescription);
     }
 
 }];
```

## See Also

### Related Documentation

- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [duration](duration.md): The workout’s duration.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [workoutEvents](workoutevents.md): An array of workout event objects.

### Creating workouts

- [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:metadata:)](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout that includes the energy burned, distance, and metadata for the workout.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout whose duration is calculated based on the start and end dates and the provided workout events.
- [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:device:metadata:)](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a new workout activity that includes the device that produced the sample data.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a workout that includes both workout events and the device that produced the sample data.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of flights of stairs climbed.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of strokes while swimming.

# workoutWithActivityType:startDate:endDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

Instantiates a new workout.

> Use HKWorkoutBuilder

## Declaration

```objectivec
+ (instancetype) workoutWithActivityType:(HKWorkoutActivityType) workoutActivityType startDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `workoutActivityType`: The type of activity being performed during the workout. For a list of possible activity types, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).
- `startDate`: The date and time when the activity started.
- `endDate`: The date and time when the activity ended. This date must be equal to or later than the start date.

<a id="return-value"></a>

## Return Value

A workout activity.

<a id="Discussion"></a>

## Discussion

The workout’s duration is calculated from its start and end times. The workout’s total distance, total energy burned, workout events, device, and metadata are all set to `nil`.

**Swift**

```swift
let basketball = HKWorkout(activityType:HKWorkoutActivityType.Basketball,
                           startDate: start, endDate: end)
 
 
healthStore.saveObject(basketball) { (success, error) -> Void in
    guard success else {
        // Perform proper error handling here...
        fatalError("*** An error occurred while saving this " +
            "workout: \(error?.localizedDescription)")
    }
}
```

**Objective-C**

```objc
HKWorkout *basketball =
[HKWorkout workoutWithActivityType:HKWorkoutActivityTypeBasketball
                         startDate:start
                           endDate:end];
 
[self.healthStore
 saveObject:basketball
 withCompletion:^(BOOL success, NSError *error) {
 
     if (!success) {
         // Perform proper error handling here...
         NSLog(@"*** An error occurred while saving this "
               @"workout: %@ ***", error.localizedDescription);
     }
 
 }];
```

## See Also

### Related Documentation

- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [duration](duration.md): The workout’s duration.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [workoutEvents](workoutevents.md): An array of workout event objects.

### Creating workouts

- [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout that includes the energy burned, distance, and metadata for the workout.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout whose duration is calculated based on the start and end dates and the provided workout events.
- [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:device:metadata:](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a new workout activity that includes the device that produced the sample data.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a workout that includes both workout events and the device that produced the sample data.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of flights of stairs climbed.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of strokes while swimming.
