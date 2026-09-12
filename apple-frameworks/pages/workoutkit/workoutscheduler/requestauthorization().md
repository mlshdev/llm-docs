> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/requestauthorization()](https://developer.apple.com/documentation/workoutkit/workoutscheduler/requestauthorization())

# requestAuthorization()

**Framework:** WorkoutKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Requests authorization to schedule workouts.

## Declaration

```swift
final func requestAuthorization() async -> WorkoutScheduler.AuthorizationState
```

## See Also

### Accessing the scheduler

- [shared](shared.md): A shared instance of the workout scheduler.
- [isSupported](issupported.md): A Boolean value that indicates whether the current device supports scheduled workouts.
- [authorizationState](authorizationstate-swift.property.md): The workout scheduler’s authorization status.
- [WorkoutScheduler.AuthorizationState](authorizationstate-swift.enum.md): The workout scheduler’s authorization status.
