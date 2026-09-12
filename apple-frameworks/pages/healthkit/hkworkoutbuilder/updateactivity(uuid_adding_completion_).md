> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/updateactivity(uuid:adding:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/updateactivity(uuid:adding:completion:))

# updateActivity(uuid:adding:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Adds metadata to a workout activity that you’ve already added to the workout builder.

## Declaration

```swift
func updateActivity(uuid UUID: UUID, adding metadata: [String : Any], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func updateActivity(uuid UUID: UUID, adding metadata: [String : Any]) async throws
```

## Parameters

- `UUID`: The workout activity’s universally unique identifier (UUID).
- `metadata`: A dictionary containing the metadata keys and values to add to the workout activity.
- `completion`: A callback handler that the system calls after updating the workout activity. The system calls the callback handler on an anonymous background queue.

  The callback handler takes the following parameters:

  - **success**: Contains [true](https://developer.apple.com/documentation/swift/true) if the builder successfully updates the activity.
  - **error**: If the `success` parameter is [false](https://developer.apple.com/documentation/swift/false), this parameter contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

You can call this method multiple times to incrementally add metadata to the workout activity. The system merges the new metadata with any existing metadata using [addEntries(from:)](../../foundation/nsmutabledictionary/addentries%28from_%29.md). Calling this method after calling [finishWorkout(completion:)](finishworkout%28completion_%29.md) fails with an error.

## See Also

### Managing workout activities

- [addWorkoutActivity(\_:completion:)](addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivity(uuid:end:completion:)](updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
- [workoutActivities](workoutactivities.md)

# updateActivityWithUUID:addMedatata:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Adds metadata to a workout activity that you’ve already added to the workout builder.

## Declaration

```objectivec
- (void) updateActivityWithUUID:(NSUUID *) UUID addMedatata:(NSDictionary<NSString *,id> *) metadata completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `UUID`: The workout activity’s universally unique identifier (UUID).
- `metadata`: A dictionary containing the metadata keys and values to add to the workout activity.
- `completion`: A callback handler that the system calls after updating the workout activity. The system calls the callback handler on an anonymous background queue.

  The callback handler takes the following parameters:

  - **success**: Contains [true](https://developer.apple.com/documentation/swift/true) if the builder successfully updates the activity.
  - **error**: If the `success` parameter is [false](https://developer.apple.com/documentation/swift/false), this parameter contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

You can call this method multiple times to incrementally add metadata to the workout activity. The system merges the new metadata with any existing metadata using [addEntriesFromDictionary:](../../foundation/nsmutabledictionary/addentries%28from_%29.md). Calling this method after calling [finishWorkoutWithCompletion:](finishworkout%28completion_%29.md) fails with an error.

## See Also

### Managing workout activities

- [addWorkoutActivity:completion:](addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivityWithUUID:endDate:completion:](updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
- [workoutActivities](workoutactivities.md)
