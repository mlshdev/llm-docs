> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/keyframeanimationoptions/repeat](https://developer.apple.com/documentation/uikit/uiview/keyframeanimationoptions/repeat)

# repeat (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The option to repeat an animation indefinitely.

## Declaration

```swift
static var `repeat`: UIView.KeyframeAnimationOptions { get }
```

## See Also

### Constants

- [layoutSubviews](layoutsubviews.md): The option to lay out subviews at commit time so that they’re animated along with their parent.
- [allowUserInteraction](allowuserinteraction.md): The option that allows a person to interact with views while they’re being animated.
- [beginFromCurrentState](beginfromcurrentstate.md): The option to start an animation from the current setting associated with an already in-flight animation.
- [autoreverse](autoreverse.md): The option to run an animation backwards and forwards.
- [overrideInheritedDuration](overrideinheritedduration.md): The option to force an animation to use the original duration value specified when the animation was submitted.
- [overrideInheritedOptions](overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [calculationModeLinear](calculationmodelinear.md): The option to use a simple linear calculation when interpolating between keyframe values.
- [calculationModeDiscrete](calculationmodediscrete.md): The option to not interpolate between keyframe values, but rather to jump directly to each new keyframe value.
- [calculationModePaced](calculationmodepaced.md): The option to compute intermediate keyframe values using a simple pacing algorithm.
- [calculationModeCubic](calculationmodecubic.md): The option to compute intermediate frames using a default Catmull-Rom spline that passes through the keyframe values.
- [calculationModeCubicPaced](calculationmodecubicpaced.md): The option to compute intermediate frames using the cubic scheme while ignoring the timing properties of the animation.

# UIViewKeyframeAnimationOptionRepeat (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The option to repeat an animation indefinitely.

## Declaration

```objectivec
UIViewKeyframeAnimationOptionRepeat
```

## See Also

### Constants

- [UIViewKeyframeAnimationOptionLayoutSubviews](layoutsubviews.md): The option to lay out subviews at commit time so that they’re animated along with their parent.
- [UIViewKeyframeAnimationOptionAllowUserInteraction](allowuserinteraction.md): The option that allows a person to interact with views while they’re being animated.
- [UIViewKeyframeAnimationOptionBeginFromCurrentState](beginfromcurrentstate.md): The option to start an animation from the current setting associated with an already in-flight animation.
- [UIViewKeyframeAnimationOptionAutoreverse](autoreverse.md): The option to run an animation backwards and forwards.
- [UIViewKeyframeAnimationOptionOverrideInheritedDuration](overrideinheritedduration.md): The option to force an animation to use the original duration value specified when the animation was submitted.
- [UIViewKeyframeAnimationOptionOverrideInheritedOptions](overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [UIViewKeyframeAnimationOptionCalculationModeLinear](calculationmodelinear.md): The option to use a simple linear calculation when interpolating between keyframe values.
- [UIViewKeyframeAnimationOptionCalculationModeDiscrete](calculationmodediscrete.md): The option to not interpolate between keyframe values, but rather to jump directly to each new keyframe value.
- [UIViewKeyframeAnimationOptionCalculationModePaced](calculationmodepaced.md): The option to compute intermediate keyframe values using a simple pacing algorithm.
- [UIViewKeyframeAnimationOptionCalculationModeCubic](calculationmodecubic.md): The option to compute intermediate frames using a default Catmull-Rom spline that passes through the keyframe values.
- [UIViewKeyframeAnimationOptionCalculationModeCubicPaced](calculationmodecubicpaced.md): The option to compute intermediate frames using the cubic scheme while ignoring the timing properties of the animation.
