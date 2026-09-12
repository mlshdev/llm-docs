> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/authorizationstate-swift.enum](https://developer.apple.com/documentation/workoutkit/workoutscheduler/authorizationstate-swift.enum)

# WorkoutScheduler.AuthorizationState

**Framework:** WorkoutKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

The workout scheduler’s authorization status.

## Declaration

```swift
enum AuthorizationState
```

## Topics

### Determining the authorization status

- [WorkoutScheduler.AuthorizationState.authorized](authorizationstate-swift.enum/authorized.md): The user authorized your app to schedule workouts.
- [WorkoutScheduler.AuthorizationState.denied](authorizationstate-swift.enum/denied.md): The user denied authorization for scheduling workouts.
- [WorkoutScheduler.AuthorizationState.notDetermined](authorizationstate-swift.enum/notdetermined.md): Your app hasn’t yet requested authorization to schedule workouts.
- [WorkoutScheduler.AuthorizationState.restricted](authorizationstate-swift.enum/restricted.md): The system restricted your app from scheduling workouts.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Accessing the scheduler

- [shared](shared.md): A shared instance of the workout scheduler.
- [isSupported](issupported.md): A Boolean value that indicates whether the current device supports scheduled workouts.
- [requestAuthorization()](requestauthorization%28%29.md): Requests authorization to schedule workouts.
- [authorizationState](authorizationstate-swift.property.md): The workout scheduler’s authorization status.
