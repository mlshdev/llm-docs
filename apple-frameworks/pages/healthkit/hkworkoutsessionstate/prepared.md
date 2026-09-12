> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessionstate/prepared](https://developer.apple.com/documentation/healthkit/hkworkoutsessionstate/prepared)

# HKWorkoutSessionState.prepared (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

The session is ready but not yet running.

## Declaration

```swift
case prepared
```

<a id="Discussion"></a>

## Discussion

The app can continue to run in the background, even after the user lowers their wrist, but it doesn’t yet generate workout data.

## See Also

### Related Documentation

- [prepare()](../hkworkoutsession/prepare%28%29.md): Prepares the workout session.

### Session states

- [HKWorkoutSessionState.notStarted](notstarted.md): The workout session has not started.
- [HKWorkoutSessionState.running](running.md): The workout session is running.
- [HKWorkoutSessionState.paused](paused.md): The workout session has paused.
- [HKWorkoutSessionState.stopped](stopped.md): The session has stopped.
- [HKWorkoutSessionState.ended](ended.md): The workout session has ended.

# HKWorkoutSessionStatePrepared (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

The session is ready but not yet running.

## Declaration

```objectivec
HKWorkoutSessionStatePrepared
```

<a id="Discussion"></a>

## Discussion

The app can continue to run in the background, even after the user lowers their wrist, but it doesn’t yet generate workout data.

## See Also

### Related Documentation

- [prepare](../hkworkoutsession/prepare%28%29.md): Prepares the workout session.

### Session states

- [HKWorkoutSessionStateNotStarted](notstarted.md): The workout session has not started.
- [HKWorkoutSessionStateRunning](running.md): The workout session is running.
- [HKWorkoutSessionStatePaused](paused.md): The workout session has paused.
- [HKWorkoutSessionStateStopped](stopped.md): The session has stopped.
- [HKWorkoutSessionStateEnded](ended.md): The workout session has ended.
