> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animationtransition](https://developer.apple.com/documentation/uikit/uiview/animationtransition)

# UIView.AnimationTransition (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Animation transition options for use in an animation block object.

## Declaration

```swift
enum AnimationTransition
```

## Topics

### Constants

- [UIView.AnimationTransition.none](animationtransition/none.md): The option for indicating that no transition is specified.
- [UIView.AnimationTransition.flipFromLeft](animationtransition/flipfromleft.md): A transition that flips a view around a vertical axis from left to right. The left side of the view moves towards the front and right side towards the back.
- [UIView.AnimationTransition.flipFromRight](animationtransition/flipfromright.md): A transition that flips a view around a vertical axis from right to left. The right side of the view moves towards the front and left side towards the back.
- [UIView.AnimationTransition.curlUp](animationtransition/curlup.md): A transition that curls a view up from the bottom.
- [UIView.AnimationTransition.curlDown](animationtransition/curldown.md): A transition that curls a view down from the top.

### Initializers

- [init(rawValue:)](animationtransition/init%28rawvalue_%29.md)

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

- [UIView.AnimationCurve](animationcurve.md): Specifies the supported animation curves.
- [UIView.AnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIView.SystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIView.KeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [NSLayoutConstraint.Axis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIView.TintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [layoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [layoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [noIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIView.AutoresizingMask](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

# UIViewAnimationTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Animation transition options for use in an animation block object.

## Declaration

```objectivec
enum UIViewAnimationTransition : NSInteger;
```

## Topics

### Constants

- [UIViewAnimationTransitionNone](animationtransition/none.md): The option for indicating that no transition is specified.
- [UIViewAnimationTransitionFlipFromLeft](animationtransition/flipfromleft.md): A transition that flips a view around a vertical axis from left to right. The left side of the view moves towards the front and right side towards the back.
- [UIViewAnimationTransitionFlipFromRight](animationtransition/flipfromright.md): A transition that flips a view around a vertical axis from right to left. The right side of the view moves towards the front and left side towards the back.
- [UIViewAnimationTransitionCurlUp](animationtransition/curlup.md): A transition that curls a view up from the bottom.
- [UIViewAnimationTransitionCurlDown](animationtransition/curldown.md): A transition that curls a view down from the top.

## See Also

### Constants

- [UIViewAnimationCurve](animationcurve.md): Specifies the supported animation curves.
- [UIViewAnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UISystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIViewKeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [UILayoutConstraintAxis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIViewTintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [UIViewNoIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIViewAutoresizing](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
