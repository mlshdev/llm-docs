> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler](https://developer.apple.com/documentation/workoutkit/workoutscheduler)

# WorkoutScheduler

**Framework:** WorkoutKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An object for scheduling and managing workouts.

## Declaration

```swift
final class WorkoutScheduler
```

## Topics

### Accessing the scheduler

- [shared](workoutscheduler/shared.md): A shared instance of the workout scheduler.
- [isSupported](workoutscheduler/issupported.md): A Boolean value that indicates whether the current device supports scheduled workouts.
- [requestAuthorization()](workoutscheduler/requestauthorization%28%29.md): Requests authorization to schedule workouts.
- [authorizationState](workoutscheduler/authorizationstate-swift.property.md): The workout scheduler’s authorization status.
- [WorkoutScheduler.AuthorizationState](workoutscheduler/authorizationstate-swift.enum.md): The workout scheduler’s authorization status.

### Scheduling workouts

- [schedule(\_:at:)](workoutscheduler/schedule%28__at_%29.md): Schedules the provided workout at the specified date.

### Managing scheduled workouts

- [scheduledWorkouts](workoutscheduler/scheduledworkouts.md): An array of all the workouts scheduled by your app.
- [maxAllowedScheduledWorkoutCount](workoutscheduler/maxallowedscheduledworkoutcount.md): The maximum number of workouts your app can schedule.
- [markComplete(\_:at:)](workoutscheduler/markcomplete%28__at_%29.md): Marks the workout as complete.
- [remove(\_:at:)](workoutscheduler/remove%28__at_%29.md): Removes the scheduled workout.
- [removeAllWorkouts()](workoutscheduler/removeallworkouts%28%29.md): Removes all scheduled workouts.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout plans and schedules

- [WorkoutPlan](workoutplan.md): A wrapper around a workout object that your app can use to open the object in Workout or schedule it for later.
- [ScheduledWorkoutPlan](scheduledworkoutplan.md): A wrapper around a workout plan that your app can use to schedule the workout plan.
