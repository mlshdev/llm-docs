> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animate(withduration:delay:usingspringwithdamping:initialspringvelocity:options:animations:completion:)](https://developer.apple.com/documentation/uikit/uiview/animate(withduration:delay:usingspringwithdamping:initialspringvelocity:options:animations:completion:))

# animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Performs a view animation using a timing curve corresponding to the motion of a physical spring.

## Declaration

```swift
class func animate(withDuration duration: TimeInterval, delay: TimeInterval, usingSpringWithDamping dampingRatio: CGFloat, initialSpringVelocity velocity: CGFloat, options: UIView.AnimationOptions = [], animations: @escaping () -> Void, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `duration`: The total duration of the animations, measured in seconds. If you specify a negative value or `0`, the changes are made without animating them.
- `delay`: The amount of time (measured in seconds) to wait before beginning the animations. Specify a value of `0` to begin the animations immediately.
- `dampingRatio`: The damping ratio for the spring animation as it approaches its quiescent state.

  To smoothly decelerate the animation without oscillation, use a value of `1`. Employ a damping ratio closer to zero to increase oscillation.
- `velocity`: The initial spring velocity. For smooth start to the animation, match this value to the view’s velocity as it was prior to attachment.

  A value of `1` corresponds to the total animation distance traversed in one second. For example, if the total animation distance is 200 points and you want the start of the animation to match a view velocity of 100 pt/s, use a value of `0.5`.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIView.AnimationOptions](animationoptions.md).
- `animations`: A block object containing the changes to commit to the views. This is where you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `NULL`.
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations actually finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. This parameter may be `NULL`.

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
- [perform(\_:on:options:animations:completion:)](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [performWithoutAnimation(\_:)](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimations(withRepeatCount:autoreverses:animations:)](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.

# animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Performs a view animation using a timing curve corresponding to the motion of a physical spring.

## Declaration

```objectivec
+ (void) animateWithDuration:(NSTimeInterval) duration delay:(NSTimeInterval) delay usingSpringWithDamping:(CGFloat) dampingRatio initialSpringVelocity:(CGFloat) velocity options:(UIViewAnimationOptions) options animations:(void (^)()) animations completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `duration`: The total duration of the animations, measured in seconds. If you specify a negative value or `0`, the changes are made without animating them.
- `delay`: The amount of time (measured in seconds) to wait before beginning the animations. Specify a value of `0` to begin the animations immediately.
- `dampingRatio`: The damping ratio for the spring animation as it approaches its quiescent state.

  To smoothly decelerate the animation without oscillation, use a value of `1`. Employ a damping ratio closer to zero to increase oscillation.
- `velocity`: The initial spring velocity. For smooth start to the animation, match this value to the view’s velocity as it was prior to attachment.

  A value of `1` corresponds to the total animation distance traversed in one second. For example, if the total animation distance is 200 points and you want the start of the animation to match a view velocity of 100 pt/s, use a value of `0.5`.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIViewAnimationOptions](animationoptions.md).
- `animations`: A block object containing the changes to commit to the views. This is where you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `NULL`.
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations actually finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. This parameter may be `NULL`.

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
- [performSystemAnimation:onViews:options:animations:completion:](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
