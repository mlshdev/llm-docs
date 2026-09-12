> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/hovereffect(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/hovereffect(_:isenabled:))

# hoverEffect(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Applies a hover effect to this view.

## Declaration

```swift
nonisolated func hoverEffect(_ effect: HoverEffect = .automatic, isEnabled: Bool = true) -> some View

```

## Parameters

- `effect`: The effect to apply to this view.
- `isEnabled`: Whether the effect is enabled or not.

<a id="return-value"></a>

## Return Value

A new view that applies a hover effect to `self`.

<a id="discussion"></a>

## Discussion

By default, [automatic](../hovereffect/automatic.md) is used. You can control the behavior of the automatic effect with the [defaultHoverEffect(\_:)](defaulthovereffect%28__%29.md) modifier.

## See Also

### Responding to hover events

- [onHover(perform:)](onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffectDisabled(\_:)](hovereffectdisabled%28__%29.md): Adds a condition that controls whether this view can display hover effects.
- [defaultHoverEffect(\_:)](defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [isHoverEffectEnabled](../environmentvalues/ishovereffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.
- [HoverPhase](../hoverphase.md): The current hovering state and value of the pointer.
- [HoverEffectPhaseOverride](../hovereffectphaseoverride.md): Options for overriding a hover effect’s current phase.
- [OrnamentHoverContentEffect](../ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
- [OrnamentHoverEffect](../ornamenthovereffect.md): Presents an ornament on hover.
