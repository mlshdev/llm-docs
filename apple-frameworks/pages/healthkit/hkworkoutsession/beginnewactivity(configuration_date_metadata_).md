> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/beginnewactivity(configuration:date:metadata:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/beginnewactivity(configuration:date:metadata:))

# beginNewActivity(configuration:date:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

Begins a new workout activity in the workout session.

## Declaration

```swift
func beginNewActivity(configuration workoutConfiguration: HKWorkoutConfiguration, date: Date, metadata: [String : Any]?)
```

## Parameters

- `workoutConfiguration`: The configuration information for the activity. For [HKWorkoutActivityType.swimBikeRun](../hkworkoutactivitytype/swimbikerun.md) workouts, the activity’s configuration must use the [HKWorkoutActivityType.swimming](../hkworkoutactivitytype/swimming.md), [HKWorkoutActivityType.cycling](../hkworkoutactivitytype/cycling.md), or [HKWorkoutActivityType.running](../hkworkoutactivitytype/running.md) activity types. For interval training, the activity’s configuration must use the same activity type as the containing workout.
- `date`: The activity’s start date and time.
- `metadata`: Metadata that provides additional information about the activity.

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

This method asynchronously creates a new workout activity. HealthKit calls the session delegate’s [workoutSession(\_:didBeginActivityWith:date:)](../hkworkoutsessiondelegate/workoutsession%28__didbeginactivitywith_date_%29.md) method after the activity begins. If the workout already has a current activity, HealthKit also ends that activity.

HealthKit may also set the data source’s [typesToCollect](../hkliveworkoutdatasource/typestocollect.md) value based on the new activity. If you’ve never modified the types that the data source collects (for example, by calling [enableCollection(for:predicate:)](../hkliveworkoutdatasource/enablecollection%28for_predicate_%29.md) or [disableCollection(for:)](../hkliveworkoutdatasource/disablecollection%28for_%29.md)), HealthKit automatically sets the [typesToCollect](../hkliveworkoutdatasource/typestocollect.md) property to a set of relevant data types based on the new actiity. However, if you’ve explicitly set the collected data types, HealthKit won’t modify them; therefore, you may need to update them for the new activity.

## See Also

### Managing workout activities

- [currentActivity](currentactivity.md): The current workout activity.
- [endCurrentActivity(on:)](endcurrentactivity%28on_%29.md): Ends the current workout activity.

# beginNewActivityWithConfiguration:date:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

Begins a new workout activity in the workout session.

## Declaration

```objectivec
- (void) beginNewActivityWithConfiguration:(HKWorkoutConfiguration *) workoutConfiguration date:(NSDate *) date metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `workoutConfiguration`: The configuration information for the activity. For [HKWorkoutActivityTypeSwimBikeRun](../hkworkoutactivitytype/swimbikerun.md) workouts, the activity’s configuration must use the [HKWorkoutActivityTypeSwimming](../hkworkoutactivitytype/swimming.md), [HKWorkoutActivityTypeCycling](../hkworkoutactivitytype/cycling.md), or [HKWorkoutActivityTypeRunning](../hkworkoutactivitytype/running.md) activity types. For interval training, the activity’s configuration must use the same activity type as the containing workout.
- `date`: The activity’s start date and time.
- `metadata`: Metadata that provides additional information about the activity.

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

This method asynchronously creates a new workout activity. HealthKit calls the session delegate’s [workoutSession:didBeginActivityWithConfiguration:date:](../hkworkoutsessiondelegate/workoutsession%28__didbeginactivitywith_date_%29.md) method after the activity begins. If the workout already has a current activity, HealthKit also ends that activity.

HealthKit may also set the data source’s [typesToCollect](../hkliveworkoutdatasource/typestocollect.md) value based on the new activity. If you’ve never modified the types that the data source collects (for example, by calling [enableCollectionForType:predicate:](../hkliveworkoutdatasource/enablecollection%28for_predicate_%29.md) or [disableCollectionForType:](../hkliveworkoutdatasource/disablecollection%28for_%29.md)), HealthKit automatically sets the [typesToCollect](../hkliveworkoutdatasource/typestocollect.md) property to a set of relevant data types based on the new actiity. However, if you’ve explicitly set the collected data types, HealthKit won’t modify them; therefore, you may need to update them for the new activity.

## See Also

### Managing workout activities

- [currentActivity](currentactivity.md): The current workout activity.
- [endCurrentActivityOnDate:](endcurrentactivity%28on_%29.md): Ends the current workout activity.
