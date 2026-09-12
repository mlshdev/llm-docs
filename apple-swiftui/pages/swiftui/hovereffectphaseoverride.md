> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectphaseoverride](https://developer.apple.com/documentation/swiftui/hovereffectphaseoverride)

# HoverEffectPhaseOverride

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Options for overriding a hover effect’s current phase.

## Declaration

```swift
struct HoverEffectPhaseOverride
```

<a id="overview"></a>

## Overview

By default hover effects transition between the active and inactive phases in response to hover events. Use `HoverEffectPhaseOverride` to cause a hover effect to transition between phases based on other criteria.

## Topics

### Type Properties

- [active](hovereffectphaseoverride/active.md): Immediately transition to the active phase.
- [inactive](hovereffectphaseoverride/inactive.md): Immediately transition to the inactive phase.

### Type Methods

- [activeTemporarily(trigger:)](hovereffectphaseoverride/activetemporarily%28trigger_%29.md): Temporaily transitions to the active phase until all animations finish, and the transition is complete.
- [inactiveTemporarily(trigger:)](hovereffectphaseoverride/inactivetemporarily%28trigger_%29.md): Temporaily transitions to the inactve phase until all animations finish, and the transition is complete.
- [toggled(trigger:)](hovereffectphaseoverride/toggled%28trigger_%29.md): Immediately transition to the opposite of an effect’s current phase.
- [toggledTemporarily(trigger:)](hovereffectphaseoverride/toggledtemporarily%28trigger_%29.md): Temporaily transitions to the opposite of the effect’s current phase at the moment the override is applied.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Responding to hover events

- [onHover(perform:)](view/onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](view/oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffect(\_:isEnabled:)](view/hovereffect%28__isenabled_%29.md): Applies a hover effect to this view.
- [hoverEffectDisabled(\_:)](view/hovereffectdisabled%28__%29.md): Adds a condition that controls whether this view can display hover effects.
- [defaultHoverEffect(\_:)](view/defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [isHoverEffectEnabled](environmentvalues/ishovereffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.
- [HoverPhase](hoverphase.md): The current hovering state and value of the pointer.
- [OrnamentHoverContentEffect](ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
- [OrnamentHoverEffect](ornamenthovereffect.md): Presents an ornament on hover.
