> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/beginanimations(_:context:)](https://developer.apple.com/documentation/uikit/uiview/beginanimations(_:context:))

# beginAnimations(\_:context:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Marks the beginning of a begin/commit animation block.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func beginAnimations(_ animationID: String?, context: UnsafeMutableRawPointer?)
```

## Parameters

- `animationID`: An application-supplied identifier for the animations.
- `context`: Custom data that you want to associate with this set of animations. information that is passed to the animation delegate messages—the selectors set using the [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md) and [setAnimationDidStop(\_:)](setanimationdidstop%28__%29.md) methods.

<a id="Discussion"></a>

## Discussion

This method signals to the system that you want to specify one or more animations to perform. After calling this method, configure the animation options (using the `setAnimation…` class methods) and then change the desired animatable properties of your views. When you are done changing your view properties, call the [commitAnimations()](commitanimations%28%29.md) method to close the set and schedule the animations.

You can nest sets of animations (by calling this method again before committing a previous set of animations) as needed. Nesting animations groups them together and allows you to set different animation options for the nested group.

If you install a start or stop selector using the [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md) or [setAnimationDidStop(\_:)](setanimationdidstop%28__%29.md) method, the values you specify for the `animationID` and `context` parameters are passed to your selectors at runtime. You can use these parameters to pass additional information to those selectors.

Use of this method is discouraged in iOS 4.0 and later. You should use the block-based animation methods to specify your animations instead.

## See Also

### Deprecated methods

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
- [setAnimationRepeatAutoreverses(\_:)](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState(\_:)](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition(\_:for:cache:)](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [forBaselineLayout()](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.

# beginAnimations:context: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Marks the beginning of a begin/commit animation block.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) beginAnimations:(NSString *) animationID context:(void *) context;
```

## Parameters

- `animationID`: An application-supplied identifier for the animations.
- `context`: Custom data that you want to associate with this set of animations. information that is passed to the animation delegate messages—the selectors set using the [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md) and [setAnimationDidStopSelector:](setanimationdidstop%28__%29.md) methods.

<a id="Discussion"></a>

## Discussion

This method signals to the system that you want to specify one or more animations to perform. After calling this method, configure the animation options (using the `setAnimation…` class methods) and then change the desired animatable properties of your views. When you are done changing your view properties, call the [commitAnimations](commitanimations%28%29.md) method to close the set and schedule the animations.

You can nest sets of animations (by calling this method again before committing a previous set of animations) as needed. Nesting animations groups them together and allows you to set different animation options for the nested group.

If you install a start or stop selector using the [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md) or [setAnimationDidStopSelector:](setanimationdidstop%28__%29.md) method, the values you specify for the `animationID` and `context` parameters are passed to your selectors at runtime. You can use these parameters to pass additional information to those selectors.

Use of this method is discouraged in iOS 4.0 and later. You should use the block-based animation methods to specify your animations instead.

## See Also

### Deprecated methods

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
- [setAnimationRepeatAutoreverses:](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState:](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition:forView:cache:](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [viewForBaselineLayout](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.
