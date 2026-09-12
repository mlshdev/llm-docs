> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/autoresizingmask-swift.struct](https://developer.apple.com/documentation/uikit/uiview/autoresizingmask-swift.struct)

# UIView.AutoresizingMask (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options for automatic view resizing.

## Declaration

```swift
struct AutoresizingMask
```

## Topics

### Constants

- [flexibleLeftMargin](autoresizingmask-swift.struct/flexibleleftmargin.md): Resizing performed by expanding or shrinking a view in the direction of the left margin.
- [flexibleWidth](autoresizingmask-swift.struct/flexiblewidth.md): Resizing performed by expanding or shrinking a view’s width.
- [flexibleRightMargin](autoresizingmask-swift.struct/flexiblerightmargin.md): Resizing performed by expanding or shrinking a view in the direction of the right margin.
- [flexibleTopMargin](autoresizingmask-swift.struct/flexibletopmargin.md): Resizing performed by expanding or shrinking a view in the direction of the top margin.
- [flexibleHeight](autoresizingmask-swift.struct/flexibleheight.md): Resizing performed by expanding or shrinking a view’s height.
- [flexibleBottomMargin](autoresizingmask-swift.struct/flexiblebottommargin.md): Resizing performed by expanding or shrinking a view in the direction of the bottom margin.

### Initializers

- [init(rawValue:)](autoresizingmask-swift.struct/init%28rawvalue_%29.md): Creates an autoresizing mask structure with the specified raw value.

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
- [UIView.KeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [NSLayoutConstraint.Axis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIView.TintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [layoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [layoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [noIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

# UIViewAutoresizing (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options for automatic view resizing.

## Declaration

```objectivec
enum UIViewAutoresizing : NSUInteger;
```

## Topics

### Constants

- [UIViewAutoresizingNone](../uiviewautoresizing/uiviewautoresizingnone.md): The option for indicating that the view does not resize.
- [UIViewAutoresizingFlexibleLeftMargin](autoresizingmask-swift.struct/flexibleleftmargin.md): Resizing performed by expanding or shrinking a view in the direction of the left margin.
- [UIViewAutoresizingFlexibleWidth](autoresizingmask-swift.struct/flexiblewidth.md): Resizing performed by expanding or shrinking a view’s width.
- [UIViewAutoresizingFlexibleRightMargin](autoresizingmask-swift.struct/flexiblerightmargin.md): Resizing performed by expanding or shrinking a view in the direction of the right margin.
- [UIViewAutoresizingFlexibleTopMargin](autoresizingmask-swift.struct/flexibletopmargin.md): Resizing performed by expanding or shrinking a view in the direction of the top margin.
- [UIViewAutoresizingFlexibleHeight](autoresizingmask-swift.struct/flexibleheight.md): Resizing performed by expanding or shrinking a view’s height.
- [UIViewAutoresizingFlexibleBottomMargin](autoresizingmask-swift.struct/flexiblebottommargin.md): Resizing performed by expanding or shrinking a view in the direction of the bottom margin.

## See Also

### Constants

- [UIViewAnimationCurve](animationcurve.md): Specifies the supported animation curves.
- [UIViewAnimationOptions](animationoptions.md): Options for animating views using block objects.
- [UIViewAnimationTransition](animationtransition.md): Animation transition options for use in an animation block object.
- [UISystemAnimation](systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIViewKeyframeAnimationOptions](keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [UILayoutConstraintAxis](../nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIViewTintAdjustmentMode](tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [UILayoutFittingCompressedSize](layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [UILayoutFittingExpandedSize](layoutfittingexpandedsize.md): The option to use the largest possible size.
- [UIViewNoIntrinsicMetric](nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UISemanticContentAttribute](../uisemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
