> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setanimationrepeatautoreverses(_:)](https://developer.apple.com/documentation/uikit/uiview/setanimationrepeatautoreverses(_:))

# setAnimationRepeatAutoreverses(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets whether the animations within an animation block automatically reverse themselves.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func setAnimationRepeatAutoreverses(_ repeatAutoreverses: Bool)
```

## Parameters

- `repeatAutoreverses`: Specify [true](https://developer.apple.com/documentation/swift/true) to enable autoreversing or [false](https://developer.apple.com/documentation/swift/false) to disable it.

<a id="Discussion"></a>

## Discussion

If you enable autoreversing, a single animation cycle changes the properties being animated to their new values and then back to their original values. At the end of the animations, the affected views are then updated immediately to reflect the new values. This method does nothing if called from outside of an animation block. By default, autoreversing is disabled.

If you combine autoreversing with a repeat count (settable using the [setAnimationRepeatCount(\_:)](setanimationrepeatcount%28__%29.md) method), you can create animations that shift back and forth between the old and new values the specified number of times. However, remember that the repeat count indicates the number of complete cycles. If you specify an integral value such as `2.0`, the animation ends on the old value, which is followed by the view immediately updating itself to show the new value, which might be jarring. If you want the animation to end on the new value (instead of the old value), add `0.5` to the repeat count value. This adds an extra half cycle to the animation.

Use of this method is discouraged in iOS 4.0 and later. Instead, you should use the[animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) method to specify your animations and the animation options.

## See Also

### Deprecated methods

- [beginAnimations(\_:context:)](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations()](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationStart(\_:)](setanimationstart%28__%29.md): Deprecated. Sets the start time for the current animation block.
- [setAnimationsEnabled(\_:)](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
- [setAnimationDelegate(\_:)](setanimationdelegate%28__%29.md): Deprecated. Sets the delegate for any animation messages.
- [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md): Deprecated. Sets the message to send to the animation delegate when the animation starts.
- [setAnimationDidStop(\_:)](setanimationdidstop%28__%29.md): Deprecated. Sets the message to send to the animation delegate when animation stops.
- [setAnimationDuration(\_:)](setanimationduration%28__%29.md): Deprecated. Sets the duration (measured in seconds) of the animations in an animation block.
- [setAnimationDelay(\_:)](setanimationdelay%28__%29.md): Deprecated. Sets the amount of time (in seconds) to wait before animating property changes within an animation block.
- [setAnimationCurve(\_:)](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount(\_:)](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationBeginsFromCurrentState(\_:)](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition(\_:for:cache:)](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [forBaselineLayout()](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.

# setAnimationRepeatAutoreverses: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets whether the animations within an animation block automatically reverse themselves.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) setAnimationRepeatAutoreverses:(BOOL) repeatAutoreverses;
```

## Parameters

- `repeatAutoreverses`: Specify [true](https://developer.apple.com/documentation/swift/true) to enable autoreversing or [false](https://developer.apple.com/documentation/swift/false) to disable it.

<a id="Discussion"></a>

## Discussion

If you enable autoreversing, a single animation cycle changes the properties being animated to their new values and then back to their original values. At the end of the animations, the affected views are then updated immediately to reflect the new values. This method does nothing if called from outside of an animation block. By default, autoreversing is disabled.

If you combine autoreversing with a repeat count (settable using the [setAnimationRepeatCount:](setanimationrepeatcount%28__%29.md) method), you can create animations that shift back and forth between the old and new values the specified number of times. However, remember that the repeat count indicates the number of complete cycles. If you specify an integral value such as `2.0`, the animation ends on the old value, which is followed by the view immediately updating itself to show the new value, which might be jarring. If you want the animation to end on the new value (instead of the old value), add `0.5` to the repeat count value. This adds an extra half cycle to the animation.

Use of this method is discouraged in iOS 4.0 and later. Instead, you should use the[animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) method to specify your animations and the animation options.

## See Also

### Deprecated methods

- [beginAnimations:context:](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationStartDate:](setanimationstart%28__%29.md): Deprecated. Sets the start time for the current animation block.
- [setAnimationsEnabled:](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
- [setAnimationDelegate:](setanimationdelegate%28__%29.md): Deprecated. Sets the delegate for any animation messages.
- [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md): Deprecated. Sets the message to send to the animation delegate when the animation starts.
- [setAnimationDidStopSelector:](setanimationdidstop%28__%29.md): Deprecated. Sets the message to send to the animation delegate when animation stops.
- [setAnimationDuration:](setanimationduration%28__%29.md): Deprecated. Sets the duration (measured in seconds) of the animations in an animation block.
- [setAnimationDelay:](setanimationdelay%28__%29.md): Deprecated. Sets the amount of time (in seconds) to wait before animating property changes within an animation block.
- [setAnimationCurve:](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount:](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationBeginsFromCurrentState:](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition:forView:cache:](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [viewForBaselineLayout](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.
