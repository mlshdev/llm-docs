> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/perform(_:on:options:animations:completion:)](https://developer.apple.com/documentation/uikit/uiview/perform(_:on:options:animations:completion:))

# perform(\_:on:options:animations:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.

## Declaration

```swift
class func perform(_ animation: UIView.SystemAnimation, on views: [UIView], options: UIView.AnimationOptions = [], animations parallelAnimations: (() -> Void)?, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `animation`: The system animation to perform; a constant from the [UIView.SystemAnimation](systemanimation.md) enum.
- `views`: The views to perform the animations on.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIView.AnimationOptions](animationoptions.md).
- `parallelAnimations`: Additional animations you specify to run alongside the system animation, with the same timing and duration that the system animation defines or inherits.

  In your additional animations, do not modify properties of the view on which the system animation is being performed.
- `completion`: A block object to be executed when the animation sequence ends. The single Boolean argument indicates whether or not the animations finished before the completion handler was called. If the animation duration is `0`, this block is performed at the beginning of the next run-loop cycle. You can use a `nil` value for this parameter.

## See Also

### Animating views

- [animate(\_:changes:completion:)](animate%28__changes_completion_%29.md)
- [animate(springDuration:bounce:initialSpringVelocity:delay:options:animations:completion:)](animate%28springduration_bounce_initialspringvelocity_delay_options_animations_completion_%29.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animate(withDuration:animations:completion:)](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animate(withDuration:animations:)](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transition(with:duration:options:animations:completion:)](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transition(from:to:duration:options:completion:)](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [animateKeyframes(withDuration:delay:options:animations:completion:)](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframe(withRelativeStartTime:relativeDuration:animations:)](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:)](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation(\_:)](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimations(withRepeatCount:autoreverses:animations:)](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.

# performSystemAnimation:onViews:options:animations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.

## Declaration

```objectivec
+ (void) performSystemAnimation:(UISystemAnimation) animation onViews:(NSArray<__kindof UIView *> *) views options:(UIViewAnimationOptions) options animations:(void (^)()) parallelAnimations completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `animation`: The system animation to perform; a constant from the [UISystemAnimation](systemanimation.md) enum.
- `views`: The views to perform the animations on.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIViewAnimationOptions](animationoptions.md).
- `parallelAnimations`: Additional animations you specify to run alongside the system animation, with the same timing and duration that the system animation defines or inherits.

  In your additional animations, do not modify properties of the view on which the system animation is being performed.
- `completion`: A block object to be executed when the animation sequence ends. The single Boolean argument indicates whether or not the animations finished before the completion handler was called. If the animation duration is `0`, this block is performed at the beginning of the next run-loop cycle. You can use a `nil` value for this parameter.

## See Also

### Animating views

- [animateWithSpringDuration:bounce:initialSpringVelocity:delay:options:animations:completion:](animatewithspringduration_bounce_initialspringvelocity_delay_options_animations_completion_.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animateWithDuration:animations:completion:](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animateWithDuration:animations:](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transitionFromView:toView:duration:options:completion:](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
