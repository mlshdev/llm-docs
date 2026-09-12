> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/curve](https://developer.apple.com/documentation/appkit/nsanimation/curve)

# NSAnimation.Curve (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants describe the curve of an animation—that is, the relative speed of an animation from start to finish.

## Declaration

```swift
enum Curve
```

<a id="overview"></a>

## Overview

You initialize an `NSAnimation` object using one of these constants with [init(duration:animationCurve:)](init%28duration_animationcurve_%29.md) and you can set it thereafter with the [animationCurve](animationcurve.md) property.

## Topics

### Constants

- [NSAnimation.Curve.easeInOut](curve/easeinout.md): Describes an S-curve in which the animation slowly speeds up and then slows down near the end of the animation. This constant is the default.
- [NSAnimation.Curve.easeIn](curve/easein.md): Describes an animation that slows down as it reaches the end.
- [NSAnimation.Curve.easeOut](curve/easeout.md): Describes an animation that slowly speeds up from the start.
- [NSAnimation.Curve.linear](curve/linear.md): Describes an animation in which there is no change in frame rate.

### Initializers

- [init(rawValue:)](curve/init%28rawvalue_%29.md)

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

- [NSAnimation.BlockingMode](blockingmode.md): These constants indicate the blocking mode of an `NSAnimation` object when it is running.
- [NSAnimation.Progress](progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationProgressMark Notification Key](../nsanimationprogressmark-notification-key.md): This constant is returned in the userInfo dictionary of the [progressMarkNotification](progressmarknotification.md) notification.

# NSAnimationCurve (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants describe the curve of an animation—that is, the relative speed of an animation from start to finish.

## Declaration

```objectivec
enum NSAnimationCurve : NSUInteger;
```

<a id="overview"></a>

## Overview

You initialize an `NSAnimation` object using one of these constants with [initWithDuration:animationCurve:](init%28duration_animationcurve_%29.md) and you can set it thereafter with the [animationCurve](animationcurve.md) property.

## Topics

### Constants

- [NSAnimationEaseInOut](curve/easeinout.md): Describes an S-curve in which the animation slowly speeds up and then slows down near the end of the animation. This constant is the default.
- [NSAnimationEaseIn](curve/easein.md): Describes an animation that slows down as it reaches the end.
- [NSAnimationEaseOut](curve/easeout.md): Describes an animation that slowly speeds up from the start.
- [NSAnimationLinear](curve/linear.md): Describes an animation in which there is no change in frame rate.

## See Also

### Constants

- [NSAnimationBlockingMode](blockingmode.md): These constants indicate the blocking mode of an `NSAnimation` object when it is running.
- [NSAnimationProgress](progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationProgressMark Notification Key](../nsanimationprogressmark-notification-key.md): This constant is returned in the userInfo dictionary of the [NSAnimationProgressMarkNotification](progressmarknotification.md) notification.
