> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/transition(from:to:duration:options:completion:)](https://developer.apple.com/documentation/uikit/uiview/transition(from:to:duration:options:completion:))

# transition(from:to:duration:options:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a transition animation between the specified views using the given parameters.

## Declaration

```swift
class func transition(from fromView: UIView, to toView: UIView, duration: TimeInterval, options: UIView.AnimationOptions = [], completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `fromView`: The starting view for the transition. By default, this view is removed from its superview as part of the transition.
- `toView`: The ending view for the transition. By default, this view is added to the superview of `fromView` as part of the transition.
- `duration`: The duration of the transition animation, measured in seconds. If you specify a negative value or `0`, the transition is made without animations.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIView.AnimationOptions](animationoptions.md).
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations actually finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. This parameter may be `NULL`.

<a id="Discussion"></a>

## Discussion

This method provides a simple way to transition from the view in the `fromView` parameter to the view in the `toView` parameter. By default, the view in `fromView` is replaced in the view hierarchy by the view in `toView`. If both views are already part of your view hierarchy, you can include the [showHideTransitionViews](animationoptions/showhidetransitionviews.md) option in the `options` parameter to simply hide or show them.

This method modifies the views in their view hierarchy only. It does not modify your application’s view controllers in any way. For example, if you use this method to change the root view displayed by a view controller, it is your responsibility to update the view controller appropriately to handle the change.

The view transition starts immediately unless another animation is already in-flight, in which case it starts immediately after the current animation finishes.

During an animation, user interactions are temporarily disabled for the views being animated. (Prior to iOS 5, user interactions are disabled for the entire application.) If you want users to be able to interact with the views, include the [allowUserInteraction](animationoptions/allowuserinteraction.md) constant in the `options` parameter.

## See Also

### Animating views

- [animate(\_:changes:completion:)](animate%28__changes_completion_%29.md)
- [animate(springDuration:bounce:initialSpringVelocity:delay:options:animations:completion:)](animate%28springduration_bounce_initialspringvelocity_delay_options_animations_completion_%29.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animate(withDuration:animations:completion:)](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animate(withDuration:animations:)](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transition(with:duration:options:animations:completion:)](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [animateKeyframes(withDuration:delay:options:animations:completion:)](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframe(withRelativeStartTime:relativeDuration:animations:)](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [perform(\_:on:options:animations:completion:)](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:)](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation(\_:)](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimations(withRepeatCount:autoreverses:animations:)](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.

# transitionFromView:toView:duration:options:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a transition animation between the specified views using the given parameters.

## Declaration

```objectivec
+ (void) transitionFromView:(UIView *) fromView toView:(UIView *) toView duration:(NSTimeInterval) duration options:(UIViewAnimationOptions) options completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `fromView`: The starting view for the transition. By default, this view is removed from its superview as part of the transition.
- `toView`: The ending view for the transition. By default, this view is added to the superview of `fromView` as part of the transition.
- `duration`: The duration of the transition animation, measured in seconds. If you specify a negative value or `0`, the transition is made without animations.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIViewAnimationOptions](animationoptions.md).
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations actually finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. This parameter may be `NULL`.

<a id="Discussion"></a>

## Discussion

This method provides a simple way to transition from the view in the `fromView` parameter to the view in the `toView` parameter. By default, the view in `fromView` is replaced in the view hierarchy by the view in `toView`. If both views are already part of your view hierarchy, you can include the [UIViewAnimationOptionShowHideTransitionViews](animationoptions/showhidetransitionviews.md) option in the `options` parameter to simply hide or show them.

This method modifies the views in their view hierarchy only. It does not modify your application’s view controllers in any way. For example, if you use this method to change the root view displayed by a view controller, it is your responsibility to update the view controller appropriately to handle the change.

The view transition starts immediately unless another animation is already in-flight, in which case it starts immediately after the current animation finishes.

During an animation, user interactions are temporarily disabled for the views being animated. (Prior to iOS 5, user interactions are disabled for the entire application.) If you want users to be able to interact with the views, include the [UIViewAnimationOptionAllowUserInteraction](animationoptions/allowuserinteraction.md) constant in the `options` parameter.

## See Also

### Animating views

- [animateWithSpringDuration:bounce:initialSpringVelocity:delay:options:animations:completion:](animatewithspringduration_bounce_initialspringvelocity_delay_options_animations_completion_.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animateWithDuration:animations:completion:](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animateWithDuration:animations:](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [performSystemAnimation:onViews:options:animations:completion:](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
