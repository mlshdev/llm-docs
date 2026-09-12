> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltransitionconfiguration/interactive(timingcurve:)](https://developer.apple.com/documentation/swiftui/scrolltransitionconfiguration/interactive(timingcurve:))

# interactive(timingCurve:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new configuration that interactively interpolates the transition’s effect as the view is scrolled into the visible region of the container.

## Declaration

```swift
static func interactive(timingCurve: UnitCurve = .easeInOut) -> ScrollTransitionConfiguration
```

## Parameters

- `timingCurve`: The curve that adjusts the pace at which the effect is interpolated between phases of the transition. For example, an `.easeIn` curve causes interpolation to begin slowly as the view reaches the edge of the scroll view, then speed up as it reaches the visible threshold. The curve is applied ‘forward’ while the view is appearing, meaning that time zero corresponds to the view being just hidden, and time 1.0 corresponds to the pont at which the view reaches the configuration threshold. This also means that the timing curve is applied in reversed while the view is moving away from the center of the scroll view.

<a id="return-value"></a>

## Return Value

A configuration that interactively interpolates between transition phases based on the current scroll position.

## See Also

### Getting the configuration

- [identity](identity.md): Creates a new configuration that does not change the appearance of the view.
- [animated](animated.md): Creates a new configuration that discretely animates the transition when the view becomes visible.
- [animated(\_:)](animated%28__%29.md): Creates a new configuration that discretely animates the transition when the view becomes visible.
- [interactive](interactive.md): Creates a new configuration that interactively interpolates the transition’s effect as the view is scrolled into the visible region of the container.
