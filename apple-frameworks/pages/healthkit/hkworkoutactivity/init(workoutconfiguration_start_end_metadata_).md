> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/init(workoutconfiguration:start:end:metadata:)](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/init(workoutconfiguration:start:end:metadata:))

# init(workoutConfiguration:start:end:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a workout activity using the provided configuration, start date, end date, and metadata.

## Declaration

```swift
init(workoutConfiguration: HKWorkoutConfiguration, start startDate: Date, end endDate: Date?, metadata: [String : Any]?)
```

## Parameters

- `workoutConfiguration`: The configuration information for this part of the workout. For [HKWorkoutActivityType.swimBikeRun](../hkworkoutactivitytype/swimbikerun.md) workouts, the activity’s configuration must use the [HKWorkoutActivityType.swimming](../hkworkoutactivitytype/swimming.md), [HKWorkoutActivityType.cycling](../hkworkoutactivitytype/cycling.md), or [HKWorkoutActivityType.running](../hkworkoutactivitytype/running.md) activity types. For interval training, the activity’s configuration must use the same activity type as the containing workout.
- `startDate`: The activity’s start date and time.
- `endDate`: The activity’s end date and time. Set this value to `nil` if the activity is still in progress. When set to a non-`nil` value, the end date must be equal to or later than its start date. A workout can’t have overlapping activities.
- `metadata`: Metadata that provides additional information about the activity.

<a id="Discussion"></a>

## Discussion

# initWithWorkoutConfiguration:startDate:endDate:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a workout activity using the provided configuration, start date, end date, and metadata.

## Declaration

```objectivec
- (instancetype) initWithWorkoutConfiguration:(HKWorkoutConfiguration *) workoutConfiguration startDate:(NSDate *) startDate endDate:(NSDate *) endDate metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `workoutConfiguration`: The configuration information for this part of the workout. For [HKWorkoutActivityTypeSwimBikeRun](../hkworkoutactivitytype/swimbikerun.md) workouts, the activity’s configuration must use the [HKWorkoutActivityTypeSwimming](../hkworkoutactivitytype/swimming.md), [HKWorkoutActivityTypeCycling](../hkworkoutactivitytype/cycling.md), or [HKWorkoutActivityTypeRunning](../hkworkoutactivitytype/running.md) activity types. For interval training, the activity’s configuration must use the same activity type as the containing workout.
- `startDate`: The activity’s start date and time.
- `endDate`: The activity’s end date and time. Set this value to `nil` if the activity is still in progress. When set to a non-`nil` value, the end date must be equal to or later than its start date. A workout can’t have overlapping activities.
- `metadata`: Metadata that provides additional information about the activity.

<a id="Discussion"></a>

## Discussion
