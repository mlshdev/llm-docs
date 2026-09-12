> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/animated(_:)](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/animated(_:))

# animated(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new configuration that discretely animates the transition when the view becomes visible.

## Declaration

```swift
static func animated(_ animation: Animation = .default) -> ScrollTransitionConfiguration
```

## Parameters

- `animation`: The animation to use when transitioning between states.

<a id="return-value"></a>

## Return Value

A configuration that discretely animates between transition phases.

<a id="discussion"></a>

## Discussion

Unlike the interactive configuration, the transition isn’t interpolated as the scroll view is scrolled. Instead, the transition phase only changes once the threshold has been reached, at which time the given animation is used to animate to the new phase.

## See Also

### Getting the configuration

- [identity](identity.md): Creates a new configuration that does not change the appearance of the view.
- [animated](animated.md): Creates a new configuration that discretely animates the transition when the view becomes visible.
- [interactive](interactive.md): Creates a new configuration that interactively interpolates the transition’s effect as the view is scrolled into the visible region of the container.
- [interactive(timingCurve:)](interactive%28timingcurve_%29.md): Creates a new configuration that interactively interpolates the transition’s effect as the view is scrolled into the visible region of the container.
