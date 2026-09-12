> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/intervalblock](https://developer.apple.com/documentation/workoutkit/intervalblock)

# IntervalBlock

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Blocks of work and recovery steps that repeat in a custom workout.

## Declaration

```swift
struct IntervalBlock
```

## Topics

### Creating an interval block

- [init(steps:iterations:)](intervalblock/init%28steps_iterations_%29.md): Creates a new interval block, in which the workout repeats the provided steps the specified number of times.

### Accessing interval block properties

- [steps](intervalblock/steps.md): A series of work and recovery steps for the interval block.
- [iterations](intervalblock/iterations.md): The number of times the interval block repeats its steps.

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
- [IntervalStep](intervalstep.md): An interval that represents a work or recovery step in a workout.
- [WorkoutGoal](workoutgoal.md): A value that specifies the goal for a workout.
- [WorkoutAlert](workoutalert.md): An alert that notifies the user of significant events during a workout.
