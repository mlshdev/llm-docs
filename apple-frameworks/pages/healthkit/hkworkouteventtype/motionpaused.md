> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkouteventtype/motionpaused](https://developer.apple.com/documentation/healthkit/hkworkouteventtype/motionpaused)

# HKWorkoutEventType.motionPaused (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A constant indicating that the system has automatically paused a workout session.

## Declaration

```swift
case motionPaused
```

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](../receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

During running workout sessions, Apple Watch can automatically generate motion pause events when the user stops moving. Users can enable or disable this feature using the watch’s Settings \> General \> Workout \> Autopause setting.

## See Also

### Events

- [HKWorkoutEventType.pause](pause.md): A constant indicating that the workout has paused.
- [HKWorkoutEventType.resume](resume.md): A constant indicating that the workout has resumed.
- [HKWorkoutEventType.motionResumed](motionresumed.md): A constant indicating that the system has automatically resumed a workout session.
- [HKWorkoutEventType.pauseOrResumeRequest](pauseorresumerequest.md): A constant indicating that the user has requested a pause or resume.
- [HKWorkoutEventType.lap](lap.md): A constant indicating a lap.
- [HKWorkoutEventType.segment](segment.md): A constant indicating a period of time of interest during a workout.
- [HKWorkoutEventType.marker](marker.md): A constant indicating a point of interest during a workout session.

# HKWorkoutEventTypeMotionPaused (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A constant indicating that the system has automatically paused a workout session.

## Declaration

```objectivec
HKWorkoutEventTypeMotionPaused
```

## Mentioned In

- [Receiving Downhill Skiing and Snowboarding Data](../receiving-downhill-skiing-and-snowboarding-data.md)

<a id="Discussion"></a>

## Discussion

During running workout sessions, Apple Watch can automatically generate motion pause events when the user stops moving. Users can enable or disable this feature using the watch’s Settings \> General \> Workout \> Autopause setting.

## See Also

### Events

- [HKWorkoutEventTypePause](pause.md): A constant indicating that the workout has paused.
- [HKWorkoutEventTypeResume](resume.md): A constant indicating that the workout has resumed.
- [HKWorkoutEventTypeMotionResumed](motionresumed.md): A constant indicating that the system has automatically resumed a workout session.
- [HKWorkoutEventTypePauseOrResumeRequest](pauseorresumerequest.md): A constant indicating that the user has requested a pause or resume.
- [HKWorkoutEventTypeLap](lap.md): A constant indicating a lap.
- [HKWorkoutEventTypeSegment](segment.md): A constant indicating a period of time of interest during a workout.
- [HKWorkoutEventTypeMarker](marker.md): A constant indicating a point of interest during a workout session.
