> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/handpointerbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/handpointerbehavior(_:))

# handPointerBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Sets the behavior of the hand pointer while the user is interacting with the view.

## Declaration

```swift
nonisolated func handPointerBehavior(_ behavior: HandPointerBehavior?) -> some View

```

## Parameters

- `behavior`: The behavior to apply to the hand pointer. If `nil`, the hand pointer behavior will be inherited from the view’s ancestors.

<a id="return-value"></a>

## Return Value

A view that applies the given behavior to the hand pointer.

## See Also

### Changing view appearance for hover events

- [hoverEffect(\_:)](hovereffect%28__%29.md): Applies a hover effect to this view.
- [HoverEffect](../hovereffect.md): An effect applied when the pointer hovers over a view.
- [hoverEffect(\_:in:isEnabled:)](hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](../hovereffectgroup.md).
- [hoverEffect(in:isEnabled:body:)](hovereffect%28in_isenabled_body_%29.md): Applies a hover effect to this view described by the given closure.
- [CustomHoverEffect](../customhovereffect.md): A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.
- [ContentHoverEffect](../contenthovereffect.md): A `CustomHoverEffect` that applies effects to a view on hover using a closure.
- [HoverEffectGroup](../hovereffectgroup.md): Describes a grouping of effects that activate together.
- [hoverEffectGroup()](hovereffectgroup%28%29.md): Adds an implicit [HoverEffectGroup](../hovereffectgroup.md) to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(\_:)](hovereffectgroup%28__%29.md): Adds a [HoverEffectGroup](../hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(id:in:behavior:)](hovereffectgroup%28id_in_behavior_%29.md): Adds a [HoverEffectGroup](../hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [GroupHoverEffect](../grouphovereffect.md): A `CustomHoverEffect` that activates a named group of effects.
- [HoverEffectContent](../hovereffectcontent.md): A type that describes the effects of a view for a particular hover effect phase.
- [EmptyHoverEffectContent](../emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [HandPointerBehavior](../handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
