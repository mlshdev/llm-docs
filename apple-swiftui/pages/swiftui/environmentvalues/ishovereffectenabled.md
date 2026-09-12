> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/ishovereffectenabled](https://developer.apple.com/documentation/swiftui/environmentvalues/ishovereffectenabled)

# isHoverEffectEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.

## Declaration

```swift
var isHoverEffectEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Responding to hover events

- [onHover(perform:)](../view/onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](../view/oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffect(\_:isEnabled:)](../view/hovereffect%28__isenabled_%29.md): Applies a hover effect to this view.
- [hoverEffectDisabled(\_:)](../view/hovereffectdisabled%28__%29.md): Adds a condition that controls whether this view can display hover effects.
- [defaultHoverEffect(\_:)](../view/defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [HoverPhase](../hoverphase.md): The current hovering state and value of the pointer.
- [HoverEffectPhaseOverride](../hovereffectphaseoverride.md): Options for overriding a hover effect’s current phase.
- [OrnamentHoverContentEffect](../ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
- [OrnamentHoverEffect](../ornamenthovereffect.md): Presents an ornament on hover.
