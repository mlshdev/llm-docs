> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/scheduledworkouts](https://developer.apple.com/documentation/workoutkit/workoutscheduler/scheduledworkouts)

# scheduledWorkouts

**Framework:** WorkoutKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An array of all the workouts scheduled by your app.

## Declaration

```swift
final var scheduledWorkouts: [ScheduledWorkoutPlan] { get async }
```

## See Also

### Managing scheduled workouts

- [maxAllowedScheduledWorkoutCount](maxallowedscheduledworkoutcount.md): The maximum number of workouts your app can schedule.
- [markComplete(\_:at:)](markcomplete%28__at_%29.md): Marks the workout as complete.
- [remove(\_:at:)](remove%28__at_%29.md): Removes the scheduled workout.
- [removeAllWorkouts()](removeallworkouts%28%29.md): Removes all scheduled workouts.
