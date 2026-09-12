> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animatekeyframes(withduration:delay:options:animations:completion:)](https://developer.apple.com/documentation/uikit/uiview/animatekeyframes(withduration:delay:options:animations:completion:))

# animateKeyframes(withDuration:delay:options:animations:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an animation block object that can be used to set up keyframe-based animations for the current view.

## Declaration

```swift
class func animateKeyframes(withDuration duration: TimeInterval, delay: TimeInterval, options: UIView.KeyframeAnimationOptions = [], animations: @escaping () -> Void, completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
class func animateKeyframes(withDuration duration: TimeInterval, delay: TimeInterval, options: UIView.KeyframeAnimationOptions = [], animations: @escaping () -> Void) async -> Bool
```

## Parameters

- `duration`: The duration of the overall animation, measured in seconds. If you specify a negative value or `0`, changes are made immediately and without animations.
- `delay`: Specifies the time (in seconds) to wait before starting the animation.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIView.KeyframeAnimationOptions](keyframeanimationoptions.md).
- `animations`: A block object containing the changes to commit to the views. Typically, you call the [addKeyframe(withRelativeStartTime:relativeDuration:animations:)](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md) method one or more times from inside this block. You may also change view values directly if you want those changes to animate over the full duration. This block takes no parameters and has no return value. Do not use a `nil` value for this parameter.
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. You can use a `nil` value for this parameter.

<a id="Discussion"></a>

## Discussion

This method creates an animation block that you can use to set up a keyframe-based animation. The keyframes themselves are not part of the initial animation block you create using this method. Inside the `animations` block, you must add the keyframe time and animation data by calling the [addKeyframe(withRelativeStartTime:relativeDuration:animations:)](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md) method one or more times. Adding keyframes causes the animation to animate the view from its current value to the value of the first keyframe, then to the value of the next keyframe, and so on at the times you specify.

If you do not add any keyframes in the `animations` block, the animation proceeds from start to end like a standard animation block. In other words, the system animates from the current view values to any new values over the specified `duration`.

## See Also

### Animating views

- [animate(\_:changes:completion:)](animate%28__changes_completion_%29.md)
- [animate(springDuration:bounce:initialSpringVelocity:delay:options:animations:completion:)](animate%28springduration_bounce_initialspringvelocity_delay_options_animations_completion_%29.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animate(withDuration:delay:options:animations:completion:)](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animate(withDuration:animations:completion:)](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animate(withDuration:animations:)](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transition(with:duration:options:animations:completion:)](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transition(from:to:duration:options:completion:)](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [addKeyframe(withRelativeStartTime:relativeDuration:animations:)](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [perform(\_:on:options:animations:completion:)](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:)](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation(\_:)](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimations(withRepeatCount:autoreverses:animations:)](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.

# animateKeyframesWithDuration:delay:options:animations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an animation block object that can be used to set up keyframe-based animations for the current view.

## Declaration

```objectivec
+ (void) animateKeyframesWithDuration:(NSTimeInterval) duration delay:(NSTimeInterval) delay options:(UIViewKeyframeAnimationOptions) options animations:(void (^)()) animations completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `duration`: The duration of the overall animation, measured in seconds. If you specify a negative value or `0`, changes are made immediately and without animations.
- `delay`: Specifies the time (in seconds) to wait before starting the animation.
- `options`: A mask of options indicating how you want to perform the animations. For a list of valid constants, see [UIViewKeyframeAnimationOptions](keyframeanimationoptions.md).
- `animations`: A block object containing the changes to commit to the views. Typically, you call the [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md) method one or more times from inside this block. You may also change view values directly if you want those changes to animate over the full duration. This block takes no parameters and has no return value. Do not use a `nil` value for this parameter.
- `completion`: A block object to be executed when the animation sequence ends. This block has no return value and takes a single Boolean argument that indicates whether or not the animations finished before the completion handler was called. If the duration of the animation is 0, this block is performed at the beginning of the next run loop cycle. You can use a `nil` value for this parameter.

<a id="Discussion"></a>

## Discussion

This method creates an animation block that you can use to set up a keyframe-based animation. The keyframes themselves are not part of the initial animation block you create using this method. Inside the `animations` block, you must add the keyframe time and animation data by calling the [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md) method one or more times. Adding keyframes causes the animation to animate the view from its current value to the value of the first keyframe, then to the value of the next keyframe, and so on at the times you specify.

If you do not add any keyframes in the `animations` block, the animation proceeds from start to end like a standard animation block. In other words, the system animates from the current view values to any new values over the specified `duration`.

## See Also

### Animating views

- [animateWithSpringDuration:bounce:initialSpringVelocity:delay:options:animations:completion:](animatewithspringduration_bounce_initialspringvelocity_delay_options_animations_completion_.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animateWithDuration:animations:completion:](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animateWithDuration:animations:](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transitionFromView:toView:duration:options:completion:](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [performSystemAnimation:onViews:options:animations:completion:](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
