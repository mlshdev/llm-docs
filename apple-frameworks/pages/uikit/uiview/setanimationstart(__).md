> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setanimationstart(_:)](https://developer.apple.com/documentation/uikit/uiview/setanimationstart(_:))

# setAnimationStart(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the start time for the current animation block.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func setAnimationStart(_ startDate: Date)
```

## Parameters

- `startDate`: The time to begin the animations.

<a id="Discussion"></a>

## Discussion

Call this method between the [beginAnimations(\_:context:)](beginanimations%28__context_%29.md) and [commitAnimations()](commitanimations%28%29.md) methods to specify the start time for that set of animations. And call this method prior to changing the animatable properties of your views. (Do not call this method in conjunction with a block-based animation.) If you do not call this method, the start time is set to the value returned by the [CFAbsoluteTimeGetCurrent()](../../corefoundation/cfabsolutetimegetcurrent%28%29.md) function, which begins the animations as soon as possible.

Use of this method is discouraged in iOS 4.0 and later. You should use the block-based animation methods to specify your animations instead.

## See Also

### Deprecated methods

- [beginAnimations(\_:context:)](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations()](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationsEnabled(\_:)](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
- [setAnimationDelegate(\_:)](setanimationdelegate%28__%29.md): Deprecated. Sets the delegate for any animation messages.
- [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md): Deprecated. Sets the message to send to the animation delegate when the animation starts.
- [setAnimationDidStop(\_:)](setanimationdidstop%28__%29.md): Deprecated. Sets the message to send to the animation delegate when animation stops.
- [setAnimationDuration(\_:)](setanimationduration%28__%29.md): Deprecated. Sets the duration (measured in seconds) of the animations in an animation block.
- [setAnimationDelay(\_:)](setanimationdelay%28__%29.md): Deprecated. Sets the amount of time (in seconds) to wait before animating property changes within an animation block.
- [setAnimationCurve(\_:)](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount(\_:)](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationRepeatAutoreverses(\_:)](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState(\_:)](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition(\_:for:cache:)](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [forBaselineLayout()](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.

# setAnimationStartDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the start time for the current animation block.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) setAnimationStartDate:(NSDate *) startDate;
```

## Parameters

- `startDate`: The time to begin the animations.

<a id="Discussion"></a>

## Discussion

Call this method between the [beginAnimations:context:](beginanimations%28__context_%29.md) and [commitAnimations](commitanimations%28%29.md) methods to specify the start time for that set of animations. And call this method prior to changing the animatable properties of your views. (Do not call this method in conjunction with a block-based animation.) If you do not call this method, the start time is set to the value returned by the [CFAbsoluteTimeGetCurrent](../../corefoundation/cfabsolutetimegetcurrent%28%29.md) function, which begins the animations as soon as possible.

Use of this method is discouraged in iOS 4.0 and later. You should use the block-based animation methods to specify your animations instead.

## See Also

### Deprecated methods

- [beginAnimations:context:](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationsEnabled:](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
- [setAnimationDelegate:](setanimationdelegate%28__%29.md): Deprecated. Sets the delegate for any animation messages.
- [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md): Deprecated. Sets the message to send to the animation delegate when the animation starts.
- [setAnimationDidStopSelector:](setanimationdidstop%28__%29.md): Deprecated. Sets the message to send to the animation delegate when animation stops.
- [setAnimationDuration:](setanimationduration%28__%29.md): Deprecated. Sets the duration (measured in seconds) of the animations in an animation block.
- [setAnimationDelay:](setanimationdelay%28__%29.md): Deprecated. Sets the amount of time (in seconds) to wait before animating property changes within an animation block.
- [setAnimationCurve:](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount:](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationRepeatAutoreverses:](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState:](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition:forView:cache:](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [viewForBaselineLayout](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.
