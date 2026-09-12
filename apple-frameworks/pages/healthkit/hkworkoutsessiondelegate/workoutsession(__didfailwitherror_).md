> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didfailwitherror:)](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didfailwitherror:))

# workoutSession(\_:didFailWithError:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session failed with an error.

## Declaration

```swift
func workoutSession(_ workoutSession: HKWorkoutSession, didFailWithError error: any Error)
```

## Parameters

- `workoutSession`: The workout session that failed.
- `error`: An error object describing the failure.

<a id="Discussion"></a>

## Discussion

When the state of the workout session changes due to an error, HealthKit always calls this method before calling the [workoutSession(\_:didChangeTo:from:date:)](workoutsession%28__didchangeto_from_date_%29.md) method.

For example, if a second app starts a workout session, HealthKit calls the current session’s [workoutSession(\_:didFailWithError:)](workoutsession%28__didfailwitherror_%29.md) method. Next, it changes current session’s state to the [HKWorkoutSessionState.ended](../hkworkoutsessionstate/ended.md) value. Finally, HealthKit calls the current session’s [workoutSession(\_:didChangeTo:from:date:)](workoutsession%28__didchangeto_from_date_%29.md) method.

## See Also

### Tracking workout sessions

- [workoutSession(\_:didChangeTo:from:date:)](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession(\_:didGenerate:)](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession(\_:didBeginActivityWith:date:)](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession(\_:didEndActivityWith:date:)](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.

# workoutSession:didFailWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session failed with an error.

## Declaration

```objectivec
- (void) workoutSession:(HKWorkoutSession *) workoutSession didFailWithError:(NSError *) error;
```

## Parameters

- `workoutSession`: The workout session that failed.
- `error`: An error object describing the failure.

<a id="Discussion"></a>

## Discussion

When the state of the workout session changes due to an error, HealthKit always calls this method before calling the [workoutSession:didChangeToState:fromState:date:](workoutsession%28__didchangeto_from_date_%29.md) method.

For example, if a second app starts a workout session, HealthKit calls the current session’s [workoutSession:didFailWithError:](workoutsession%28__didfailwitherror_%29.md) method. Next, it changes current session’s state to the [HKWorkoutSessionStateEnded](../hkworkoutsessionstate/ended.md) value. Finally, HealthKit calls the current session’s [workoutSession:didChangeToState:fromState:date:](workoutsession%28__didchangeto_from_date_%29.md) method.

## See Also

### Tracking workout sessions

- [workoutSession:didChangeToState:fromState:date:](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession:didGenerateEvent:](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession:didBeginActivityWithConfiguration:date:](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession:didEndActivityWithConfiguration:date:](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.
