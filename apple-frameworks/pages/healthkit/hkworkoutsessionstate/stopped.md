> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessionstate/stopped](https://developer.apple.com/documentation/healthkit/hkworkoutsessionstate/stopped)

# HKWorkoutSessionState.stopped (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

The session has stopped.

## Declaration

```swift
case stopped
```

<a id="Discussion"></a>

## Discussion

As soon as the session stops, the watch’s sensors return to normal, and it no longer generates workout data; however, the app can continue to run in the background, even after the user lowers their wrist.

You can’t restart or reuse the workout session.

## See Also

### Session states

- [HKWorkoutSessionState.notStarted](notstarted.md): The workout session has not started.
- [HKWorkoutSessionState.prepared](prepared.md): The session is ready but not yet running.
- [HKWorkoutSessionState.running](running.md): The workout session is running.
- [HKWorkoutSessionState.paused](paused.md): The workout session has paused.
- [HKWorkoutSessionState.ended](ended.md): The workout session has ended.

# HKWorkoutSessionStateStopped (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

The session has stopped.

## Declaration

```objectivec
HKWorkoutSessionStateStopped
```

<a id="Discussion"></a>

## Discussion

As soon as the session stops, the watch’s sensors return to normal, and it no longer generates workout data; however, the app can continue to run in the background, even after the user lowers their wrist.

You can’t restart or reuse the workout session.

## See Also

### Session states

- [HKWorkoutSessionStateNotStarted](notstarted.md): The workout session has not started.
- [HKWorkoutSessionStatePrepared](prepared.md): The session is ready but not yet running.
- [HKWorkoutSessionStateRunning](running.md): The workout session is running.
- [HKWorkoutSessionStatePaused](paused.md): The workout session has paused.
- [HKWorkoutSessionStateEnded](ended.md): The workout session has ended.
