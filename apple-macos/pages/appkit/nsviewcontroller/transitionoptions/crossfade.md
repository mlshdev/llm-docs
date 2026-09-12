> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/transitionoptions/crossfade](https://developer.apple.com/documentation/appkit/nsviewcontroller/transitionoptions/crossfade)

# crossfade (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.10+

A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.

## Declaration

```swift
static var crossfade: NSViewController.TransitionOptions { get }
```

## See Also

### Constants

- [slideUp](slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [slideDown](slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [slideLeft](slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [slideRight](slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [slideForward](slideforward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:
- [slideBackward](slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [allowUserInteraction](allowuserinteraction.md): A transition animation that allows user interaction during the transition.

# NSViewControllerTransitionCrossfade (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.

## Declaration

```objectivec
NSViewControllerTransitionCrossfade
```

## See Also

### Constants

- [NSViewControllerTransitionNone](../../nsviewcontrollertransitionoptions/nsviewcontrollertransitionnone.md): A transition with no animation (the default). Specifying another animation option from this enumeration overrides this option.
- [NSViewControllerTransitionSlideUp](slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [NSViewControllerTransitionSlideDown](slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [NSViewControllerTransitionSlideLeft](slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [NSViewControllerTransitionSlideRight](slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [NSViewControllerTransitionSlideForward](slideforward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:
- [NSViewControllerTransitionSlideBackward](slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [NSViewControllerTransitionAllowUserInteraction](allowuserinteraction.md): A transition animation that allows user interaction during the transition.
