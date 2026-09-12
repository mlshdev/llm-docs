> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkouteventtype/segment](https://developer.apple.com/documentation/healthkit/hkworkouteventtype/segment)

# HKWorkoutEventType.segment (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A constant indicating a period of time of interest during a workout.

## Declaration

```swift
case segment
```

<a id="Discussion"></a>

## Discussion

Use segments to highlight important time periods during a workout. For example, you could use different segments to mark when a runner is going up or downhill. Similarly, when swimming, you can use segments to group consecutive laps with the same style of stroke.

Unlike laps, segments can freely overlap.

## See Also

### Events

- [HKWorkoutEventType.pause](pause.md): A constant indicating that the workout has paused.
- [HKWorkoutEventType.resume](resume.md): A constant indicating that the workout has resumed.
- [HKWorkoutEventType.motionPaused](motionpaused.md): A constant indicating that the system has automatically paused a workout session.
- [HKWorkoutEventType.motionResumed](motionresumed.md): A constant indicating that the system has automatically resumed a workout session.
- [HKWorkoutEventType.pauseOrResumeRequest](pauseorresumerequest.md): A constant indicating that the user has requested a pause or resume.
- [HKWorkoutEventType.lap](lap.md): A constant indicating a lap.
- [HKWorkoutEventType.marker](marker.md): A constant indicating a point of interest during a workout session.

# HKWorkoutEventTypeSegment (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A constant indicating a period of time of interest during a workout.

## Declaration

```objectivec
HKWorkoutEventTypeSegment
```

<a id="Discussion"></a>

## Discussion

Use segments to highlight important time periods during a workout. For example, you could use different segments to mark when a runner is going up or downhill. Similarly, when swimming, you can use segments to group consecutive laps with the same style of stroke.

Unlike laps, segments can freely overlap.

## See Also

### Events

- [HKWorkoutEventTypePause](pause.md): A constant indicating that the workout has paused.
- [HKWorkoutEventTypeResume](resume.md): A constant indicating that the workout has resumed.
- [HKWorkoutEventTypeMotionPaused](motionpaused.md): A constant indicating that the system has automatically paused a workout session.
- [HKWorkoutEventTypeMotionResumed](motionresumed.md): A constant indicating that the system has automatically resumed a workout session.
- [HKWorkoutEventTypePauseOrResumeRequest](pauseorresumerequest.md): A constant indicating that the user has requested a pause or resume.
- [HKWorkoutEventTypeLap](lap.md): A constant indicating a lap.
- [HKWorkoutEventTypeMarker](marker.md): A constant indicating a point of interest during a workout session.
