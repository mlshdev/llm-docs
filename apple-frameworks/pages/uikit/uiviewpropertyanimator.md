> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator)

# UIViewPropertyAnimator (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A class that animates changes to views and allows the dynamic modification of those animations.

## Declaration

```swift
@MainActor class UIViewPropertyAnimator
```

<a id="overview"></a>

## Overview

A [UIViewPropertyAnimator](uiviewpropertyanimator.md) object lets you animate changes to views and dynamically modify your animations before they finish. With a property animator, you can run your animations from start to finish normally or you can turn them into interactive animations and control the timing yourself. The animator operates on animatable properties of views, such as the [frame](uiview/frame.md), [center](uiview/center.md), [alpha](uiview/alpha.md), and [transform](uiview/transform.md) properties, creating the needed animations from the blocks you provide.

When creating a property animator object, you specify the following:

- A block containing code that modifies the properties of one or more views.
- The timing curve that defines the speed of the animation over the course of its run.
- The duration (in seconds) of the animation.
- An optional completion block to execute when the animations finish.

In your animation blocks, set the value of an animatable property to the final value you want reflected by that view. For example, if you want to fade out a view, you would set its alpha property to `0` in your block. The property animator object creates an animation that adjusts the value of that property from its initial value to the new value that you specified in your block.

The speed at which the value of a property changes is controlled by the timing curve you specify when creating the property animator. Property animators include support for the built-in UIKit animation curves such as linear, ease-in, and ease-out. You can also use a cubic Bezier curve or a spring function to control the timing of the animations.

If you create your animator using one of the standard initialization methods, you must explicitly start your animations by calling the [startAnimation()](uiviewanimating/startanimation%28%29.md) method. If you want to start the animations immediately after the creation of your animator, use the [runningPropertyAnimator(withDuration:delay:options:animations:completion:)](uiviewpropertyanimator/runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md) method instead of the standard initializers.

This class adopts the [UIViewAnimating](uiviewanimating.md) and [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md) protocols, which define the methods for starting, stopping, and modifying your animations. For more information about the methods of those protocols, see [UIViewAnimating](uiviewanimating.md) and [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md).

<a id="Modify-animations-dynamically"></a>

### Modify animations dynamically

A property animator gives you programmatic control over the timing and execution of the animations. Specifically, you can:

- Start, pause, resume, and stop animations; see the methods of the [UIViewAnimating](uiviewanimating.md) protocol.
- Add animation blocks after the original animations start using the [addAnimations(\_:)](uiviewpropertyanimator/addanimations%28__%29.md) and [addAnimations(\_:delayFactor:)](uiviewpropertyanimator/addanimations%28__delayfactor_%29.md) methods.
- Scrub through a paused animation by modifying the [fractionComplete](uiviewanimating/fractioncomplete.md) property.
- Change the animation’s direction using the [isReversed](uiviewanimating/isreversed.md) property.
- Modify the timing and duration of a partially complete animation by pausing the animation and using the [continueAnimation(withTimingParameters:durationFactor:)](uiviewpropertyanimator/continueanimation%28withtimingparameters_durationfactor_%29.md) method to finish it.

Most of the basic behavior is controlled by the properties of the [UIViewAnimating](uiviewanimating.md) protocol, which this class adopts. Use those methods and properties to start, pause, resume, and stop the animations. You can also use them to scrub through the animation and change its direction. Use the methods and properties of this class to modify the animation blocks themselves and to update the timing information.

## Topics

### Initializing a property animator

