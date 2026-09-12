> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessionstate](https://developer.apple.com/documentation/healthkit/hkworkoutsessionstate)

# HKWorkoutSessionState (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

A workout session’s state.

## Declaration

```swift
enum HKWorkoutSessionState
```

## Topics

### Session states

- [HKWorkoutSessionState.notStarted](hkworkoutsessionstate/notstarted.md): The workout session has not started.
- [HKWorkoutSessionState.prepared](hkworkoutsessionstate/prepared.md): The session is ready but not yet running.
- [HKWorkoutSessionState.running](hkworkoutsessionstate/running.md): The workout session is running.
- [HKWorkoutSessionState.paused](hkworkoutsessionstate/paused.md): The workout session has paused.
- [HKWorkoutSessionState.stopped](hkworkoutsessionstate/stopped.md): The session has stopped.
- [HKWorkoutSessionState.ended](hkworkoutsessionstate/ended.md): The workout session has ended.

### Initializers

- [init(rawValue:)](hkworkoutsessionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.

# HKWorkoutSessionState (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

A workout session’s state.

## Declaration

```objectivec
enum HKWorkoutSessionState : NSInteger;
```

## Topics

### Session states

- [HKWorkoutSessionStateNotStarted](hkworkoutsessionstate/notstarted.md): The workout session has not started.
- [HKWorkoutSessionStatePrepared](hkworkoutsessionstate/prepared.md): The session is ready but not yet running.
- [HKWorkoutSessionStateRunning](hkworkoutsessionstate/running.md): The workout session is running.
- [HKWorkoutSessionStatePaused](hkworkoutsessionstate/paused.md): The workout session has paused.
- [HKWorkoutSessionStateStopped](hkworkoutsessionstate/stopped.md): The session has stopped.
- [HKWorkoutSessionStateEnded](hkworkoutsessionstate/ended.md): The workout session has ended.

## See Also

### Sessions

- [Running workout sessions](running-workout-sessions.md): Track a workout on Apple Watch.
- [Build a workout app for Apple Watch](build-a-workout-app-for-apple-watch.md): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.
- [Building a multidevice workout app](building-a-multidevice-workout-app.md): Mirror a workout from a watchOS app to its companion iOS app, and perform bidirectional communication between them.
- [Building a workout app for iPhone and iPad](building-a-workout-app-for-iphone-and-ipad.md): Start a workout in iOS, control it from the Lock Screen with App Intents, and present the workout status with Live Activities.
- [HKWorkoutSession](hkworkoutsession.md): A session that tracks a person’s workout.
- [HKWorkoutConfiguration](hkworkoutconfiguration.md): An object that contains configuration information about a workout session.
- [HKLiveWorkoutBuilder](hkliveworkoutbuilder.md): A builder object that constructs a workout incrementally based on live data from an active workout session.
- [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md): A protocol that defines methods for receiving updates from a live workout builder.
- [HKLiveWorkoutDataSource](hkliveworkoutdatasource.md): A data source that automatically provides live data from an active workout session.
