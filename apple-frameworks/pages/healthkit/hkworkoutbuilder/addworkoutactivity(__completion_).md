> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/addworkoutactivity(_:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/addworkoutactivity(_:completion:))

# addWorkoutActivity(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a workout activity to the workout builder.

## Declaration

```swift
func addWorkoutActivity(_ workoutActivity: HKWorkoutActivity, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addWorkoutActivity(_ workoutActivity: HKWorkoutActivity) async throws
```

## Parameters

- `workoutActivity`: The workout activity to add.
- `completion`: A callback handler that the system calls after adding the workout activity. The system calls the callback handler on an anonymous background queue.

  The callback handler takes the following parameters:

  - **success**: Contains [true](https://developer.apple.com/documentation/swift/true) if the builder successfully added the activity.
  - **error**: If the `success` parameter is [false](https://developer.apple.com/documentation/swift/false), this parameter contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

You can call this method repeatedly to incrementally add activities to the builder. Calling this method after calling [finishWorkout(completion:)](finishworkout%28completion_%29.md) fails with an error.

If you add an [HKWorkoutActivity](../hkworkoutactivity.md) object that doesn’t have an [endDate](../hkworkoutactivity/enddate.md), you can set the end date by calling [updateActivity(uuid:end:completion:)](updateactivity%28uuid_end_completion_%29.md).

## See Also

### Managing workout activities

- [updateActivity(uuid:adding:completion:)](updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [updateActivity(uuid:end:completion:)](updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
- [workoutActivities](workoutactivities.md)

# addWorkoutActivity:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a workout activity to the workout builder.

## Declaration

```objectivec
- (void) addWorkoutActivity:(HKWorkoutActivity *) workoutActivity completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `workoutActivity`: The workout activity to add.
- `completion`: A callback handler that the system calls after adding the workout activity. The system calls the callback handler on an anonymous background queue.

  The callback handler takes the following parameters:

  - **success**: Contains [true](https://developer.apple.com/documentation/swift/true) if the builder successfully added the activity.
  - **error**: If the `success` parameter is [false](https://developer.apple.com/documentation/swift/false), this parameter contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

You can call this method repeatedly to incrementally add activities to the builder. Calling this method after calling [finishWorkoutWithCompletion:](finishworkout%28completion_%29.md) fails with an error.

If you add an [HKWorkoutActivity](../hkworkoutactivity.md) object that doesn’t have an [endDate](../hkworkoutactivity/enddate.md), you can set the end date by calling [updateActivityWithUUID:endDate:completion:](updateactivity%28uuid_end_completion_%29.md).

## See Also

### Managing workout activities

- [updateActivityWithUUID:addMedatata:completion:](updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [updateActivityWithUUID:endDate:completion:](updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
- [workoutActivities](workoutactivities.md)
