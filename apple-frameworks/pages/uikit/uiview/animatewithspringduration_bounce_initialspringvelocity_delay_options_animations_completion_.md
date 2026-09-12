> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animatewithspringduration:bounce:initialspringvelocity:delay:options:animations:completion:](https://developer.apple.com/documentation/uikit/uiview/animatewithspringduration:bounce:initialspringvelocity:delay:options:animations:completion:)

# animateWithSpringDuration:bounce:initialSpringVelocity:delay:options:animations:completion:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Animates changes to one or more views using a spring animation with the specified duration, bounce, initial velocity, delay, options, and completion handler.

## Declaration

```objectivec
+ (void) animateWithSpringDuration:(NSTimeInterval) duration bounce:(CGFloat) bounce initialSpringVelocity:(CGFloat) velocity delay:(NSTimeInterval) delay options:(UIViewAnimationOptions) options animations:(void (^)()) animations completion:(void (^)(BOOL finished)) completion;
```

## See Also

### Animating views

- [animateWithDuration:delay:options:animations:completion:](animate%28withduration_delay_options_animations_completion_%29.md): Animate changes to one or more views using the specified duration, delay, options, and completion handler.
- [animateWithDuration:animations:completion:](animate%28withduration_animations_completion_%29.md): Animate changes to one or more views using the specified duration and completion handler.
- [animateWithDuration:animations:](animate%28withduration_animations_%29.md): Animate changes to one or more views using the specified duration.
- [transitionWithView:duration:options:animations:completion:](transition%28with_duration_options_animations_completion_%29.md): Creates a transition animation for the specified container view.
- [transitionFromView:toView:duration:options:completion:](transition%28from_to_duration_options_completion_%29.md): Creates a transition animation between the specified views using the given parameters.
- [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md): Creates an animation block object that can be used to set up keyframe-based animations for the current view.
- [addKeyframeWithRelativeStartTime:relativeDuration:animations:](addkeyframe%28withrelativestarttime_relativeduration_animations_%29.md): Specifies the timing and animation values for a single frame of a keyframe animation.
- [performSystemAnimation:onViews:options:animations:completion:](perform%28__on_options_animations_completion_%29.md): Performs a specified system-provided animation on one or more views, along with optional parallel animations that you define.
- [animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:](animate%28withduration_delay_usingspringwithdamping_initialspringvelocity_options_animations_completion_%29.md): Performs a view animation using a timing curve corresponding to the motion of a physical spring.
- [performWithoutAnimation:](performwithoutanimation%28__%29.md): Disables a view transition animation.
- [modifyAnimationsWithRepeatCount:autoreverses:animations:](modifyanimations%28withrepeatcount_autoreverses_animations_%29.md): Repeats the specified animations a specific number of times, optionally running the animation forward and backward.
