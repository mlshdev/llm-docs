> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutgoal](https://developer.apple.com/documentation/workoutkit/workoutgoal)

# WorkoutGoal

**Framework:** WorkoutKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A value that specifies the goal for a workout.

## Declaration

```swift
enum WorkoutGoal
```

## Topics

### Determining workout goals

- [WorkoutGoal.open](workoutgoal/open.md): An open workout with no set goal.
- [WorkoutGoal.distance(\_:\_:)](workoutgoal/distance%28____%29.md): A goal based on distance traveled during the workout.
- [WorkoutGoal.energy(\_:\_:)](workoutgoal/energy%28____%29.md): A goal based on the amount of energy burned during the workout.
- [WorkoutGoal.time(\_:\_:)](workoutgoal/time%28____%29.md): A goal based on the amount of time that has elapsed during the workout.

### Enumeration Cases

- [WorkoutGoal.poolSwimDistanceWithTime(\_:\_:)](workoutgoal/poolswimdistancewithtime%28____%29.md)

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
- [IntervalStep](intervalstep.md): An interval that represents a work or recovery step in a workout.
- [WorkoutAlert](workoutalert.md): An alert that notifies the user of significant events during a workout.
