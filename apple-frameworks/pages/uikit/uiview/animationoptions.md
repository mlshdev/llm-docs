> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animationoptions](https://developer.apple.com/documentation/uikit/uiview/animationoptions)

# UIView.AnimationOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Options for animating views using block objects.

## Declaration

```swift
struct AnimationOptions
```

## Topics

### Constants

- [layoutSubviews](animationoptions/layoutsubviews.md): Lay out subviews at commit time so that they are animated along with their parent.
- [allowUserInteraction](animationoptions/allowuserinteraction.md): Allow the user to interact with views while they are being animated.
- [beginFromCurrentState](animationoptions/beginfromcurrentstate.md): Start the animation from the current setting associated with an already in-flight animation.
- [repeat](animationoptions/repeat.md): Repeat the animation indefinitely.
- [autoreverse](animationoptions/autoreverse.md): Run the animation backwards and forwards (must be combined with the repeat option).
- [overrideInheritedDuration](animationoptions/overrideinheritedduration.md): Force the animation to use the original duration value specified when the animation was submitted.
- [overrideInheritedCurve](animationoptions/overrideinheritedcurve.md): Force the animation to use the original curve value specified when the animation was submitted.
- [allowAnimatedContent](animationoptions/allowanimatedcontent.md): Animate the views by changing the property values dynamically and redrawing the view.
- [showHideTransitionViews](animationoptions/showhidetransitionviews.md): Hide or show views during a view transition.
- [overrideInheritedOptions](animationoptions/overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [curveEaseInOut](animationoptions/curveeaseinout.md): Specify an ease-in ease-out curve, which causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [curveEaseIn](animationoptions/curveeasein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [curveEaseOut](animationoptions/curveeaseout.md): An ease-out curve causes the animation to begin quickly, and then slow as it completes.
- [curveLinear](animationoptions/curvelinear.md): A linear animation curve causes an animation to occur evenly over its duration.
- [transitionFlipFromLeft](animationoptions/transitionflipfromleft.md): A transition that flips a view around its vertical axis from left to right (the left side of the view moves toward the front and right side toward the back).
- [transitionFlipFromRight](animationoptions/transitionflipfromright.md): A transition that flips a view around its vertical axis from right to left (the right side of the view moves toward the front and left side toward the back).
- [transitionCurlUp](animationoptions/transitioncurlup.md): A transition that curls a view up from the bottom.
- [transitionCurlDown](animationoptions/transitioncurldown.md): A transition that curls a view down from the top.
- [transitionCrossDissolve](animationoptions/transitioncrossdissolve.md): A transition that dissolves from one view to the next.
- [transitionFlipFromTop](animationoptions/transitionflipfromtop.md): A transition that flips a view around its horizontal axis from top to bottom (the top side of the view moves toward the front and the bottom side toward the back).
- [transitionFlipFromBottom](animationoptions/transitionflipfrombottom.md): A transition that flips a view around its horizontal axis from bottom to top (the bottom side of the view moves toward the front and the top side toward the back).
- [preferredFramesPerSecond30](animationoptions/preferredframespersecond30.md): A frame rate of 30 frames per second.
- [preferredFramesPerSecond60](animationoptions/preferredframespersecond60.md): A frame rate of 60 frames per second.

### Initializers

- [init(rawValue:)](animationoptions/init%28rawvalue_%29.md): Creates an animation options structure with the specified raw value.

### Type Properties

- [flushUpdates](animationoptions/flushupdates.md): Flush all pending updates (including traits, properties, and layout) whenever the animation context changes. This includes flushing updates:

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

# UIViewAnimationOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Options for animating views using block objects.

## Declaration

```objectivec
enum UIViewAnimationOptions : NSUInteger;
```

## Topics

### Constants

- [UIViewAnimationOptionLayoutSubviews](animationoptions/layoutsubviews.md): Lay out subviews at commit time so that they are animated along with their parent.
- [UIViewAnimationOptionAllowUserInteraction](animationoptions/allowuserinteraction.md): Allow the user to interact with views while they are being animated.
- [UIViewAnimationOptionBeginFromCurrentState](animationoptions/beginfromcurrentstate.md): Start the animation from the current setting associated with an already in-flight animation.
- [UIViewAnimationOptionRepeat](animationoptions/repeat.md): Repeat the animation indefinitely.
- [UIViewAnimationOptionAutoreverse](animationoptions/autoreverse.md): Run the animation backwards and forwards (must be combined with the repeat option).
- [UIViewAnimationOptionOverrideInheritedDuration](animationoptions/overrideinheritedduration.md): Force the animation to use the original duration value specified when the animation was submitted.
- [UIViewAnimationOptionOverrideInheritedCurve](animationoptions/overrideinheritedcurve.md): Force the animation to use the original curve value specified when the animation was submitted.
- [UIViewAnimationOptionAllowAnimatedContent](animationoptions/allowanimatedcontent.md): Animate the views by changing the property values dynamically and redrawing the view.
- [UIViewAnimationOptionShowHideTransitionViews](animationoptions/showhidetransitionviews.md): Hide or show views during a view transition.
- [UIViewAnimationOptionOverrideInheritedOptions](animationoptions/overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [UIViewAnimationOptionCurveEaseInOut](animationoptions/curveeaseinout.md): Specify an ease-in ease-out curve, which causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [UIViewAnimationOptionCurveEaseIn](animationoptions/curveeasein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [UIViewAnimationOptionCurveEaseOut](animationoptions/curveeaseout.md): An ease-out curve causes the animation to begin quickly, and then slow as it completes.
- [UIViewAnimationOptionCurveLinear](animationoptions/curvelinear.md): A linear animation curve causes an animation to occur evenly over its duration.
- [UIViewAnimationOptionTransitionNone](../uiviewanimationoptions/uiviewanimationoptiontransitionnone.md): No transition is specified.
- [UIViewAnimationOptionTransitionFlipFromLeft](animationoptions/transitionflipfromleft.md): A transition that flips a view around its vertical axis from left to right (the left side of the view moves toward the front and right side toward the back).
- [UIViewAnimationOptionTransitionFlipFromRight](animationoptions/transitionflipfromright.md): A transition that flips a view around its vertical axis from right to left (the right side of the view moves toward the front and left side toward the back).
- [UIViewAnimationOptionTransitionCurlUp](animationoptions/transitioncurlup.md): A transition that curls a view up from the bottom.
- [UIViewAnimationOptionTransitionCurlDown](animationoptions/transitioncurldown.md): A transition that curls a view down from the top.
- [UIViewAnimationOptionTransitionCrossDissolve](animationoptions/transitioncrossdissolve.md): A transition that dissolves from one view to the next.
- [UIViewAnimationOptionTransitionFlipFromTop](animationoptions/transitionflipfromtop.md): A transition that flips a view around its horizontal axis from top to bottom (the top side of the view moves toward the front and the bottom side toward the back).
- [UIViewAnimationOptionTransitionFlipFromBottom](animationoptions/transitionflipfrombottom.md): A transition that flips a view around its horizontal axis from bottom to top (the bottom side of the view moves toward the front and the top side toward the back).
- [UIViewAnimationOptionPreferredFramesPerSecondDefault](../uiviewanimationoptions/uiviewanimationoptionpreferredframesperseconddefault.md): The default number of frames per second.
- [UIViewAnimationOptionPreferredFramesPerSecond30](animationoptions/preferredframespersecond30.md): A frame rate of 30 frames per second.
- [UIViewAnimationOptionPreferredFramesPerSecond60](animationoptions/preferredframespersecond60.md): A frame rate of 60 frames per second.

### Enumeration Cases

- [UIViewAnimationOptionFlushUpdates](animationoptions/flushupdates.md): Flush all pending updates (including traits, properties, and layout) whenever the animation context changes. This includes flushing updates:

## See Also

### Constants

- [UIViewAnimationCurve](animationcurve.md): Specifies the supported animation curves.
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
