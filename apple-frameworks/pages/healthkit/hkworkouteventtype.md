> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkouteventtype](https://developer.apple.com/documentation/healthkit/hkworkouteventtype)

# HKWorkoutEventType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that represent events occurring during a workout.

## Declaration

```swift
enum HKWorkoutEventType
```

## Topics

### Events

- [HKWorkoutEventType.pause](hkworkouteventtype/pause.md): A constant indicating that the workout has paused.
- [HKWorkoutEventType.resume](hkworkouteventtype/resume.md): A constant indicating that the workout has resumed.
- [HKWorkoutEventType.motionPaused](hkworkouteventtype/motionpaused.md): A constant indicating that the system has automatically paused a workout session.
- [HKWorkoutEventType.motionResumed](hkworkouteventtype/motionresumed.md): A constant indicating that the system has automatically resumed a workout session.
- [HKWorkoutEventType.pauseOrResumeRequest](hkworkouteventtype/pauseorresumerequest.md): A constant indicating that the user has requested a pause or resume.
- [HKWorkoutEventType.lap](hkworkouteventtype/lap.md): A constant indicating a lap.
- [HKWorkoutEventType.segment](hkworkouteventtype/segment.md): A constant indicating a period of time of interest during a workout.
- [HKWorkoutEventType.marker](hkworkouteventtype/marker.md): A constant indicating a point of interest during a workout session.

### Initializers

- [init(rawValue:)](hkworkouteventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKWorkoutEventType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that represent events occurring during a workout.

## Declaration

```objectivec
enum HKWorkoutEventType : NSInteger;
```

## Topics

### Events

- [HKWorkoutEventTypePause](hkworkouteventtype/pause.md): A constant indicating that the workout has paused.
- [HKWorkoutEventTypeResume](hkworkouteventtype/resume.md): A constant indicating that the workout has resumed.
- [HKWorkoutEventTypeMotionPaused](hkworkouteventtype/motionpaused.md): A constant indicating that the system has automatically paused a workout session.
- [HKWorkoutEventTypeMotionResumed](hkworkouteventtype/motionresumed.md): A constant indicating that the system has automatically resumed a workout session.
- [HKWorkoutEventTypePauseOrResumeRequest](hkworkouteventtype/pauseorresumerequest.md): A constant indicating that the user has requested a pause or resume.
- [HKWorkoutEventTypeLap](hkworkouteventtype/lap.md): A constant indicating a lap.
- [HKWorkoutEventTypeSegment](hkworkouteventtype/segment.md): A constant indicating a period of time of interest during a workout.
- [HKWorkoutEventTypeMarker](hkworkouteventtype/marker.md): A constant indicating a point of interest during a workout session.
