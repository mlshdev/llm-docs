> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintent/goalvalue-5oazy](https://developer.apple.com/documentation/intents/instartworkoutintent/goalvalue-5oazy)

# goalValue

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.2+

The user-supplied numerical goal of the workout.

## Declaration

```swift
@nonobjc final var goalValue: Double? { get }
```

<a id="Discussion"></a>

## Discussion

If the user specified a goal, this property contains the numerical value of that goal. For example, if the user specifies a 40 minute workout then this property has the value `40`. You get the units associated with this goal from the [workoutGoalUnitType](workoutgoalunittype.md) property.

## See Also

### Specifying Workout Details

- [workoutName](workoutname.md): The name of the workout.
- [workoutGoalUnitType](workoutgoalunittype.md): The units associated with the workout goal.
- [workoutLocationType](workoutlocationtype.md): The location of the workout.
- [isOpenEnded](isopenended-8hecn.md): A Boolean value that indicates whether the workout is open ended.
