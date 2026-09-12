> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/transitionoptions/slideforward](https://developer.apple.com/documentation/appkit/nsviewcontroller/transitionoptions/slideforward)

# slideForward (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.10+

A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:

## Declaration

```swift
static var slideForward: NSViewController.TransitionOptions { get }
```

<a id="Discussion"></a>

## Discussion

- For left-to-right user interface layout direction, the [slideLeft](slideleft.md) animation option.
- For right-to-left user interface layout direction, the [slideRight](slideright.md) animation option.

## See Also

### Constants

- [crossfade](crossfade.md): A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.
- [slideUp](slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [slideDown](slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [slideLeft](slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [slideRight](slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [slideBackward](slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [allowUserInteraction](allowuserinteraction.md): A transition animation that allows user interaction during the transition.

# NSViewControllerTransitionSlideForward (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:

## Declaration

```objectivec
NSViewControllerTransitionSlideForward
```

<a id="Discussion"></a>

## Discussion

- For left-to-right user interface layout direction, the [NSViewControllerTransitionSlideLeft](slideleft.md) animation option.
- For right-to-left user interface layout direction, the [NSViewControllerTransitionSlideRight](slideright.md) animation option.

## See Also

### Constants

- [NSViewControllerTransitionNone](../../nsviewcontrollertransitionoptions/nsviewcontrollertransitionnone.md): A transition with no animation (the default). Specifying another animation option from this enumeration overrides this option.
- [NSViewControllerTransitionCrossfade](crossfade.md): A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.
- [NSViewControllerTransitionSlideUp](slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [NSViewControllerTransitionSlideDown](slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [NSViewControllerTransitionSlideLeft](slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [NSViewControllerTransitionSlideRight](slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [NSViewControllerTransitionSlideBackward](slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [NSViewControllerTransitionAllowUserInteraction](allowuserinteraction.md): A transition animation that allows user interaction during the transition.
