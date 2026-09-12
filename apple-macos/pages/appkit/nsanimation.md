> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation](https://developer.apple.com/documentation/appkit/nsanimation)

# NSAnimation (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages the timing and progress of animations in the user interface.

## Declaration

```swift
class NSAnimation
```

<a id="overview"></a>

## Overview

[NSAnimation](nsanimation.md) also lets you link together multiple animations so that when one animation ends another one starts. It does not provide any drawing support for animation and does not directly deal with views, targets, or actions.

> **Note**

>  For simple tasks requiring a timing mechanism, consider using [Timer](https://developer.apple.com/documentation/foundation/timer).

[NSAnimation](nsanimation.md) objects have several characteristics, including duration, frame rate, and animation curve, which describes the relative speed of the animation over its course. You can set progress marks in an animation, each of which specifies a percentage of the animation completed; when an animation reaches a progress mark, it notifies its delegate and posts a notification to any observers. Animations execute in one of three blocking modes: blocking, non-blocking on the main thread, and non-blocking on a separate thread. The non-blocking modes permit the handling of user events while the animation is running.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The usual usage pattern for `NSAnimation` is to make a subclass that overrides (at least) the [currentProgress](nsanimation/currentprogress.md) property to invoke the superclass implementation and then perform whatever animation action is needed. The method implementation might use the [currentValue](nsanimation/currentvalue.md) property and then use that value to update some drawing; as a consequence of getting the current value, the method [animation(\_:valueForProgress:)](nsanimationdelegate/animation%28__valueforprogress_%29.md) is sent to the delegate (if there is a delegate that implements the method). For more information on subclassing `NSAnimation`, see [Animation Programming Guide for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AnimationGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003592).

## Topics

### Initializing an NSAnimation Object

- [init(duration:animationCurve:)](nsanimation/init%28duration_animationcurve_%29.md): Returns an `NSAnimation` object initialized with the specified duration and animation-curve values.

### Configuring an Animation

- [animationBlockingMode](nsanimation/animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](nsanimation/runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [animationCurve](nsanimation/animationcurve.md): The timing curve for the animation.
- [duration](nsanimation/duration.md): The duration of the animation, in seconds.
- [frameRate](nsanimation/framerate.md): The number of frame updates per second to generate for the animation.

### Managing the Delegate

- [delegate](nsanimation/delegate.md): The animation delegate.

### Controlling and Monitoring an Animation

- [start()](nsanimation/start%28%29.md): Starts the animation represented by the receiver.
- [stop()](nsanimation/stop%28%29.md): Stops the animation represented by the receiver.
- [isAnimating](nsanimation/isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](nsanimation/currentprogress.md): The current progress of the animation.
- [currentValue](nsanimation/currentvalue.md): The current value of the animation effect, based on the current progress

### Managing Progress Marks

- [addProgressMark(\_:)](nsanimation/addprogressmark%28__%29.md): Adds the progress mark to the receiver.
- [removeProgressMark(\_:)](nsanimation/removeprogressmark%28__%29.md): Removes progress mark from the receiver.
- [progressMarks](nsanimation/progressmarks.md): An array of floating-point numbers representing current progress marks.

### Linking Animations Together

- [start(when:reachesProgress:)](nsanimation/start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [stop(when:reachesProgress:)](nsanimation/stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStart()](nsanimation/clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
- [clearStop()](nsanimation/clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.

### Constants

- [NSAnimation.Curve](nsanimation/curve.md): These constants describe the curve of an animation—that is, the relative speed of an animation from start to finish.
- [NSAnimation.BlockingMode](nsanimation/blockingmode.md): These constants indicate the blocking mode of an `NSAnimation` object when it is running.
- [NSAnimation.Progress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationProgressMark Notification Key](nsanimationprogressmark-notification-key.md): This constant is returned in the userInfo dictionary of the [progressMarkNotification](nsanimation/progressmarknotification.md) notification.

### Notifications

- [progressMarkNotification](nsanimation/progressmarknotification.md): Posted when the current progress of a running animation reaches one of its progress marks.

### Initializers

- [init(coder:)](nsanimation/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSViewAnimation](nsviewanimation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Custom Animations

- [NSAnimationDelegate](nsanimationdelegate.md): A set of optional methods implemented by delegates of [NSAnimation](nsanimation.md) objects.

# NSAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages the timing and progress of animations in the user interface.

## Declaration

```objectivec
@interface NSAnimation : NSObject
```

<a id="overview"></a>

## Overview

[NSAnimation](nsanimation.md) also lets you link together multiple animations so that when one animation ends another one starts. It does not provide any drawing support for animation and does not directly deal with views, targets, or actions.

> **Note**

>  For simple tasks requiring a timing mechanism, consider using [NSTimer](https://developer.apple.com/documentation/foundation/timer).

[NSAnimation](nsanimation.md) objects have several characteristics, including duration, frame rate, and animation curve, which describes the relative speed of the animation over its course. You can set progress marks in an animation, each of which specifies a percentage of the animation completed; when an animation reaches a progress mark, it notifies its delegate and posts a notification to any observers. Animations execute in one of three blocking modes: blocking, non-blocking on the main thread, and non-blocking on a separate thread. The non-blocking modes permit the handling of user events while the animation is running.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The usual usage pattern for `NSAnimation` is to make a subclass that overrides (at least) the [currentProgress](nsanimation/currentprogress.md) property to invoke the superclass implementation and then perform whatever animation action is needed. The method implementation might use the [currentValue](nsanimation/currentvalue.md) property and then use that value to update some drawing; as a consequence of getting the current value, the method [animation:valueForProgress:](nsanimationdelegate/animation%28__valueforprogress_%29.md) is sent to the delegate (if there is a delegate that implements the method). For more information on subclassing `NSAnimation`, see [Animation Programming Guide for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AnimationGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003592).

## Topics

### Initializing an NSAnimation Object

- [initWithDuration:animationCurve:](nsanimation/init%28duration_animationcurve_%29.md): Returns an `NSAnimation` object initialized with the specified duration and animation-curve values.

### Configuring an Animation

- [animationBlockingMode](nsanimation/animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](nsanimation/runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [animationCurve](nsanimation/animationcurve.md): The timing curve for the animation.
- [duration](nsanimation/duration.md): The duration of the animation, in seconds.
- [frameRate](nsanimation/framerate.md): The number of frame updates per second to generate for the animation.

### Managing the Delegate

- [delegate](nsanimation/delegate.md): The animation delegate.

### Controlling and Monitoring an Animation

- [startAnimation](nsanimation/start%28%29.md): Starts the animation represented by the receiver.
- [stopAnimation](nsanimation/stop%28%29.md): Stops the animation represented by the receiver.
- [animating](nsanimation/isanimating.md): A Boolean value indicating whether the animation is in progress.
- [currentProgress](nsanimation/currentprogress.md): The current progress of the animation.
- [currentValue](nsanimation/currentvalue.md): The current value of the animation effect, based on the current progress

### Managing Progress Marks

- [addProgressMark:](nsanimation/addprogressmark%28__%29.md): Adds the progress mark to the receiver.
- [removeProgressMark:](nsanimation/removeprogressmark%28__%29.md): Removes progress mark from the receiver.
- [progressMarks](nsanimation/progressmarks.md): An array of floating-point numbers representing current progress marks.

### Linking Animations Together

- [startWhenAnimation:reachesProgress:](nsanimation/start%28when_reachesprogress_%29.md): Starts running the animation represented by the receiver when another animation reaches a specific progress mark.
- [stopWhenAnimation:reachesProgress:](nsanimation/stop%28when_reachesprogress_%29.md): Stops running the animation represented by the receiver when another animation reaches a specific progress mark.
- [clearStartAnimation](nsanimation/clearstart%28%29.md): Clears linkage to another animation that causes the receiver to start.
- [clearStopAnimation](nsanimation/clearstop%28%29.md): Clears linkage to another animation that causes the receiver to stop.

### Constants

- [NSAnimationCurve](nsanimation/curve.md): These constants describe the curve of an animation—that is, the relative speed of an animation from start to finish.
- [NSAnimationBlockingMode](nsanimation/blockingmode.md): These constants indicate the blocking mode of an `NSAnimation` object when it is running.
- [NSAnimationProgress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationProgressMark Notification Key](nsanimationprogressmark-notification-key.md): This constant is returned in the userInfo dictionary of the [NSAnimationProgressMarkNotification](nsanimation/progressmarknotification.md) notification.

### Notifications

- [NSAnimationProgressMarkNotification](nsanimation/progressmarknotification.md): Posted when the current progress of a running animation reaches one of its progress marks.

### Initializers

- [initWithCoder:](nsanimation/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSViewAnimation](nsviewanimation.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Custom Animations

- [NSAnimationDelegate](nsanimationdelegate.md): A set of optional methods implemented by delegates of [NSAnimation](nsanimation.md) objects.
