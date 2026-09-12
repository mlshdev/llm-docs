> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animationcurve](https://developer.apple.com/documentation/uikit/uiview/animationcurve)

# UIView.AnimationCurve (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Specifies the supported animation curves.

## Declaration

```swift
enum AnimationCurve
```

## Topics

### Constants

- [UIView.AnimationCurve.easeInOut](animationcurve/easeinout.md): An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing. This is the default curve for most animations.
- [UIView.AnimationCurve.easeIn](animationcurve/easein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [UIView.AnimationCurve.easeOut](animationcurve/easeout.md): An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
- [UIView.AnimationCurve.linear](animationcurve/linear.md): A linear animation curve causes an animation to occur evenly over its duration.

### Initializers

- [init(rawValue:)](animationcurve/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIView.AnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIView.AnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UIView.SystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIView.KeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [NSLayoutConstraint.Axis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIView.TintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [layoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [layoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [noIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIView.AutoresizingMask](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

# UIViewAnimationCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Specifies the supported animation curves.

## Declaration

```objectivec
enum UIViewAnimationCurve : NSInteger;
```

## Topics

### Constants

- [UIViewAnimationCurveEaseInOut](animationcurve/easeinout.md): An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing. This is the default curve for most animations.
- [UIViewAnimationCurveEaseIn](animationcurve/easein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [UIViewAnimationCurveEaseOut](animationcurve/easeout.md): An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
- [UIViewAnimationCurveLinear](animationcurve/linear.md): A linear animation curve causes an animation to occur evenly over its duration.

## See Also

### Constants

- [UIViewAnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIViewAnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UISystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIViewKeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [UILayoutConstraintAxis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIViewTintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [UIViewNoIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIViewAutoresizing](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
