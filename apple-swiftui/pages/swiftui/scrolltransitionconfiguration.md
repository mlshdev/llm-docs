> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration)

# ScrollTransitionConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The configuration of a scroll transition that controls how a transition is applied as a view is scrolled through the visible region of a containing scroll view or other container.

## Declaration

```swift
struct ScrollTransitionConfiguration
```

## Topics

### Getting the configuration

- [identity](scrolltransitionconfiguration/identity.md): Creates a new configuration that does not change the appearance of the view.
- [animated](scrolltransitionconfiguration/animated.md): Creates a new configuration that discretely animates the transition when the view becomes visible.
- [animated(\_:)](scrolltransitionconfiguration/animated%28__%29.md): Creates a new configuration that discretely animates the transition when the view becomes visible.
- [interactive](scrolltransitionconfiguration/interactive.md): Creates a new configuration that interactively interpolates the transition’s effect as the view is scrolled into the visible region of the container.
- [interactive(timingCurve:)](scrolltransitionconfiguration/interactive%28timingcurve_%29.md): Creates a new configuration that interactively interpolates the transition’s effect as the view is scrolled into the visible region of the container.

### Accessing the configuration

- [animation(\_:)](scrolltransitionconfiguration/animation%28__%29.md): Sets the animation with which the transition will be applied.
- [threshold(\_:)](scrolltransitionconfiguration/threshold%28__%29.md): Sets the threshold at which the view will be considered fully visible.
- [ScrollTransitionConfiguration.Threshold](scrolltransitionconfiguration/threshold.md): Describes a specific point in the progression of a target view within a container from hidden (fully outside the container) to visible.

## See Also

### Animating scroll transitions

- [scrollTransition(\_:axis:transition:)](view/scrolltransition%28__axis_transition_%29.md): Applies the given transition, animating between the phases of the transition as this view appears and disappears within the visible region of the containing scroll view.
- [scrollTransition(topLeading:bottomTrailing:axis:transition:)](view/scrolltransition%28topleading_bottomtrailing_axis_transition_%29.md): Applies the given transition, animating between the phases of the transition as this view appears and disappears within the visible region of the containing scroll view.
- [ScrollTransitionPhase](scrolltransitionphase.md): The phases that a view transitions between when it scrolls among other views.
