> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/hovereffectdisabled(_:)](https://developer.apple.com/documentation/swiftui/view/hovereffectdisabled(_:))

# hoverEffectDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a condition that controls whether this view can display hover effects.

## Declaration

```swift
nonisolated func hoverEffectDisabled(_ disabled: Bool = true) -> some View

```

## Parameters

- `disabled`: A Boolean value that determines whether this view can display hover effects.

<a id="return-value"></a>

## Return Value

A view that controls whether hover effects can be displayed in this view.

<a id="discussion"></a>

## Discussion

The higher views in a view hierarchy can override the value you set on this view. In the following example, the button does not display a hover effect because the outer `hoverEffectDisabled(_:)` modifier overrides the inner one:

```swift
HStack {
    Button("Press") {}
        .hoverEffectDisabled(false)
}
.hoverEffectDisabled(true)
```

## See Also

### Responding to hover events

- [onHover(perform:)](onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffect(\_:isEnabled:)](hovereffect%28__isenabled_%29.md): Applies a hover effect to this view.
- [defaultHoverEffect(\_:)](defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [isHoverEffectEnabled](../environmentvalues/ishovereffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.
- [HoverPhase](../hoverphase.md): The current hovering state and value of the pointer.
- [HoverEffectPhaseOverride](../hovereffectphaseoverride.md): Options for overriding a hover effect’s current phase.
- [OrnamentHoverContentEffect](../ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
- [OrnamentHoverEffect](../ornamenthovereffect.md): Presents an ornament on hover.
