> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/resumeworkoutsession(_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/resumeworkoutsession(_:))

# resumeWorkoutSession(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** macOS · watchOS 3.0+ (deprecated in 5.0)

Resumes the provided workout session.

## Declaration

```swift
func resumeWorkoutSession(_ workoutSession: HKWorkoutSession)
```

## Parameters

- `workoutSession`: The workout session to resume.

<a id="Discussion"></a>

## Discussion

This method resumes the provided session if it is currently paused. The workout session’s state transitions to [HKWorkoutSessionState.running](../hkworkoutsessionstate/running.md), and the system generates an [HKWorkoutEventType.resume](../hkworkouteventtype/resume.md) event and passes it to the workout session delegate’s `workoutSession:didGenerateEvent:` method.

## See Also

### Managing workout sessions

- [workoutSessionMirroringStartHandler](workoutsessionmirroringstarthandler.md): A block that the system calls when it starts a mirrored workout session.
- [startWatchApp(with:completion:)](startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [pause(\_:)](pause%28__%29.md): Deprecated. Pauses the provided workout session.

# resumeWorkoutSession: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** macOS · watchOS 3.0+ (deprecated in 5.0)

Resumes the provided workout session.

## Declaration

```objectivec
- (void) resumeWorkoutSession:(HKWorkoutSession *) workoutSession;
```

## Parameters

- `workoutSession`: The workout session to resume.

<a id="Discussion"></a>

## Discussion

This method resumes the provided session if it is currently paused. The workout session’s state transitions to [HKWorkoutSessionStateRunning](../hkworkoutsessionstate/running.md), and the system generates an [HKWorkoutEventTypeResume](../hkworkouteventtype/resume.md) event and passes it to the workout session delegate’s `workoutSession:didGenerateEvent:` method.

## See Also

### Managing workout sessions

- [workoutSessionMirroringStartHandler](workoutsessionmirroringstarthandler.md): A block that the system calls when it starts a mirrored workout session.
- [startWatchAppWithWorkoutConfiguration:completion:](startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [pauseWorkoutSession:](pause%28__%29.md): Deprecated. Pauses the provided workout session.
