> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/keyframeanimationoptions](https://developer.apple.com/documentation/uikit/uiview/keyframeanimationoptions)

# UIView.KeyframeAnimationOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Options for configuring keyframe-based animations.

## Declaration

```swift
struct KeyframeAnimationOptions
```

<a id="overview"></a>

## Overview

Use these options with the [animateKeyframes(withDuration:delay:options:animations:completion:)](animatekeyframes%28withduration_delay_options_animations_completion_%29.md) method.

## Topics

### Constants

- [layoutSubviews](keyframeanimationoptions/layoutsubviews.md): The option to lay out subviews at commit time so that they’re animated along with their parent.
- [allowUserInteraction](keyframeanimationoptions/allowuserinteraction.md): The option that allows a person to interact with views while they’re being animated.
- [beginFromCurrentState](keyframeanimationoptions/beginfromcurrentstate.md): The option to start an animation from the current setting associated with an already in-flight animation.
- [repeat](keyframeanimationoptions/repeat.md): The option to repeat an animation indefinitely.
- [autoreverse](keyframeanimationoptions/autoreverse.md): The option to run an animation backwards and forwards.
- [overrideInheritedDuration](keyframeanimationoptions/overrideinheritedduration.md): The option to force an animation to use the original duration value specified when the animation was submitted.
- [overrideInheritedOptions](keyframeanimationoptions/overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [calculationModeLinear](keyframeanimationoptions/calculationmodelinear.md): The option to use a simple linear calculation when interpolating between keyframe values.
- [calculationModeDiscrete](keyframeanimationoptions/calculationmodediscrete.md): The option to not interpolate between keyframe values, but rather to jump directly to each new keyframe value.
- [calculationModePaced](keyframeanimationoptions/calculationmodepaced.md): The option to compute intermediate keyframe values using a simple pacing algorithm.
- [calculationModeCubic](keyframeanimationoptions/calculationmodecubic.md): The option to compute intermediate frames using a default Catmull-Rom spline that passes through the keyframe values.
- [calculationModeCubicPaced](keyframeanimationoptions/calculationmodecubicpaced.md): The option to compute intermediate frames using the cubic scheme while ignoring the timing properties of the animation.

### Initializers

- [init(rawValue:)](keyframeanimationoptions/init%28rawvalue_%29.md): Creates keyframe animation options with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [UIView.AnimationCurve](animationcurve.md): Specifies the supported animation curves.
- [UIView.AnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIView.AnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UIView.SystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [NSLayoutConstraint.Axis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIView.TintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [layoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [layoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [noIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIView.AutoresizingMask](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

# UIViewKeyframeAnimationOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Options for configuring keyframe-based animations.

## Declaration

```objectivec
enum UIViewKeyframeAnimationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these options with the [animateKeyframesWithDuration:delay:options:animations:completion:](animatekeyframes%28withduration_delay_options_animations_completion_%29.md) method.

## Topics

### Constants

- [UIViewKeyframeAnimationOptionLayoutSubviews](keyframeanimationoptions/layoutsubviews.md): The option to lay out subviews at commit time so that they’re animated along with their parent.
- [UIViewKeyframeAnimationOptionAllowUserInteraction](keyframeanimationoptions/allowuserinteraction.md): The option that allows a person to interact with views while they’re being animated.
- [UIViewKeyframeAnimationOptionBeginFromCurrentState](keyframeanimationoptions/beginfromcurrentstate.md): The option to start an animation from the current setting associated with an already in-flight animation.
- [UIViewKeyframeAnimationOptionRepeat](keyframeanimationoptions/repeat.md): The option to repeat an animation indefinitely.
- [UIViewKeyframeAnimationOptionAutoreverse](keyframeanimationoptions/autoreverse.md): The option to run an animation backwards and forwards.
- [UIViewKeyframeAnimationOptionOverrideInheritedDuration](keyframeanimationoptions/overrideinheritedduration.md): The option to force an animation to use the original duration value specified when the animation was submitted.
- [UIViewKeyframeAnimationOptionOverrideInheritedOptions](keyframeanimationoptions/overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [UIViewKeyframeAnimationOptionCalculationModeLinear](keyframeanimationoptions/calculationmodelinear.md): The option to use a simple linear calculation when interpolating between keyframe values.
- [UIViewKeyframeAnimationOptionCalculationModeDiscrete](keyframeanimationoptions/calculationmodediscrete.md): The option to not interpolate between keyframe values, but rather to jump directly to each new keyframe value.
- [UIViewKeyframeAnimationOptionCalculationModePaced](keyframeanimationoptions/calculationmodepaced.md): The option to compute intermediate keyframe values using a simple pacing algorithm.
- [UIViewKeyframeAnimationOptionCalculationModeCubic](keyframeanimationoptions/calculationmodecubic.md): The option to compute intermediate frames using a default Catmull-Rom spline that passes through the keyframe values.
- [UIViewKeyframeAnimationOptionCalculationModeCubicPaced](keyframeanimationoptions/calculationmodecubicpaced.md): The option to compute intermediate frames using the cubic scheme while ignoring the timing properties of the animation.

## See Also

### Constants

- [UIViewAnimationCurve](animationcurve.md): Specifies the supported animation curves.
- [UIViewAnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIViewAnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UISystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UILayoutConstraintAxis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIViewTintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [UIViewNoIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIViewAutoresizing](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
