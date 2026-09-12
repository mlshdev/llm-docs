> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/blockingmode](https://developer.apple.com/documentation/appkit/nsanimation/blockingmode)

# NSAnimation.BlockingMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants indicate the blocking mode of an `NSAnimation` object when it is running.

## Declaration

```swift
enum BlockingMode
```

<a id="overview"></a>

## Overview

You specify one of these constants in the [animationBlockingMode](animationblockingmode.md) property.

## Topics

### Constants

- [NSAnimation.BlockingMode.blocking](blockingmode/blocking.md): Requests the animation to run in the main thread in a custom run-loop mode that blocks user input.
- [NSAnimation.BlockingMode.nonblocking](blockingmode/nonblocking.md): Requests the animation to run in a standard or specified run-loop mode that allows user input.
- [NSAnimation.BlockingMode.nonblockingThreaded](blockingmode/nonblockingthreaded.md): Requests the animation to run in a separate thread that is spawned by the `NSAnimation` object.

### Initializers

- [init(rawValue:)](blockingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSAnimation.Curve](curve.md): These constants describe the curve of an animation—that is, the relative speed of an animation from start to finish.
- [NSAnimation.Progress](progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationProgressMark Notification Key](../nsanimationprogressmark-notification-key.md): This constant is returned in the userInfo dictionary of the [progressMarkNotification](progressmarknotification.md) notification.

# NSAnimationBlockingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants indicate the blocking mode of an `NSAnimation` object when it is running.

## Declaration

```objectivec
enum NSAnimationBlockingMode : NSUInteger;
```

<a id="overview"></a>

## Overview

You specify one of these constants in the [animationBlockingMode](animationblockingmode.md) property.

## Topics

### Constants

- [NSAnimationBlocking](blockingmode/blocking.md): Requests the animation to run in the main thread in a custom run-loop mode that blocks user input.
- [NSAnimationNonblocking](blockingmode/nonblocking.md): Requests the animation to run in a standard or specified run-loop mode that allows user input.
- [NSAnimationNonblockingThreaded](blockingmode/nonblockingthreaded.md): Requests the animation to run in a separate thread that is spawned by the `NSAnimation` object.

## See Also

### Constants

- [NSAnimationCurve](curve.md): These constants describe the curve of an animation—that is, the relative speed of an animation from start to finish.
- [NSAnimationProgress](progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationProgressMark Notification Key](../nsanimationprogressmark-notification-key.md): This constant is returned in the userInfo dictionary of the [NSAnimationProgressMarkNotification](progressmarknotification.md) notification.
