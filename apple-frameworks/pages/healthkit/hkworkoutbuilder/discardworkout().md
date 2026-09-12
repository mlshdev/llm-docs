> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/discardworkout()](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/discardworkout())

# discardWorkout() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Stops the collection of data and discards the current results without saving the workout.

## Declaration

```swift
func discardWorkout()
```

## See Also

### Ending the workout

- [endCollection(withEnd:completion:)](endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [endDate](enddate.md): The workout’s end date and time.
- [finishWorkout(completion:)](finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.

# discardWorkout (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Stops the collection of data and discards the current results without saving the workout.

## Declaration

```objectivec
- (void) discardWorkout;
```

## See Also

### Ending the workout

- [endCollectionWithEndDate:completion:](endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [endDate](enddate.md): The workout’s end date and time.
- [finishWorkoutWithCompletion:](finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
