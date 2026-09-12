> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/endcollection(withend:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/endcollection(withend:completion:))

# endCollection(withEnd:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.

## Declaration

```swift
func endCollection(withEnd endDate: Date, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func endCollection(at endDate: Date) async throws
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Ending the workout

- [endDate](enddate.md): The workout’s end date and time.
- [finishWorkout(completion:)](finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
- [discardWorkout()](discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.

# endCollectionWithEndDate:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.

## Declaration

```objectivec
- (void) endCollectionWithEndDate:(NSDate *) endDate completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Ending the workout

- [endDate](enddate.md): The workout’s end date and time.
- [finishWorkoutWithCompletion:](finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
- [discardWorkout](discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.
