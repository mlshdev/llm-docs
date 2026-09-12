> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setanimationtransition(_:for:cache:)](https://developer.apple.com/documentation/uikit/uiview/setanimationtransition(_:for:cache:))

# setAnimationTransition(\_:for:cache:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets a transition to apply to a view during an animation block.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func setAnimationTransition(_ transition: UIView.AnimationTransition, for view: UIView, cache: Bool)
```

## Parameters

- `transition`: A transition to apply to `view`. Possible values are described in [UIView.AnimationTransition](animationtransition.md).
- `view`: The view to apply the transition to.
- `cache`: If [true](https://developer.apple.com/documentation/swift/true), the before and after images of `view` are rendered once and used to create the frames in the animation. Caching can improve performance but if you set this parameter to [true](https://developer.apple.com/documentation/swift/true), you must not update the view or its subviews during the transition. Updating the view and its subviews may interfere with the caching behaviors and cause the view contents to be rendered incorrectly (or in the wrong location) during the animation. You must wait until the transition ends to update the view.

  If [false](https://developer.apple.com/documentation/swift/false), the view and its contents must be updated for each frame of the transition animation, which may noticeably affect the frame rate.

<a id="Discussion"></a>

## Discussion

If you want to change the appearance of a view during a transition—for example, flip from one view to another—then use a container view, an instance of [UIView](../uiview.md), as follows:

1. Begin an animation block.
2. Set the transition on the container view.
3. Remove the subview from the container view.
4. Add the new subview to the container view.
5. Commit the animation block.

Use of this method is discouraged in iOS 4.0 and later. You should use the [transition(with:duration:options:animations:completion:)](transition%28with_duration_options_animations_completion_%29.md) method to perform transitions instead.

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
- [setAnimationRepeatAutoreverses(\_:)](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState(\_:)](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [forBaselineLayout()](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.

# setAnimationTransition:forView:cache: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets a transition to apply to a view during an animation block.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) setAnimationTransition:(UIViewAnimationTransition) transition forView:(UIView *) view cache:(BOOL) cache;
```

## Parameters

- `transition`: A transition to apply to `view`. Possible values are described in [UIViewAnimationTransition](animationtransition.md).
- `view`: The view to apply the transition to.
- `cache`: If [true](https://developer.apple.com/documentation/swift/true), the before and after images of `view` are rendered once and used to create the frames in the animation. Caching can improve performance but if you set this parameter to [true](https://developer.apple.com/documentation/swift/true), you must not update the view or its subviews during the transition. Updating the view and its subviews may interfere with the caching behaviors and cause the view contents to be rendered incorrectly (or in the wrong location) during the animation. You must wait until the transition ends to update the view.

  If [false](https://developer.apple.com/documentation/swift/false), the view and its contents must be updated for each frame of the transition animation, which may noticeably affect the frame rate.

<a id="Discussion"></a>

## Discussion

If you want to change the appearance of a view during a transition—for example, flip from one view to another—then use a container view, an instance of [UIView](../uiview.md), as follows:

1. Begin an animation block.
2. Set the transition on the container view.
3. Remove the subview from the container view.
4. Add the new subview to the container view.
5. Commit the animation block.

Use of this method is discouraged in iOS 4.0 and later. You should use the [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md) method to perform transitions instead.

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
- [setAnimationRepeatAutoreverses:](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState:](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [viewForBaselineLayout](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.
