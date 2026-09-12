> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setanimationdelegate(_:)](https://developer.apple.com/documentation/uikit/uiview/setanimationdelegate(_:))

# setAnimationDelegate(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the delegate for any animation messages.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func setAnimationDelegate(_ delegate: Any?)
```

## Parameters

- `delegate`: An object that defines the methods registered using the [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md) and [setAnimationDidStop(\_:)](setanimationdidstop%28__%29.md) methods.  The view maintains a strong reference to this object for the duration of the animation.

<a id="Discussion"></a>

## Discussion

You can specify an animation delegate in cases where you want to receive messages when the animation starts or stops. After calling this method, you should call the [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md) and [setAnimationDidStop(\_:)](setanimationdidstop%28__%29.md) methods as needed to register appropriate selectors. By default, the animation delegate is set to `nil`.

You primarily use this method to set the delegate for animation blocks created using the begin/commit animation methods. Calling this method from outside an animation block does nothing.

Use of this method is discouraged in iOS 4.0 and later. If you are using the block-based animation methods, you can include your delegate’s start and end code directly inside your block.

## See Also

### Deprecated methods

- [beginAnimations(\_:context:)](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations()](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationStart(\_:)](setanimationstart%28__%29.md): Deprecated. Sets the start time for the current animation block.
- [setAnimationsEnabled(\_:)](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
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

# setAnimationDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the delegate for any animation messages.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) setAnimationDelegate:(id) delegate;
```

## Parameters

- `delegate`: An object that defines the methods registered using the [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md) and [setAnimationDidStopSelector:](setanimationdidstop%28__%29.md) methods.  The view maintains a strong reference to this object for the duration of the animation.

<a id="Discussion"></a>

## Discussion

You can specify an animation delegate in cases where you want to receive messages when the animation starts or stops. After calling this method, you should call the [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md) and [setAnimationDidStopSelector:](setanimationdidstop%28__%29.md) methods as needed to register appropriate selectors. By default, the animation delegate is set to `nil`.

You primarily use this method to set the delegate for animation blocks created using the begin/commit animation methods. Calling this method from outside an animation block does nothing.

Use of this method is discouraged in iOS 4.0 and later. If you are using the block-based animation methods, you can include your delegate’s start and end code directly inside your block.

## See Also

### Deprecated methods

- [beginAnimations:context:](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationStartDate:](setanimationstart%28__%29.md): Deprecated. Sets the start time for the current animation block.
- [setAnimationsEnabled:](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
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
