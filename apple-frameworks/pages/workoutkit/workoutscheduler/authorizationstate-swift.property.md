> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/authorizationstate-swift.property](https://developer.apple.com/documentation/workoutkit/workoutscheduler/authorizationstate-swift.property)

# authorizationState

**Framework:** WorkoutKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

The workout scheduler’s authorization status.

## Declaration

```swift
final var authorizationState: WorkoutScheduler.AuthorizationState { get async }
```

## See Also

### Accessing the scheduler

- [shared](shared.md): A shared instance of the workout scheduler.
- [isSupported](issupported.md): A Boolean value that indicates whether the current device supports scheduled workouts.
- [requestAuthorization()](requestauthorization%28%29.md): Requests authorization to schedule workouts.
- [WorkoutScheduler.AuthorizationState](authorizationstate-swift.enum.md): The workout scheduler’s authorization status.
