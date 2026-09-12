> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/scheduledworkoutplan](https://developer.apple.com/documentation/workoutkit/scheduledworkoutplan)

# ScheduledWorkoutPlan

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A wrapper around a workout plan that your app can use to schedule the workout plan.

## Declaration

```swift
struct ScheduledWorkoutPlan
```

## Topics

### Creating scheduled workout plans

- [init(\_:date:)](scheduledworkoutplan/init%28__date_%29.md): Creates a new scheduled workout plan.

### Accessing plan data

- [plan](scheduledworkoutplan/plan.md): The target workout plan to schedule.
- [date](scheduledworkoutplan/date.md): Date components that determine when the workout should begin.
- [complete](scheduledworkoutplan/complete.md): A Boolean value that indicates whether the workout is complete.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout plans and schedules

- [WorkoutPlan](workoutplan.md): A wrapper around a workout object that your app can use to open the object in Workout or schedule it for later.
- [WorkoutScheduler](workoutscheduler.md): An object for scheduling and managing workouts.
