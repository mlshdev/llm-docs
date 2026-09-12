> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didgenerate:)](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didgenerate:))

# workoutSession(\_:didGenerate:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the system generated a workout event.

## Declaration

```swift
optional func workoutSession(_ workoutSession: HKWorkoutSession, didGenerate event: HKWorkoutEvent)
```

## Parameters

- `workoutSession`: The workout session associated with the event.
- `event`: The event that the system generated. For a list of possible values, see [HKWorkoutEvent](../hkworkoutevent.md).

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](../receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

You can save the generated events and use them when creating a [HKWorkout](../hkworkout.md) object for the session.

## See Also

### Tracking workout sessions

- [workoutSession(\_:didChangeTo:from:date:)](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession(\_:didFailWithError:)](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession(\_:didBeginActivityWith:date:)](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession(\_:didEndActivityWith:date:)](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.

# workoutSession:didGenerateEvent: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the system generated a workout event.

## Declaration

```objectivec
- (void) workoutSession:(HKWorkoutSession *) workoutSession didGenerateEvent:(HKWorkoutEvent *) event;
```

## Parameters

- `workoutSession`: The workout session associated with the event.
- `event`: The event that the system generated. For a list of possible values, see [HKWorkoutEvent](../hkworkoutevent.md).

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](../receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

You can save the generated events and use them when creating a [HKWorkout](../hkworkout.md) object for the session.

## See Also

### Tracking workout sessions

- [workoutSession:didChangeToState:fromState:date:](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession:didFailWithError:](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession:didBeginActivityWithConfiguration:date:](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession:didEndActivityWithConfiguration:date:](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.
