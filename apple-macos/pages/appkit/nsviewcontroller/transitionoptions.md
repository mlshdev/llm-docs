> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/transitionoptions](https://developer.apple.com/documentation/appkit/nsviewcontroller/transitionoptions)

# NSViewController.TransitionOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.10+

Animation options for view transitions in a view controller.

## Declaration

```swift
struct TransitionOptions
```

<a id="overview"></a>

## Overview

The up and down slide animation options are disjoint and you cannot combine them.

Likewise, the left and right slide animation options are disjoint and you cannot combine them.

User interaction with transitioning views is prevented for all animation options except the [allowUserInteraction](transitionoptions/allowuserinteraction.md) option.

## Topics

### Constants

- [crossfade](transitionoptions/crossfade.md): A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.
- [slideUp](transitionoptions/slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [slideDown](transitionoptions/slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [slideLeft](transitionoptions/slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [slideRight](transitionoptions/slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [slideForward](transitionoptions/slideforward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:
- [slideBackward](transitionoptions/slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [allowUserInteraction](transitionoptions/allowuserinteraction.md): A transition animation that allows user interaction during the transition.

### Initializers

- [init(rawValue:)](transitionoptions/init%28rawvalue_%29.md)

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

# NSViewControllerTransitionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Animation options for view transitions in a view controller.

## Declaration

```objectivec
enum NSViewControllerTransitionOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

The up and down slide animation options are disjoint and you cannot combine them.

Likewise, the left and right slide animation options are disjoint and you cannot combine them.

User interaction with transitioning views is prevented for all animation options except the [NSViewControllerTransitionAllowUserInteraction](transitionoptions/allowuserinteraction.md) option.

## Topics

### Constants

- [NSViewControllerTransitionNone](../nsviewcontrollertransitionoptions/nsviewcontrollertransitionnone.md): A transition with no animation (the default). Specifying another animation option from this enumeration overrides this option.
- [NSViewControllerTransitionCrossfade](transitionoptions/crossfade.md): A transition animation that fades the new view in and simultaneously fades the old view out. You can combine this animation option with any of the “slide” options in this enumeration.
- [NSViewControllerTransitionSlideUp](transitionoptions/slideup.md): A transition animation that slides the old view up while the new view comes into view from the bottom. In other words, both views slide up.
- [NSViewControllerTransitionSlideDown](transitionoptions/slidedown.md): A transition animation that slides the old view down while the new view slides into view from the top. In other words, both views slide down.
- [NSViewControllerTransitionSlideLeft](transitionoptions/slideleft.md): A transition animation that slides the old view to the left while the new view slides into view from the right. In other words, both views slide to the left.
- [NSViewControllerTransitionSlideRight](transitionoptions/slideright.md): A transition animation that slides the old view to the right while the new view slides into view from the left. In other words, both views slide to the right.
- [NSViewControllerTransitionSlideForward](transitionoptions/slideforward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md)) in a “forward” manner, as follows:
- [NSViewControllerTransitionSlideBackward](transitionoptions/slidebackward.md): A transition animation that reflects the user interface layout direction ([userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md)) in a “backward” manner, as follows
- [NSViewControllerTransitionAllowUserInteraction](transitionoptions/allowuserinteraction.md): A transition animation that allows user interaction during the transition.
