> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/tintadjustmentmode-swift.enum](https://developer.apple.com/documentation/uikit/uiview/tintadjustmentmode-swift.enum)

# UIView.TintAdjustmentMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint adjustment mode for the view.

## Declaration

```swift
enum TintAdjustmentMode
```

## Topics

### Constants

- [UIView.TintAdjustmentMode.automatic](tintadjustmentmode-swift.enum/automatic.md): The tint adjustment mode of the view is the same as its superview’s tint adjustment mode (or `UIViewTintAdjustmentModeNormal` if the view has no superview).
- [UIView.TintAdjustmentMode.normal](tintadjustmentmode-swift.enum/normal.md): The view’s tint color property returns the completely unmodified tint color of the view.
- [UIView.TintAdjustmentMode.dimmed](tintadjustmentmode-swift.enum/dimmed.md): The view’s tint color property returns a desaturated, dimmed version of the view’s original tint color.

### Initializers

- [init(rawValue:)](tintadjustmentmode-swift.enum/init%28rawvalue_%29.md)

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
- [UIView.AnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UIView.SystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIView.KeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [NSLayoutConstraint.Axis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [layoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [layoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [noIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIView.AutoresizingMask](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

# UIViewTintAdjustmentMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint adjustment mode for the view.

## Declaration

```objectivec
enum UIViewTintAdjustmentMode : NSInteger;
```

## Topics

### Constants

- [UIViewTintAdjustmentModeAutomatic](tintadjustmentmode-swift.enum/automatic.md): The tint adjustment mode of the view is the same as its superview’s tint adjustment mode (or `UIViewTintAdjustmentModeNormal` if the view has no superview).
- [UIViewTintAdjustmentModeNormal](tintadjustmentmode-swift.enum/normal.md): The view’s tint color property returns the completely unmodified tint color of the view.
- [UIViewTintAdjustmentModeDimmed](tintadjustmentmode-swift.enum/dimmed.md): The view’s tint color property returns a desaturated, dimmed version of the view’s original tint color.

## See Also

### Constants

- [UIViewAnimationCurve](animationcurve.md): Specifies the supported animation curves.
- [UIViewAnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIViewAnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UISystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIViewKeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [UILayoutConstraintAxis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [UIViewNoIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIViewAutoresizing](autoresizingmask-swift.struct.md): Options for automatic view resizing.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
