> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutplan](https://developer.apple.com/documentation/workoutkit/workoutplan)

# WorkoutPlan

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A wrapper around a workout object that your app can use to open the object in Workout or schedule it for later.

## Declaration

```swift
struct WorkoutPlan
```

## Topics

### Creating a workout plan

- [init(\_:id:)](workoutplan/init%28__id_%29.md): Creates a new workout plan from the provided workout and ID.
- [WorkoutPlan.Workout](workoutplan/workout-swift.enum.md): The workout for the workout plan.

### Accessing workout plan data

- [workout](workoutplan/workout-swift.property.md): The workout represented by this plan.

### Opening the workout plan

- [openInWorkoutApp()](workoutplan/openinworkoutapp%28%29.md): Opens the workout in Workout on Apple Watch.

### Initializers

- [init(from:)](workoutplan/init%28from_%29.md)

### Instance Properties

- [dataRepresentation](workoutplan/datarepresentation.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout plans and schedules

- [ScheduledWorkoutPlan](scheduledworkoutplan.md): A wrapper around a workout plan that your app can use to schedule the workout plan.
- [WorkoutScheduler](workoutscheduler.md): An object for scheduling and managing workouts.
