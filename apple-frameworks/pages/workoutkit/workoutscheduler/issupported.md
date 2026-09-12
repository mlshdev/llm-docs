> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/issupported](https://developer.apple.com/documentation/workoutkit/workoutscheduler/issupported)

# isSupported

**Framework:** WorkoutKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A Boolean value that indicates whether the current device supports scheduled workouts.

## Declaration

```swift
static var isSupported: Bool { get }
```

## See Also

### Accessing the scheduler

- [shared](shared.md): A shared instance of the workout scheduler.
- [requestAuthorization()](requestauthorization%28%29.md): Requests authorization to schedule workouts.
- [authorizationState](authorizationstate-swift.property.md): The workout scheduler’s authorization status.
- [WorkoutScheduler.AuthorizationState](authorizationstate-swift.enum.md): The workout scheduler’s authorization status.
