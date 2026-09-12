> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/addkeyframe(withrelativestarttime:relativeduration:animations:)](https://developer.apple.com/documentation/uikit/uiview/addkeyframe(withrelativestarttime:relativeduration:animations:))

# addKeyframe(withRelativeStartTime:relativeDuration:animations:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies the timing and animation values for a single frame of a keyframe animation.

## Declaration

```swift
class func addKeyframe(withRelativeStartTime frameStartTime: Double, relativeDuration frameDuration: Double, animations: @escaping () -> Void)
```

## Parameters

- `frameStartTime`: The time at which to start the specified animations. This value must be in the range `0` to `1`, where `0` represents the start of the overall animation and `1` represents the end of the overall animation. For example, for an animation that is two seconds in duration, specifying a start time of `0.5` causes the animations to begin executing one second after the start of the overall animation.
- `frameDuration`: The length of time over which to animate to the specified value. This value must be in the range `0` to `1` and indicates the amount of time relative to the overall animation length. If you specify a value of `0`, any properties you set in the `animations` block update immediately at the specified start time. If you specify a nonzero value, the properties animate over that amount of time. For example, for an animation that is two seconds in duration, specifying a duration of `0.5` results in an animation duration of one second.
- `animations`: A block object containing the animations you want to perform. This is where you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

To animate view properties during a keyframe animation, call this method from within the animation block you pass to the [animateKeyframes(withDuration:delay:options:animations:completion:)](animatekeyframes%28withduration_delay_options_animations_completion_%29.md) method. To animate between different values, or to tweak the timing of your view property animations, you can call this method multiple times within a block.

The view properties you change in the `animations` block animate over the timespan you specify in `frameDuration` parameter. The properties do not begin animating until the time you specify in the `frameStartTime` parameter. After the frame start time, the animation executes over its specified duration or until interrupted by another animation.

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
- [perform(\_:on:options:animations:completion:)](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:)](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation(\_:)](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimations(withRepeatCount:autoreverses:animations:)](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.

# addKeyframeWithRelativeStartTime:relativeDuration:animations: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies the timing and animation values for a single frame of a keyframe animation.

## Declaration

```objectivec
+ (void) addKeyframeWithRelativeStartTime:(double) frameStartTime relativeDuration:(double) frameDuration animations:(void (^)()) animations;
```

## Parameters

- `frameStartTime`: The time at which to start the specified animations. This value must be in the range `0` to `1`, where `0` represents the start of the overall animation and `1` represents the end of the overall animation. For example, for an animation that is two seconds in duration, specifying a start time of `0.5` causes the animations to begin executing one second after the start of the overall animation.
- `frameDuration`: The length of time over which to animate to the specified value. This value must be in the range `0` to `1` and indicates the amount of time relative to the overall animation length. If you specify a value of `0`, any properties you set in the `animations` block update immediately at the specified start time. If you specify a nonzero value, the properties animate over that amount of time. For example, for an animation that is two seconds in duration, specifying a duration of `0.5` results in an animation duration of one second.
- `animations`: A block object containing the animations you want to perform. This is where you programmatically change any animatable properties of the views in your view hierarchy. This block takes no parameters and has no return value. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

To animate view properties during a keyframe animation, call this method from within the animation block you pass to the [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md) method. To animate between different values, or to tweak the timing of your view property animations, you can call this method multiple times within a block.

The view properties you change in the `animations` block animate over the timespan you specify in `frameDuration` parameter. The properties do not begin animating until the time you specify in the `frameStartTime` parameter. After the frame start time, the animation executes over its specified duration or until interrupted by another animation.

## See Also

### Animating views

- [animateWithSpringDuration:bounce:initialSpringVelocity:delay:options:animations:completion:](animatewithspringduration_bounce_initialspringvelocity_delay_options_animations_completion_.md): Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.
- [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animateWithDuration:animations:completion:](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animateWithDuration:animations:](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transitionFromView:toView:duration:options:completion:](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [performSystemAnimation:onViews:options:animations:completion:](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
