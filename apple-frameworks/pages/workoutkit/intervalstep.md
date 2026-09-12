> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/intervalstep](https://developer.apple.com/documentation/workoutkit/intervalstep)

# IntervalStep

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An interval that represents a work or recovery step in a workout.

## Declaration

```swift
struct IntervalStep
```

## Topics

### Creating interval steps

- [init(\_:goal:alert:)](intervalstep/init%28__goal_alert_%29.md)
- [init(\_:step:)](intervalstep/init%28__step_%29.md): Creates a new interval step.

### Accessing step data

- [purpose](intervalstep/purpose-swift.property.md): The purpose of the interval step.
- [step](intervalstep/step.md): The workout step to perform.

### Enumerations

- [IntervalStep.Purpose](intervalstep/purpose-swift.enum.md): An interval step’s purpose.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom interval workouts

- [CustomWorkout](customworkout.md): A workout that includes a repeating series of work and recovery steps.
- [WorkoutStep](workoutstep.md): A step in a workout.
- [IntervalBlock](intervalblock.md): Blocks of work and recovery steps that repeat in a custom workout.
- [WorkoutGoal](workoutgoal.md): A value that specifies the goal for a workout.
- [WorkoutAlert](workoutalert.md): An alert that notifies the user of significant events during a workout.
