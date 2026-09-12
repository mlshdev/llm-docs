> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessionstate/ended](https://developer.apple.com/documentation/healthkit/hkworkoutsessionstate/ended)

# HKWorkoutSessionState.ended (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The workout session has ended.

## Declaration

```swift
case ended
```

<a id="Discussion"></a>

## Discussion

The watch can no longer run in the background. Its sensors return to normal, and it no longer generates workout data. You can’t restart or reuse the workout session.

## See Also

### Related Documentation

- [end()](../hkworkoutsession/end%28%29.md): Ends the workout session.

### Session states

- [HKWorkoutSessionState.notStarted](notstarted.md): The workout session has not started.
- [HKWorkoutSessionState.prepared](prepared.md): The session is ready but not yet running.
- [HKWorkoutSessionState.running](running.md): The workout session is running.
- [HKWorkoutSessionState.paused](paused.md): The workout session has paused.
- [HKWorkoutSessionState.stopped](stopped.md): The session has stopped.

# HKWorkoutSessionStateEnded (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The workout session has ended.

## Declaration

```objectivec
HKWorkoutSessionStateEnded
```

<a id="Discussion"></a>

## Discussion

The watch can no longer run in the background. Its sensors return to normal, and it no longer generates workout data. You can’t restart or reuse the workout session.

## See Also

### Related Documentation

- [end](../hkworkoutsession/end%28%29.md): Ends the workout session.

### Session states

- [HKWorkoutSessionStateNotStarted](notstarted.md): The workout session has not started.
- [HKWorkoutSessionStatePrepared](prepared.md): The session is ready but not yet running.
- [HKWorkoutSessionStateRunning](running.md): The workout session is running.
- [HKWorkoutSessionStatePaused](paused.md): The workout session has paused.
- [HKWorkoutSessionStateStopped](stopped.md): The session has stopped.
