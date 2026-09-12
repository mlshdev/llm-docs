> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/finishworkout(completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/finishworkout(completion:))

# finishWorkout(completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.

## Declaration

```swift
func finishWorkout(completion: @escaping @Sendable (HKWorkout?, (any Error)?) -> Void)
```

```swift
func finishWorkout() async throws -> HKWorkout?
```

## Parameters

- `completion`: A completion handler that the system calls after the HKWorkout object has been created and saved. This handler takes the following parameters:

  - **workout**: An object that represents the finished workout. If an error occurred, the system sets this parameter to `nil`. If both this  and the `error` parameter are `nil` then finishing the workout succeeded but the workout sample is not available because the device is locked.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)
- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

You must call [endCollection(withEnd:completion:)](endcollection%28withend_completion_%29.md) before calling this method. This function returns `nil` if finishing the workout succeeded but the workout sample is not available because the device is locked.

## See Also

### Ending the workout

- [endCollection(withEnd:completion:)](endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [endDate](enddate.md): The workout’s end date and time.
- [discardWorkout()](discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.

# finishWorkoutWithCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.

## Declaration

```objectivec
- (void) finishWorkoutWithCompletion:(void (^)(HKWorkout *workout, NSError *error)) completion;
```

## Parameters

- `completion`: A completion handler that the system calls after the HKWorkout object has been created and saved. This handler takes the following parameters:

  - **workout**: An object that represents the finished workout. If an error occurred, the system sets this parameter to `nil`. If both this  and the `error` parameter are `nil` then finishing the workout succeeded but the workout sample is not available because the device is locked.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)
- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

You must call [endCollectionWithEndDate:completion:](endcollection%28withend_completion_%29.md) before calling this method. This function returns `nil` if finishing the workout succeeded but the workout sample is not available because the device is locked.

## See Also

### Ending the workout

- [endCollectionWithEndDate:completion:](endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [endDate](enddate.md): The workout’s end date and time.
- [discardWorkout](discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.
