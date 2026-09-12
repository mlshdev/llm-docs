> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimationoptions/uiviewanimationoptionpreferredframesperseconddefault](https://developer.apple.com/documentation/uikit/uiviewanimationoptions/uiviewanimationoptionpreferredframesperseconddefault)

# UIViewAnimationOptionPreferredFramesPerSecondDefault

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default number of frames per second.

## Declaration

```objectivec
UIViewAnimationOptionPreferredFramesPerSecondDefault
```

<a id="Discussion"></a>

## Discussion

It’s recommended that you use the default value unless you have identified a specific need for an explicit rate.

## See Also

### Constants

- [UIViewAnimationOptionLayoutSubviews](../uiview/animationoptions/layoutsubviews.md): Lay out subviews at commit time so that they are animated along with their parent.
- [UIViewAnimationOptionAllowUserInteraction](../uiview/animationoptions/allowuserinteraction.md): Allow the user to interact with views while they are being animated.
- [UIViewAnimationOptionBeginFromCurrentState](../uiview/animationoptions/beginfromcurrentstate.md): Start the animation from the current setting associated with an already in-flight animation.
- [UIViewAnimationOptionRepeat](../uiview/animationoptions/repeat.md): Repeat the animation indefinitely.
- [UIViewAnimationOptionAutoreverse](../uiview/animationoptions/autoreverse.md): Run the animation backwards and forwards (must be combined with the repeat option).
- [UIViewAnimationOptionOverrideInheritedDuration](../uiview/animationoptions/overrideinheritedduration.md): Force the animation to use the original duration value specified when the animation was submitted.
- [UIViewAnimationOptionOverrideInheritedCurve](../uiview/animationoptions/overrideinheritedcurve.md): Force the animation to use the original curve value specified when the animation was submitted.
- [UIViewAnimationOptionAllowAnimatedContent](../uiview/animationoptions/allowanimatedcontent.md): Animate the views by changing the property values dynamically and redrawing the view.
- [UIViewAnimationOptionShowHideTransitionViews](../uiview/animationoptions/showhidetransitionviews.md): Hide or show views during a view transition.
- [UIViewAnimationOptionOverrideInheritedOptions](../uiview/animationoptions/overrideinheritedoptions.md): The option to not inherit the animation type or any options.
- [UIViewAnimationOptionCurveEaseInOut](../uiview/animationoptions/curveeaseinout.md): Specify an ease-in ease-out curve, which causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [UIViewAnimationOptionCurveEaseIn](../uiview/animationoptions/curveeasein.md): An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
- [UIViewAnimationOptionCurveEaseOut](../uiview/animationoptions/curveeaseout.md): An ease-out curve causes the animation to begin quickly, and then slow as it completes.
- [UIViewAnimationOptionCurveLinear](../uiview/animationoptions/curvelinear.md): A linear animation curve causes an animation to occur evenly over its duration.
- [UIViewAnimationOptionTransitionNone](uiviewanimationoptiontransitionnone.md): No transition is specified.
