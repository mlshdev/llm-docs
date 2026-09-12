> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setanimationdelay(_:)](https://developer.apple.com/documentation/uikit/uiview/setanimationdelay(_:))

# setAnimationDelay(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the amount of time (in seconds) to wait before animating property changes within an animation block.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func setAnimationDelay(_ delay: TimeInterval)
```

<a id="Discussion"></a>

## Discussion

If you specify your animations using begin/commit set of methods, you use this method to specify the amount of time to wait before starting the animations. This method does nothing if called from outside of an animation block. It must be called between calls to the [beginAnimations(\_:context:)](beginanimations%28__context_%29.md) and [commitAnimations()](commitanimations%28%29.md) methods. And you must call this method prior to changing the animatable properties of your views. The default value is `0.0` seconds.

Use of this method is discouraged in iOS 4.0 and later. Instead, you should use the[animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) method to specify your animations and the starting delay.

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
- [setAnimationCurve(\_:)](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount(\_:)](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationRepeatAutoreverses(\_:)](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState(\_:)](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition(\_:for:cache:)](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [forBaselineLayout()](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.

# setAnimationDelay: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the amount of time (in seconds) to wait before animating property changes within an animation block.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) setAnimationDelay:(NSTimeInterval) delay;
```

<a id="Discussion"></a>

## Discussion

If you specify your animations using begin/commit set of methods, you use this method to specify the amount of time to wait before starting the animations. This method does nothing if called from outside of an animation block. It must be called between calls to the [beginAnimations:context:](beginanimations%28__context_%29.md) and [commitAnimations](commitanimations%28%29.md) methods. And you must call this method prior to changing the animatable properties of your views. The default value is `0.0` seconds.

Use of this method is discouraged in iOS 4.0 and later. Instead, you should use the[animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) method to specify your animations and the starting delay.

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
- [setAnimationCurve:](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount:](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationRepeatAutoreverses:](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState:](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition:forView:cache:](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [viewForBaselineLayout](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.
