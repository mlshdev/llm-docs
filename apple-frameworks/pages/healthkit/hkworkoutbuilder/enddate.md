> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/enddate](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/enddate)

# endDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The workout’s end date and time.

## Declaration

```swift
var endDate: Date? { get }
```

## See Also

### Ending the workout

- [endCollection(withEnd:completion:)](endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [finishWorkout(completion:)](finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
- [discardWorkout()](discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.

# endDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The workout’s end date and time.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * endDate;
```

## See Also

### Ending the workout

- [endCollectionWithEndDate:completion:](endcollection%28withend_completion_%29.md): Stops the collection of data, sets the workout’s end date, and deactivates the workout builder.
- [finishWorkoutWithCompletion:](finishworkout%28completion_%29.md): Creates the workout, using the samples and events added to the builder, and saves it to the HealthKit store.
- [discardWorkout](discardworkout%28%29.md): Stops the collection of data and discards the current results without saving the workout.
