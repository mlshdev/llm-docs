> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/workoutsessionmirroringstarthandler](https://developer.apple.com/documentation/healthkit/hkhealthstore/workoutsessionmirroringstarthandler)

# workoutSessionMirroringStartHandler (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

A block that the system calls when it starts a mirrored workout session.

## Declaration

```swift
var workoutSessionMirroringStartHandler: (@Sendable (HKWorkoutSession) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system calls this block on the companion iPhone when someone starts a mirrored workout on Apple Watch. If your iOS app isn’t active, the system launches it in the background.

```swift
// The HealthKit store calls this closure when Apple Watch starts a remote session.
store.workoutSessionMirroringStartHandler = { mirroredSession in
    // Reset the health data.
    self.data = HealthData()

    // Save a reference to the workout session.
    self.session = mirroredSession
    logger.debug("*** A session started on the companion Apple Watch. ***")
}
```

To ensure that your app can always catch incoming mirrored workout sessions, assign this property as soon as your app launches.

> **Important**

>  Your app may receive multiple calls to [workoutSessionMirroringStartHandler](workoutsessionmirroringstarthandler.md). If iPhone and Apple Watch lose their connection in the middle of a workout session, Apple Watch automatically tries to reconnect. Each call has its own [HKWorkoutSession](../hkworkoutsession.md) instance.

The system calls this block from an arbitrary background queue.

## See Also

### Managing workout sessions

- [startWatchApp(with:completion:)](startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [pause(\_:)](pause%28__%29.md): Deprecated. Pauses the provided workout session.
- [resumeWorkoutSession(\_:)](resumeworkoutsession%28__%29.md): Deprecated. Resumes the provided workout session.

# workoutSessionMirroringStartHandler (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

A block that the system calls when it starts a mirrored workout session.

## Declaration

```objectivec
@property (copy, nullable) void (^)(HKWorkoutSession *) workoutSessionMirroringStartHandler;
```

<a id="Discussion"></a>

## Discussion

The system calls this block on the companion iPhone when someone starts a mirrored workout on Apple Watch. If your iOS app isn’t active, the system launches it in the background.

```swift
// The HealthKit store calls this closure when Apple Watch starts a remote session.
store.workoutSessionMirroringStartHandler = { mirroredSession in
    // Reset the health data.
    self.data = HealthData()

    // Save a reference to the workout session.
    self.session = mirroredSession
    logger.debug("*** A session started on the companion Apple Watch. ***")
}
```

To ensure that your app can always catch incoming mirrored workout sessions, assign this property as soon as your app launches.

> **Important**

>  Your app may receive multiple calls to [workoutSessionMirroringStartHandler](workoutsessionmirroringstarthandler.md). If iPhone and Apple Watch lose their connection in the middle of a workout session, Apple Watch automatically tries to reconnect. Each call has its own [HKWorkoutSession](../hkworkoutsession.md) instance.

The system calls this block from an arbitrary background queue.

## See Also

### Managing workout sessions

- [startWatchAppWithWorkoutConfiguration:completion:](startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [pauseWorkoutSession:](pause%28__%29.md): Deprecated. Pauses the provided workout session.
- [resumeWorkoutSession:](resumeworkoutsession%28__%29.md): Deprecated. Resumes the provided workout session.
