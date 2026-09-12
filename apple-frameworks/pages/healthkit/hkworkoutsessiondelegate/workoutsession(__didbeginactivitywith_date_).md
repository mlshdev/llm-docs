> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didbeginactivitywith:date:)](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didbeginactivitywith:date:))

# workoutSession(\_:didBeginActivityWith:date:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Tells the delegate that a new workout session began.

## Declaration

```swift
optional func workoutSession(_ workoutSession: HKWorkoutSession, didBeginActivityWith workoutConfiguration: HKWorkoutConfiguration, date: Date)
```

## Parameters

- `workoutSession`: The workout session that receives the new activity.
- `workoutConfiguration`: The workout configuration object for the new activity.
- `date`: The activity’s start date and time.

## See Also

### Tracking workout sessions

- [workoutSession(\_:didChangeTo:from:date:)](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession(\_:didFailWithError:)](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession(\_:didGenerate:)](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession(\_:didEndActivityWith:date:)](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.

# workoutSession:didBeginActivityWithConfiguration:date: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

Tells the delegate that a new workout session began.

## Declaration

```objectivec
- (void) workoutSession:(HKWorkoutSession *) workoutSession didBeginActivityWithConfiguration:(HKWorkoutConfiguration *) workoutConfiguration date:(NSDate *) date;
```

## Parameters

- `workoutSession`: The workout session that receives the new activity.
- `workoutConfiguration`: The workout configuration object for the new activity.
- `date`: The activity’s start date and time.

## See Also

### Tracking workout sessions

- [workoutSession:didChangeToState:fromState:date:](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession:didFailWithError:](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession:didGenerateEvent:](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession:didEndActivityWithConfiguration:date:](workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.
