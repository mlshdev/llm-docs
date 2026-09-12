> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/start(_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/start(_:))

# start(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Starts a workout session for the current app.

> Use HKWorkoutSession's start method

## Declaration

```swift
func start(_ workoutSession: HKWorkoutSession)
```

## Parameters

- `workoutSession`: The workout session to start. You cannot restart a workout session that has stopped. If you pass in a session that is running or has stopped, the system returns an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

<a id="Discussion"></a>

## Discussion

Workout sessions allow apps to run in the foreground. The current Foreground App appears when the user wakes the watch. Additionally, Apple Watch sets its sensors based on the workout activity and location types for more accurate measurements and better performance.

Apple Watch can only run one workout session at a time. If a second workout is started while your workout is running, your [HKWorkoutSessionDelegate](../hkworkoutsessiondelegate.md) object receives an HKErrorAnotherWorkoutSession error, and your session ends.

This method returns immediately, however the work is performed asynchronously on an anonymous serial background queue. If successful, the session’s state transitions to [HKWorkoutSessionState.running](../hkworkoutsessionstate/running.md), and the system calls the session delegate’s [workoutSession(\_:didChangeTo:from:date:)](../hkworkoutsessiondelegate/workoutsession%28__didchangeto_from_date_%29.md) method.

## See Also

### Deprecated symbols

- [add(\_:to:completion:)](add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.
- [end(\_:)](end%28__%29.md): Deprecated. Ends a workout session for the current app.

# startWorkoutSession: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Starts a workout session for the current app.

> Use HKWorkoutSession's start method

## Declaration

```objectivec
- (void) startWorkoutSession:(HKWorkoutSession *) workoutSession;
```

## Parameters

- `workoutSession`: The workout session to start. You cannot restart a workout session that has stopped. If you pass in a session that is running or has stopped, the system returns an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

<a id="Discussion"></a>

## Discussion

Workout sessions allow apps to run in the foreground. The current Foreground App appears when the user wakes the watch. Additionally, Apple Watch sets its sensors based on the workout activity and location types for more accurate measurements and better performance.

Apple Watch can only run one workout session at a time. If a second workout is started while your workout is running, your [HKWorkoutSessionDelegate](../hkworkoutsessiondelegate.md) object receives an HKErrorAnotherWorkoutSession error, and your session ends.

This method returns immediately, however the work is performed asynchronously on an anonymous serial background queue. If successful, the session’s state transitions to [HKWorkoutSessionStateRunning](../hkworkoutsessionstate/running.md), and the system calls the session delegate’s [workoutSession:didChangeToState:fromState:date:](../hkworkoutsessiondelegate/workoutsession%28__didchangeto_from_date_%29.md) method.

## See Also

### Deprecated symbols

- [addSamples:toWorkout:completion:](add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.
- [endWorkoutSession:](end%28__%29.md): Deprecated. Ends a workout session for the current app.
