> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintent/init(workoutname:goalvalue:workoutgoalunittype:workoutlocationtype:isopenended:)](https://developer.apple.com/documentation/intents/instartworkoutintent/init(workoutname:goalvalue:workoutgoalunittype:workoutlocationtype:isopenended:))

# init(workoutName:goalValue:workoutGoalUnitType:workoutLocationType:isOpenEnded:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.2+

Initializes an intent object with the specified workout information.

## Declaration

```swift
@nonobjc convenience init(workoutName: INSpeakableString? = nil, goalValue: Double? = nil, workoutGoalUnitType: INWorkoutGoalUnitType = .unknown, workoutLocationType: INWorkoutLocationType = .unknown, isOpenEnded: Bool? = nil)
```

## Parameters

- `workoutName`: The name of the workout. This string can contain a custom workout name, a user-specific workout name, or one of the workout names defined in your app’s global vocabulary file.
- `goalValue`: The numerical portion of the user’s goal. This parameter works in conjunction with the `workoutGoalUnitType` parameter to define the user’s workout goal.
- `workoutGoalUnitType`: The units to apply to the `goalValue` parameter.
- `workoutLocationType`: The workout location.
- `isOpenEnded`: A Boolean indicating whether the workout ends when the specified goal is met. Specify `false` if the workout should end when the specified goal is met.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of the [INStartWorkoutIntent](../instartworkoutintent.md) class yourself. Siri creates instances when the user asks to start a workout. However, you can use this method during testing to create intent objects that validate your intent handling code paths.
