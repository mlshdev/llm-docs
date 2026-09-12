> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/ornamenthovereffect](https://developer.apple.com/documentation/swiftui/ornamenthovereffect)

# OrnamentHoverEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Presents an ornament on hover.

## Declaration

```swift
struct OrnamentHoverEffect<OrnamentView> where OrnamentView : View
```

<a id="overview"></a>

## Overview

You don’t use this directly. Use `CustomHoverEffect.ornament` to create ornament effects instead.

## Relationships

### Conforms To

- [CustomHoverEffect](customhovereffect.md)

## See Also

### Responding to hover events

- [onHover(perform:)](view/onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](view/oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffect(\_:isEnabled:)](view/hovereffect%28__isenabled_%29.md): Applies a hover effect to this view.
- [hoverEffectDisabled(\_:)](view/hovereffectdisabled%28__%29.md): Adds a condition that controls whether this view can display hover effects.
- [defaultHoverEffect(\_:)](view/defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [isHoverEffectEnabled](environmentvalues/ishovereffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.
- [HoverPhase](hoverphase.md): The current hovering state and value of the pointer.
- [HoverEffectPhaseOverride](hovereffectphaseoverride.md): Options for overriding a hover effect’s current phase.
- [OrnamentHoverContentEffect](ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
