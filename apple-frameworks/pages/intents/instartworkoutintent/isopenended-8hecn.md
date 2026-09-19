> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/instartworkoutintent/isopenended-8hecn

# isOpenEnded

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.2+

A Boolean value that indicates whether the workout is open ended.

## Declaration

```swift
@nonobjc final var isOpenEnded: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a Boolean whose value is [true](https://developer.apple.com/documentation/swift/true) when the user wants an open-ended workout instead of a specific-goal workout.

## See Also

### Specifying Workout Details

- [workoutName](workoutname.md): The name of the workout.
- [goalValue](goalvalue-5oazy.md): The user-supplied numerical goal of the workout.
- [workoutGoalUnitType](workoutgoalunittype.md): The units associated with the workout goal.
- [workoutLocationType](workoutlocationtype.md): The location of the workout.
