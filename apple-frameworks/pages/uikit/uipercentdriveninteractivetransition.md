> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition)

# UIPercentDrivenInteractiveTransition (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that drives an interactive animation between one view controller and another.

## Declaration

```swift
@MainActor class UIPercentDrivenInteractiveTransition
```

<a id="overview"></a>

## Overview

A percent-driven interactive transition object relies on a transition animator delegate—a custom object that adopts the [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) protocol—to set up and perform the animations.

To use this concrete class, return an instance of it from your view controller delegate when asked for an interactive transition controller. As user events arrive that would affect the progress of a transition, call the [update(\_:)](uipercentdriveninteractivetransition/update%28__%29.md), [cancel()](uipercentdriveninteractivetransition/cancel%28%29.md), and [finish()](uipercentdriveninteractivetransition/finish%28%29.md) methods to reflect the current progress. For example, you might call these methods from a gesture recognizer to reflect how much of the gesture is completed.

You can subclass [UIPercentDrivenInteractiveTransition](uipercentdriveninteractivetransition.md), but if you do so you must start each of your method overrides with a call to the `super` implementation of the method.

## Topics

### Accessing transition attributes

- [timingCurve](uipercentdriveninteractivetransition/timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](uipercentdriveninteractivetransition/completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](uipercentdriveninteractivetransition/duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](uipercentdriveninteractivetransition/percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](uipercentdriveninteractivetransition/completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](uipercentdriveninteractivetransition/wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

### Managing a transition

- [update(\_:)](uipercentdriveninteractivetransition/update%28__%29.md): Updates the completion percentage of the transition.
- [pause()](uipercentdriveninteractivetransition/pause%28%29.md): Pauses an interruptible transition animation.
- [cancel()](uipercentdriveninteractivetransition/cancel%28%29.md): Notifies the system that user interactions canceled the transition.
- [finish()](uipercentdriveninteractivetransition/finish%28%29.md): Notifies the system that user interactions signaled the completion of the transition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md)

## See Also

### Interactive transitions

- [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md): A set of methods that enable an object (such as a navigation controller) to drive a view controller transition.
- [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md): An interface for modifying an animation while it’s running.

# UIPercentDrivenInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that drives an interactive animation between one view controller and another.

## Declaration

```objectivec
@interface UIPercentDrivenInteractiveTransition : NSObject
```

<a id="overview"></a>

## Overview

A percent-driven interactive transition object relies on a transition animator delegate—a custom object that adopts the [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) protocol—to set up and perform the animations.

To use this concrete class, return an instance of it from your view controller delegate when asked for an interactive transition controller. As user events arrive that would affect the progress of a transition, call the [updateInteractiveTransition:](uipercentdriveninteractivetransition/update%28__%29.md), [cancelInteractiveTransition](uipercentdriveninteractivetransition/cancel%28%29.md), and [finishInteractiveTransition](uipercentdriveninteractivetransition/finish%28%29.md) methods to reflect the current progress. For example, you might call these methods from a gesture recognizer to reflect how much of the gesture is completed.

You can subclass [UIPercentDrivenInteractiveTransition](uipercentdriveninteractivetransition.md), but if you do so you must start each of your method overrides with a call to the `super` implementation of the method.

## Topics

### Accessing transition attributes

- [timingCurve](uipercentdriveninteractivetransition/timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](uipercentdriveninteractivetransition/completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](uipercentdriveninteractivetransition/duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](uipercentdriveninteractivetransition/percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](uipercentdriveninteractivetransition/completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](uipercentdriveninteractivetransition/wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

### Managing a transition

- [updateInteractiveTransition:](uipercentdriveninteractivetransition/update%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](uipercentdriveninteractivetransition/pause%28%29.md): Pauses an interruptible transition animation.
- [cancelInteractiveTransition](uipercentdriveninteractivetransition/cancel%28%29.md): Notifies the system that user interactions canceled the transition.
- [finishInteractiveTransition](uipercentdriveninteractivetransition/finish%28%29.md): Notifies the system that user interactions signaled the completion of the transition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md)

## See Also

### Interactive transitions

- [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md): A set of methods that enable an object (such as a navigation controller) to drive a view controller transition.
- [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md): An interface for modifying an animation while it’s running.
