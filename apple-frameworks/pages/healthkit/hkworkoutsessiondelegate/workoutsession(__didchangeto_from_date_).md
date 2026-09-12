> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didchangeto:from:date:)](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didchangeto:from:date:))

# workoutSession(\_:didChangeTo:from:date:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session’s state changed.

## Declaration

```swift
func workoutSession(_ workoutSession: HKWorkoutSession, didChangeTo toState: HKWorkoutSessionState, from fromState: HKWorkoutSessionState, date: Date)
```

## Parameters

- `workoutSession`: The workout session that changed.
- `toState`: The session’s new state. For a list of possible values, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).
- `fromState`: The session’s previous state. For a list of possible values, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).
- `date`: A date object indicating when the state change occurred.

<a id="Discussion"></a>

## Discussion

If your application is suspended, the delegate receives this call after the application resumes. This means you may receive the notification long after the state changed. Check the `date` parameter to determine when the state change actually occurred.

For a list of possible session states, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).

## See Also

### Tracking workout sessions

- [workoutSession(\_:didFailWithError:)](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession(\_:didGenerate:)](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession(\_:didBeginActivityWith:date:)](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession(\_:didEndActivityWith:date:)](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.

# workoutSession:didChangeToState:fromState:date: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session’s state changed.

## Declaration

```objectivec
- (void) workoutSession:(HKWorkoutSession *) workoutSession didChangeToState:(HKWorkoutSessionState) toState fromState:(HKWorkoutSessionState) fromState date:(NSDate *) date;
```

## Parameters

- `workoutSession`: The workout session that changed.
- `toState`: The session’s new state. For a list of possible values, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).
- `fromState`: The session’s previous state. For a list of possible values, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).
- `date`: A date object indicating when the state change occurred.

<a id="Discussion"></a>

## Discussion

If your application is suspended, the delegate receives this call after the application resumes. This means you may receive the notification long after the state changed. Check the `date` parameter to determine when the state change actually occurred.

For a list of possible session states, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).

## See Also

### Tracking workout sessions

- [workoutSession:didFailWithError:](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession:didGenerateEvent:](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession:didBeginActivityWithConfiguration:date:](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession:didEndActivityWithConfiguration:date:](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.
