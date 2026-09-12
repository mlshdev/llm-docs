> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/end(_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/end(_:))

# end(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Ends a workout session for the current app.

> Use HKWorkoutSession's end method

## Declaration

```swift
func end(_ workoutSession: HKWorkoutSession)
```

## Parameters

- `workoutSession`: A currently running workout session. If the session is not running,  the system returns an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

<a id="Discussion"></a>

## Discussion

This method returns immediately; however, the work is performed asynchronously on an anonymous serial background queue. If successful, the session’s state transitions to [HKWorkoutSessionState.ended](../hkworkoutsessionstate/ended.md), and the system calls the session delegate’s [workoutSession(\_:didChangeTo:from:date:)](../hkworkoutsessiondelegate/workoutsession%28__didchangeto_from_date_%29.md) method.

## See Also

### Deprecated symbols

- [add(\_:to:completion:)](add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.
- [start(\_:)](start%28__%29.md): Deprecated. Starts a workout session for the current app.

# endWorkoutSession: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Ends a workout session for the current app.

> Use HKWorkoutSession's end method

## Declaration

```objectivec
- (void) endWorkoutSession:(HKWorkoutSession *) workoutSession;
```

## Parameters

- `workoutSession`: A currently running workout session. If the session is not running,  the system returns an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

<a id="Discussion"></a>

## Discussion

This method returns immediately; however, the work is performed asynchronously on an anonymous serial background queue. If successful, the session’s state transitions to [HKWorkoutSessionStateEnded](../hkworkoutsessionstate/ended.md), and the system calls the session delegate’s [workoutSession:didChangeToState:fromState:date:](../hkworkoutsessiondelegate/workoutsession%28__didchangeto_from_date_%29.md) method.

## See Also

### Deprecated symbols

- [addSamples:toWorkout:completion:](add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.
- [startWorkoutSession:](start%28__%29.md): Deprecated. Starts a workout session for the current app.
