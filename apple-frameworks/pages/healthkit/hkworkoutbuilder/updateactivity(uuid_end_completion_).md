> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/updateactivity(uuid:end:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/updateactivity(uuid:end:completion:))

# updateActivity(uuid:end:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the end date for a workout activity that you’ve already added to the workout builder.

## Declaration

```swift
func updateActivity(uuid UUID: UUID, end endDate: Date, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func updateActivity(uuid UUID: UUID, end endDate: Date) async throws
```

## Parameters

- `UUID`: The workout activity’s universally unique identifier (UUID).
- `endDate`: The end date and time for the workout activity.
- `completion`: A callback handler that the system calls after updating the workout activity. The system calls the callback handler on an anonymous background queue.

  The callback handler takes the following parameters:

  - **success**: Contains [true](https://developer.apple.com/documentation/swift/true) if the builder successfully updates the activity.
  - **error**: If the `success` parameter is [false](https://developer.apple.com/documentation/swift/false), this parameter contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Calling this method after calling [finishWorkout(completion:)](finishworkout%28completion_%29.md) fails with an error.

## See Also

### Managing workout activities

- [addWorkoutActivity(\_:completion:)](addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivity(uuid:adding:completion:)](updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [workoutActivities](workoutactivities.md)

# updateActivityWithUUID:endDate:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the end date for a workout activity that you’ve already added to the workout builder.

## Declaration

```objectivec
- (void) updateActivityWithUUID:(NSUUID *) UUID endDate:(NSDate *) endDate completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `UUID`: The workout activity’s universally unique identifier (UUID).
- `endDate`: The end date and time for the workout activity.
- `completion`: A callback handler that the system calls after updating the workout activity. The system calls the callback handler on an anonymous background queue.

  The callback handler takes the following parameters:

  - **success**: Contains [true](https://developer.apple.com/documentation/swift/true) if the builder successfully updates the activity.
  - **error**: If the `success` parameter is [false](https://developer.apple.com/documentation/swift/false), this parameter contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Calling this method after calling [finishWorkoutWithCompletion:](finishworkout%28completion_%29.md) fails with an error.

## See Also

### Managing workout activities

- [addWorkoutActivity:completion:](addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivityWithUUID:addMedatata:completion:](updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [workoutActivities](workoutactivities.md)
