> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/pause(_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/pause(_:))

# pause(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** macOS · watchOS 3.0+ (deprecated in 5.0)

Pauses the provided workout session.

## Declaration

```swift
func pause(_ workoutSession: HKWorkoutSession)
```

## Parameters

- `workoutSession`: The workout session to pause.

<a id="Discussion"></a>

## Discussion

This method pauses the provided session if it is currently running. The workout session’s state transitions to `HKWorkoutSessionStatePaused`, and the system generates an [HKWorkoutEventType.pause](../hkworkouteventtype/pause.md) event and passes it to the workout session delegate’s `workoutSession:didGenerateEvent:` method.

## See Also

### Managing workout sessions

- [workoutSessionMirroringStartHandler](workoutsessionmirroringstarthandler.md): A block that the system calls when it starts a mirrored workout session.
- [startWatchApp(with:completion:)](startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [resumeWorkoutSession(\_:)](resumeworkoutsession%28__%29.md): Deprecated. Resumes the provided workout session.

# pauseWorkoutSession: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** macOS · watchOS 3.0+ (deprecated in 5.0)

Pauses the provided workout session.

## Declaration

```objectivec
- (void) pauseWorkoutSession:(HKWorkoutSession *) workoutSession;
```

## Parameters

- `workoutSession`: The workout session to pause.

<a id="Discussion"></a>

## Discussion

This method pauses the provided session if it is currently running. The workout session’s state transitions to `HKWorkoutSessionStatePaused`, and the system generates an [HKWorkoutEventTypePause](../hkworkouteventtype/pause.md) event and passes it to the workout session delegate’s `workoutSession:didGenerateEvent:` method.

## See Also

### Managing workout sessions

- [workoutSessionMirroringStartHandler](workoutsessionmirroringstarthandler.md): A block that the system calls when it starts a mirrored workout session.
- [startWatchAppWithWorkoutConfiguration:completion:](startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [resumeWorkoutSession:](resumeworkoutsession%28__%29.md): Deprecated. Resumes the provided workout session.
