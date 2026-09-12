> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontrollertransitionoptions/nsviewcontrollertransitionnone](https://developer.apple.com/documentation/appkit/nsviewcontrollertransitionoptions/nsviewcontrollertransitionnone)

# NSViewControllerTransitionNone

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

A transition with no animation (the default). Specifying another animation option from this enumeration overrides this option.

## Declaration

```objectivec
NSViewControllerTransitionNone
```

## See Also

### Constants

- [NSViewControllerTransitionCrossfade](../nsviewcontroller/transitionoptions/crossfade.md): A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.
- [NSViewControllerTransitionSlideUp](../nsviewcontroller/transitionoptions/slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [NSViewControllerTransitionSlideDown](../nsviewcontroller/transitionoptions/slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [NSViewControllerTransitionSlideLeft](../nsviewcontroller/transitionoptions/slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [NSViewControllerTransitionSlideRight](../nsviewcontroller/transitionoptions/slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [NSViewControllerTransitionSlideForward](../nsviewcontroller/transitionoptions/slideforward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:
- [NSViewControllerTransitionSlideBackward](../nsviewcontroller/transitionoptions/slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [NSViewControllerTransitionAllowUserInteraction](../nsviewcontroller/transitionoptions/allowuserinteraction.md): A transition animation that allows user interaction during the transition.
