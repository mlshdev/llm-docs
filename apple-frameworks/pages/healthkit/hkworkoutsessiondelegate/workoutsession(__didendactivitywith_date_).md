> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didendactivitywith:date:)](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:didendactivitywith:date:))

# workoutSession(\_:didEndActivityWith:date:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Tells the session that the current workout activity ended.

## Declaration

```swift
optional func workoutSession(_ workoutSession: HKWorkoutSession, didEndActivityWith workoutConfiguration: HKWorkoutConfiguration, date: Date)
```

## Parameters

- `workoutSession`: The workout session for the activity that just ended.
- `workoutConfiguration`: The workout configuration object for the activity.
- `date`: The end date and time for the activity.

## See Also

### Tracking workout sessions

- [workoutSession(\_:didChangeTo:from:date:)](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession(\_:didFailWithError:)](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession(\_:didGenerate:)](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession(\_:didBeginActivityWith:date:)](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.

# workoutSession:didEndActivityWithConfiguration:date: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

Tells the session that the current workout activity ended.

## Declaration

```objectivec
- (void) workoutSession:(HKWorkoutSession *) workoutSession didEndActivityWithConfiguration:(HKWorkoutConfiguration *) workoutConfiguration date:(NSDate *) date;
```

## Parameters

- `workoutSession`: The workout session for the activity that just ended.
- `workoutConfiguration`: The workout configuration object for the activity.
- `date`: The end date and time for the activity.

## See Also

### Tracking workout sessions

- [workoutSession:didChangeToState:fromState:date:](workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession:didFailWithError:](workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession:didGenerateEvent:](workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession:didBeginActivityWithConfiguration:date:](workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
