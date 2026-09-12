> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/markcomplete(_:at:)](https://developer.apple.com/documentation/workoutkit/workoutscheduler/markcomplete(_:at:))

# markComplete(\_:at:)

**Framework:** WorkoutKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Marks the workout as complete.

## Declaration

```swift
final func markComplete(_ workout: WorkoutPlan, at: DateComponents) async
```

## See Also

### Managing scheduled workouts

- [scheduledWorkouts](scheduledworkouts.md): An array of all the workouts scheduled by your app.
- [maxAllowedScheduledWorkoutCount](maxallowedscheduledworkoutcount.md): The maximum number of workouts your app can schedule.
- [remove(\_:at:)](remove%28__at_%29.md): Removes the scheduled workout.
- [removeAllWorkouts()](removeallworkouts%28%29.md): Removes all scheduled workouts.
