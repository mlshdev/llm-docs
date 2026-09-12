> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/animationoptions/allowanimatedcontent](https://developer.apple.com/documentation/uikit/uiview/animationoptions/allowanimatedcontent)

# allowAnimatedContent (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Animate the views by changing the property values dynamically and redrawing the view.

## Declaration

```swift
static var allowAnimatedContent: UIView.AnimationOptions { get }
```

<a id="Discussion"></a>

## Discussion

If this key is not present, the views are animated using a snapshot image.

## See Also

### Constants

- [layoutSubviews](layoutsubviews.md): Lay out subviews at commit time so that they are animated along with their parent.
- [allowUserInteraction](allowuserinteraction.md): Allow the user to interact with views while they are being animated.
- [beginFromCurrentState](beginfromcurrentstate.md): Start the animation from the current setting associated with an already in-flight animation.
- [repeat](repeat.md): Repeat the animation indefinitely.
- [autoreverse](autoreverse.md): Run the animation backwards and forwards (must be combined with the repeat option).
- [overrideInheritedDuration](overrideinheritedduration.md): Force the animation to use the original duration value specified when the animation was submitted.
- [overrideInheritedCurve](overrideinheritedcurve.md): Force the animation to use the original curve value specified when the animation was submitted.
- [showHideTransitionViews](showhidetransitionviews.md): Hide or show views during a view transition.
- [overrideInheritedOptions](overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [curveEaseInOut](curveeaseinout.md): Specify an ease-in ease-out curve, which causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [curveEaseIn](curveeasein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [curveEaseOut](curveeaseout.md): An ease-out curve causes the animation to begin quickly, and then slow as it completes.
- [curveLinear](curvelinear.md): A linear animation curve causes an animation to occur evenly over its duration.
- [transitionFlipFromLeft](transitionflipfromleft.md): A transition that flips a view around its vertical axis from left to right (the left side of the view moves toward the front and right side toward the back).
- [transitionFlipFromRight](transitionflipfromright.md): A transition that flips a view around its vertical axis from right to left (the right side of the view moves toward the front and left side toward the back).

# UIViewAnimationOptionAllowAnimatedContent (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Animate the views by changing the property values dynamically and redrawing the view.

## Declaration

```objectivec
UIViewAnimationOptionAllowAnimatedContent
```

<a id="Discussion"></a>

## Discussion

If this key is not present, the views are animated using a snapshot image.

## See Also

### Constants

- [UIViewAnimationOptionLayoutSubviews](layoutsubviews.md): Lay out subviews at commit time so that they are animated along with their parent.
- [UIViewAnimationOptionAllowUserInteraction](allowuserinteraction.md): Allow the user to interact with views while they are being animated.
- [UIViewAnimationOptionBeginFromCurrentState](beginfromcurrentstate.md): Start the animation from the current setting associated with an already in-flight animation.
- [UIViewAnimationOptionRepeat](repeat.md): Repeat the animation indefinitely.
- [UIViewAnimationOptionAutoreverse](autoreverse.md): Run the animation backwards and forwards (must be combined with the repeat option).
- [UIViewAnimationOptionOverrideInheritedDuration](overrideinheritedduration.md): Force the animation to use the original duration value specified when the animation was submitted.
- [UIViewAnimationOptionOverrideInheritedCurve](overrideinheritedcurve.md): Force the animation to use the original curve value specified when the animation was submitted.
- [UIViewAnimationOptionShowHideTransitionViews](showhidetransitionviews.md): Hide or show views during a view transition.
- [UIViewAnimationOptionOverrideInheritedOptions](overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [UIViewAnimationOptionCurveEaseInOut](curveeaseinout.md): Specify an ease-in ease-out curve, which causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [UIViewAnimationOptionCurveEaseIn](curveeasein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [UIViewAnimationOptionCurveEaseOut](curveeaseout.md): An ease-out curve causes the animation to begin quickly, and then slow as it completes.
- [UIViewAnimationOptionCurveLinear](curvelinear.md): A linear animation curve causes an animation to occur evenly over its duration.
- [UIViewAnimationOptionTransitionNone](../../uiviewanimationoptions/uiviewanimationoptiontransitionnone.md): No transition is specified.
- [UIViewAnimationOptionTransitionFlipFromLeft](transitionflipfromleft.md): A transition that flips a view around its vertical axis from left to right (the left side of the view moves toward the front and right side toward the back).