- [init(duration:curve:animations:)](uiviewpropertyanimator/init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [init(duration:controlPoint1:controlPoint2:animations:)](uiviewpropertyanimator/init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [init(duration:dampingRatio:animations:)](uiviewpropertyanimator/init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [init(duration:timingParameters:)](uiviewpropertyanimator/init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
- [runningPropertyAnimator(withDuration:delay:options:animations:completion:)](uiviewpropertyanimator/runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.

### Modifying animations

- [addAnimations(\_:)](uiviewpropertyanimator/addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations(\_:delayFactor:)](uiviewpropertyanimator/addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [addCompletion(\_:)](uiviewpropertyanimator/addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimation(withTimingParameters:durationFactor:)](uiviewpropertyanimator/continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the timing and duration of a paused animation.

### Accessing the animation parameters

- [duration](uiviewpropertyanimator/duration.md): The total duration (in seconds) of the main animations.
- [delay](uiviewpropertyanimator/delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](uiviewpropertyanimator/timingparameters.md): The information used to determine the timing curve for the animation.
- [isInterruptible](uiviewpropertyanimator/isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [isUserInteractionEnabled](uiviewpropertyanimator/isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [isManualHitTestingEnabled](uiviewpropertyanimator/ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](uiviewpropertyanimator/scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](uiviewpropertyanimator/pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.

### Instance Properties

- [flushUpdates](uiviewpropertyanimator/flushupdates.md): Flush all pending updates (including traits, properties, and layout) whenever the animation context changes. This includes flushing updates:

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIViewAnimating](uiviewanimating.md)
- [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md)

## See Also

### Essentials

- [UIViewAnimating](uiviewanimating.md): An interface for implementing custom animator objects.

# UIViewPropertyAnimator (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A class that animates changes to views and allows the dynamic modification of those animations.

## Declaration

```objectivec
@interface UIViewPropertyAnimator : NSObject
```

<a id="overview"></a>

## Overview

A [UIViewPropertyAnimator](uiviewpropertyanimator.md) object lets you animate changes to views and dynamically modify your animations before they finish. With a property animator, you can run your animations from start to finish normally or you can turn them into interactive animations and control the timing yourself. The animator operates on animatable properties of views, such as the [frame](uiview/frame.md), [center](uiview/center.md), [alpha](uiview/alpha.md), and [transform](uiview/transform.md) properties, creating the needed animations from the blocks you provide.

When creating a property animator object, you specify the following:

- A block containing code that modifies the properties of one or more views.
- The timing curve that defines the speed of the animation over the course of its run.
- The duration (in seconds) of the animation.
- An optional completion block to execute when the animations finish.

In your animation blocks, set the value of an animatable property to the final value you want reflected by that view. For example, if you want to fade out a view, you would set its alpha property to `0` in your block. The property animator object creates an animation that adjusts the value of that property from its initial value to the new value that you specified in your block.

The speed at which the value of a property changes is controlled by the timing curve you specify when creating the property animator. Property animators include support for the built-in UIKit animation curves such as linear, ease-in, and ease-out. You can also use a cubic Bezier curve or a spring function to control the timing of the animations.

If you create your animator using one of the standard initialization methods, you must explicitly start your animations by calling the [startAnimation](uiviewanimating/startanimation%28%29.md) method. If you want to start the animations immediately after the creation of your animator, use the [runningPropertyAnimatorWithDuration:delay:options:animations:completion:](uiviewpropertyanimator/runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md) method instead of the standard initializers.

This class adopts the [UIViewAnimating](uiviewanimating.md) and [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md) protocols, which define the methods for starting, stopping, and modifying your animations. For more information about the methods of those protocols, see [UIViewAnimating](uiviewanimating.md) and [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md).

<a id="Modify-animations-dynamically"></a>

### Modify animations dynamically

A property animator gives you programmatic control over the timing and execution of the animations. Specifically, you can:

- Start, pause, resume, and stop animations; see the methods of the [UIViewAnimating](uiviewanimating.md) protocol.
- Add animation blocks after the original animations start using the [addAnimations:](uiviewpropertyanimator/addanimations%28__%29.md) and [addAnimations:delayFactor:](uiviewpropertyanimator/addanimations%28__delayfactor_%29.md) methods.
- Scrub through a paused animation by modifying the [fractionComplete](uiviewanimating/fractioncomplete.md) property.
- Change the animation’s direction using the [reversed](uiviewanimating/isreversed.md) property.
- Modify the timing and duration of a partially complete animation by pausing the animation and using the [continueAnimationWithTimingParameters:durationFactor:](uiviewpropertyanimator/continueanimation%28withtimingparameters_durationfactor_%29.md) method to finish it.

Most of the basic behavior is controlled by the properties of the [UIViewAnimating](uiviewanimating.md) protocol, which this class adopts. Use those methods and properties to start, pause, resume, and stop the animations. You can also use them to scrub through the animation and change its direction. Use the methods and properties of this class to modify the animation blocks themselves and to update the timing information.

## Topics

### Initializing a property animator

- [initWithDuration:curve:animations:](uiviewpropertyanimator/init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [initWithDuration:controlPoint1:controlPoint2:animations:](uiviewpropertyanimator/init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [initWithDuration:dampingRatio:animations:](uiviewpropertyanimator/init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [initWithDuration:timingParameters:](uiviewpropertyanimator/init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
- [runningPropertyAnimatorWithDuration:delay:options:animations:completion:](uiviewpropertyanimator/runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.

### Modifying animations

- [addAnimations:](uiviewpropertyanimator/addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations:delayFactor:](uiviewpropertyanimator/addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [addCompletion:](uiviewpropertyanimator/addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimationWithTimingParameters:durationFactor:](uiviewpropertyanimator/continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the timing and duration of a paused animation.

### Accessing the animation parameters

- [duration](uiviewpropertyanimator/duration.md): The total duration (in seconds) of the main animations.
- [delay](uiviewpropertyanimator/delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](uiviewpropertyanimator/timingparameters.md): The information used to determine the timing curve for the animation.
- [interruptible](uiviewpropertyanimator/isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [userInteractionEnabled](uiviewpropertyanimator/isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [manualHitTestingEnabled](uiviewpropertyanimator/ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](uiviewpropertyanimator/scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](uiviewpropertyanimator/pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.

### Instance Properties

- [flushUpdates](uiviewpropertyanimator/flushupdates.md): Flush all pending updates (including traits, properties, and layout) whenever the animation context changes. This includes flushing updates:

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md)

## See Also

### Essentials

- [UIViewAnimating](uiviewanimating.md): An interface for implementing custom animator objects.
