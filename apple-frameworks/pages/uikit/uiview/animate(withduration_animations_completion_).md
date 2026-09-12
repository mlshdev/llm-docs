> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animate(withduration:animations:completion:)](https://developer.apple.com/documentation/uikit/uiview/animate(withduration:animations:completion:))

# animate(withDuration:animations:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Animate changes to one or more views using the specified duration and completion handler.

## Declaration

```swift
class func animate(withDuration duration: TimeInterval, animations: @escaping () -> Void, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `duration`: The total duration of the animations, measured in seconds. If you specify a negative value or `0`, the changes are made without animating them.
- `animations`: A block object containing the changes to commit to the views. This is where you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `NULL`.
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations actually finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. This parameter may be `NULL`.

<a id="Discussion"></a>

## Discussion

This method performs the specified animations immediately using the [curveEaseInOut](animationoptions/curveeaseinout.md) and [UIViewAnimationOptionTransitionNone](../uiviewanimationoptions/uiviewanimationoptiontransitionnone.md) animation options.

For example, if you want to fade a view until it is totally transparent and then remove it from your view hierarchy, you could use code similar to the following:

```objc
[UIView animateWithDuration:0.2
     animations:^{view.alpha = 0.0;}
     completion:^(BOOL finished){ [view removeFromSuperview]; }];
```

During an animation, user interactions are temporarily disabled for the views being animated. (Prior to iOS 5, user interactions are disabled for the entire application.)

## See Also

### Animating views

- [animate(\_:changes:completion:)](animate%28__changes_completion_%29.md)
- [animate(springDuration:bounce:initialSpringVelocity:delay:options:animations:completion:)](animate%28springduration_bounce_initialspringvelocity_delay_options_animations_completion_%29.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animate(withDuration:animations:)](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transition(with:duration:options:animations:completion:)](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transition(from:to:duration:options:completion:)](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [animateKeyframes(withDuration:delay:options:animations:completion:)](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframe(withRelativeStartTime:relativeDuration:animations:)](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [perform(\_:on:options:animations:completion:)](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:)](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation(\_:)](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimations(withRepeatCount:autoreverses:animations:)](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.

# animateWithDuration:animations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Animate changes to one or more views using the specified duration and completion handler.

## Declaration

```objectivec
+ (void) animateWithDuration:(NSTimeInterval) duration animations:(void (^)()) animations completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `duration`: The total duration of the animations, measured in seconds. If you specify a negative value or `0`, the changes are made without animating them.
- `animations`: A block object containing the changes to commit to the views. This is where you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `NULL`.
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations actually finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. This parameter may be `NULL`.

<a id="Discussion"></a>

## Discussion

This method performs the specified animations immediately using the [UIViewAnimationOptionCurveEaseInOut](animationoptions/curveeaseinout.md) and [UIViewAnimationOptionTransitionNone](../uiviewanimationoptions/uiviewanimationoptiontransitionnone.md) animation options.

For example, if you want to fade a view until it is totally transparent and then remove it from your view hierarchy, you could use code similar to the following:

```objc
[UIView animateWithDuration:0.2
     animations:^{view.alpha = 0.0;}
     completion:^(BOOL finished){ [view removeFromSuperview]; }];
```

During an animation, user interactions are temporarily disabled for the views being animated. (Prior to iOS 5, user interactions are disabled for the entire application.)

## See Also

### Animating views

- [animateWithSpringDuration:bounce:initialSpringVelocity:delay:options:animations:completion:](animatewithspringduration_bounce_initialspringvelocity_delay_options_animations_completion_.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animateWithDuration:animations:](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transitionFromView:toView:duration:options:completion:](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [performSystemAnimation:onViews:options:animations:completion:](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
