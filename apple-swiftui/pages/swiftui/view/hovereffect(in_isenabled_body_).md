> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/hovereffect(in:isenabled:body:)](https://developer.apple.com/documentation/swiftui/view/hovereffect(in:isenabled:body:))

# hoverEffect(in:isEnabled:body:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Applies a hover effect to this view described by the given closure.

## Declaration

```swift
nonisolated func hoverEffect(in group: HoverEffectGroup? = nil, isEnabled: Bool = true, body: @escaping (EmptyHoverEffectContent, Bool, GeometryProxy) -> some HoverEffectContent) -> some View

```

## Parameters

- `group`: An optional [HoverEffectGroup](../hovereffectgroup.md) to add this effect to.
- `isEnabled`: Whether the effect is enabled or not. If `false`, the effect’s inactive state will be applied, and it will not apply the active state when hovered.
- `body`: The closure that constructs a `HoverEffectContent` for each of the effect’s phases.

<a id="return-value"></a>

## Return Value

A new effect that changes a view’s appearance when hovered.

<a id="discussion"></a>

## Discussion

You use this modifier to describe how a view should change when hovered. The given block is provided an empty effect that you use to compose effects, as well as a boolean describing which phase is being requested. A [GeometryProxy](../geometryproxy.md) is also provided, allowing effects to change based on the view’s geometry.

In the following example, the `Text` will have a scale of 1.0 when inactive, and then scale to 1.1 when hovered:

```swift
Text("Hello, World!")
    .hoverEffect { effect, isActive, proxy in
        effect.scaleEffect(!isActive ? 1.0 : 1.1)
    }
```

Use the [animation(\_:body:)](../hovereffectcontent/animation%28__body_%29.md) modifier to specify how visual changes should be animated.

## See Also

### Changing view appearance for hover events

- [hoverEffect(\_:)](hovereffect%28__%29.md): Applies a hover effect to this view.
- [HoverEffect](../hovereffect.md): An effect applied when the pointer hovers over a view.
- [hoverEffect(\_:in:isEnabled:)](hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](../hovereffectgroup.md).
- [CustomHoverEffect](../customhovereffect.md): A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.
- [ContentHoverEffect](../contenthovereffect.md): A `CustomHoverEffect` that applies effects to a view on hover using a closure.
- [HoverEffectGroup](../hovereffectgroup.md): Describes a grouping of effects that activate together.
- [hoverEffectGroup()](hovereffectgroup%28%29.md): Adds an implicit [HoverEffectGroup](../hovereffectgroup.md) to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(\_:)](hovereffectgroup%28__%29.md): Adds a [HoverEffectGroup](../hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(id:in:behavior:)](hovereffectgroup%28id_in_behavior_%29.md): Adds a [HoverEffectGroup](../hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [GroupHoverEffect](../grouphovereffect.md): A `CustomHoverEffect` that activates a named group of effects.
- [HoverEffectContent](../hovereffectcontent.md): A type that describes the effects of a view for a particular hover effect phase.
- [EmptyHoverEffectContent](../emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [handPointerBehavior(\_:)](handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](../handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
