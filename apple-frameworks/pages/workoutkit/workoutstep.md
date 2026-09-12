> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutstep](https://developer.apple.com/documentation/workoutkit/workoutstep)

# WorkoutStep

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A step in a workout.

## Declaration

```swift
struct WorkoutStep
```

## Topics

### Creating new workout steps

- [init(goal:alert:)](workoutstep/init%28goal_alert_%29.md): Creates a new workout step with the provided goal and alerts.

### Accessing step data

- [alert](workoutstep/alert.md): Alerts used during the step.
- [goal](workoutstep/goal.md): A goal that determines when the step ends.

### Initializers

- [init(goal:alert:displayName:)](workoutstep/init%28goal_alert_displayname_%29.md)

### Instance Properties

- [displayName](workoutstep/displayname.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom interval workouts

- [CustomWorkout](customworkout.md): A workout that includes a repeating series of work and recovery steps.
- [IntervalBlock](intervalblock.md): Blocks of work and recovery steps that repeat in a custom workout.
- [IntervalStep](intervalstep.md): An interval that represents a work or recovery step in a workout.
- [WorkoutGoal](workoutgoal.md): A value that specifies the goal for a workout.
- [WorkoutAlert](workoutalert.md): An alert that notifies the user of significant events during a workout.
