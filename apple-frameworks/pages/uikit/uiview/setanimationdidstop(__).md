> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setanimationdidstop(_:)](https://developer.apple.com/documentation/uikit/uiview/setanimationdidstop(_:))

# setAnimationDidStop(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the message to send to the animation delegate when animation stops.

> Use [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```swift
class func setAnimationDidStop(_ selector: Selector?)
```

## Parameters

- `selector`: The message sent to the animation delegate after animations end. The default value is `NULL`. The selector should be of the form: `- (void)animationDidStop:(NSString *)animationID finished:(NSNumber *)finished context:(void *)context`. Your method must take the following arguments:

  - `animationID`

  An [NSString](../../foundation/nsstring.md) containing an optional application-supplied identifier. This is the identifier that is passed to the [beginAnimations(\_:context:)](beginanimations%28__context_%29.md) method. This argument can be `nil`.

  - `finished`

  An [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The value is [true](https://developer.apple.com/documentation/swift/true) if the animation ran to completion before it stopped or [false](https://developer.apple.com/documentation/swift/false) if it did not.

  - `context`

  An optional application-supplied context. This is the context data passed to the [beginAnimations(\_:context:)](beginanimations%28__context_%29.md) method. This argument can be `nil`.

<a id="Discussion"></a>

## Discussion

If you specify an animation delegate for a begin/commit set of animations, you use this method to specify the selector to call after the animations end. This method does nothing if called from outside of an animation block. It must be called between calls to the [beginAnimations(\_:context:)](beginanimations%28__context_%29.md) and [commitAnimations()](commitanimations%28%29.md) methods. This selector is set to `NULL` by default.

> **Note**

>  Your stop selector is still called even if animations are disabled.

Use of this method is discouraged in iOS 4.0 and later. If you are using the block-based animation methods, you can include your delegate’s end code directly inside your block.

## See Also

### Deprecated methods

- [beginAnimations(\_:context:)](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations()](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationStart(\_:)](setanimationstart%28__%29.md): Deprecated. Sets the start time for the current animation block.
- [setAnimationsEnabled(\_:)](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
- [setAnimationDelegate(\_:)](setanimationdelegate%28__%29.md): Deprecated. Sets the delegate for any animation messages.
- [setAnimationWillStart(\_:)](setanimationwillstart%28__%29.md): Deprecated. Sets the message to send to the animation delegate when the animation starts.
- [setAnimationDuration(\_:)](setanimationduration%28__%29.md): Deprecated. Sets the duration (measured in seconds) of the animations in an animation block.
- [setAnimationDelay(\_:)](setanimationdelay%28__%29.md): Deprecated. Sets the amount of time (in seconds) to wait before animating property changes within an animation block.
- [setAnimationCurve(\_:)](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount(\_:)](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationRepeatAutoreverses(\_:)](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState(\_:)](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition(\_:for:cache:)](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [forBaselineLayout()](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.

# setAnimationDidStopSelector: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Sets the message to send to the animation delegate when animation stops.

> Use [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md) instead.

## Declaration

```objectivec
+ (void) setAnimationDidStopSelector:(SEL) selector;
```

## Parameters

- `selector`: The message sent to the animation delegate after animations end. The default value is `NULL`. The selector should be of the form: `- (void)animationDidStop:(NSString *)animationID finished:(NSNumber *)finished context:(void *)context`. Your method must take the following arguments:

  - `animationID`

  An [NSString](../../foundation/nsstring.md) containing an optional application-supplied identifier. This is the identifier that is passed to the [beginAnimations:context:](beginanimations%28__context_%29.md) method. This argument can be `nil`.

  - `finished`

  An [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The value is [true](https://developer.apple.com/documentation/swift/true) if the animation ran to completion before it stopped or [false](https://developer.apple.com/documentation/swift/false) if it did not.

  - `context`

  An optional application-supplied context. This is the context data passed to the [beginAnimations:context:](beginanimations%28__context_%29.md) method. This argument can be `nil`.

<a id="Discussion"></a>

## Discussion

If you specify an animation delegate for a begin/commit set of animations, you use this method to specify the selector to call after the animations end. This method does nothing if called from outside of an animation block. It must be called between calls to the [beginAnimations:context:](beginanimations%28__context_%29.md) and [commitAnimations](commitanimations%28%29.md) methods. This selector is set to `NULL` by default.

> **Note**

>  Your stop selector is still called even if animations are disabled.

Use of this method is discouraged in iOS 4.0 and later. If you are using the block-based animation methods, you can include your delegate’s end code directly inside your block.

## See Also

### Deprecated methods

- [beginAnimations:context:](beginanimations%28__context_%29.md): Deprecated. Marks the beginning of a begin/commit animation block.
- [commitAnimations](commitanimations%28%29.md): Deprecated. Marks the end of a begin/commit animation block and schedules the animations for execution.
- [setAnimationStartDate:](setanimationstart%28__%29.md): Deprecated. Sets the start time for the current animation block.
- [setAnimationsEnabled:](setanimationsenabled%28__%29.md): Sets whether animations are enabled.
- [setAnimationDelegate:](setanimationdelegate%28__%29.md): Deprecated. Sets the delegate for any animation messages.
- [setAnimationWillStartSelector:](setanimationwillstart%28__%29.md): Deprecated. Sets the message to send to the animation delegate when the animation starts.
- [setAnimationDuration:](setanimationduration%28__%29.md): Deprecated. Sets the duration (measured in seconds) of the animations in an animation block.
- [setAnimationDelay:](setanimationdelay%28__%29.md): Deprecated. Sets the amount of time (in seconds) to wait before animating property changes within an animation block.
- [setAnimationCurve:](setanimationcurve%28__%29.md): Deprecated. Sets the curve to use when animating property changes within an animation block.
- [setAnimationRepeatCount:](setanimationrepeatcount%28__%29.md): Deprecated. Sets the number of times animations within an animation block repeat.
- [setAnimationRepeatAutoreverses:](setanimationrepeatautoreverses%28__%29.md): Deprecated. Sets whether the animations within an animation block automatically reverse themselves.
- [setAnimationBeginsFromCurrentState:](setanimationbeginsfromcurrentstate%28__%29.md): Deprecated. Sets whether the animation should begin playing from the current state.
- [setAnimationTransition:forView:cache:](setanimationtransition%28__for_cache_%29.md): Deprecated. Sets a transition to apply to a view during an animation block.
- [areAnimationsEnabled](areanimationsenabled.md): Returns a Boolean value indicating whether animations are enabled.
- [viewForBaselineLayout](forbaselinelayout%28%29.md): Deprecated. Returns a view used to satisfy baseline constraints.
