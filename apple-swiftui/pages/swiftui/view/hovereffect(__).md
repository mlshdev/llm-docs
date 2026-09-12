> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/hovereffect(_:)](https://developer.apple.com/documentation/swiftui/view/hovereffect(_:))

# hoverEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 16.0+ · visionOS 1.0+

Applies a hover effect to this view.

## Declaration

```swift
nonisolated func hoverEffect(_ effect: HoverEffect = .automatic) -> some View

```

## Parameters

- `effect`: The effect to apply to this view.

<a id="return-value"></a>

## Return Value

A new view that applies a hover effect to `self`.

<a id="discussion"></a>

## Discussion

By default, [automatic](../hovereffect/automatic.md) is used. You can control the behavior of the automatic effect with the [defaultHoverEffect(\_:)](defaulthovereffect%28__%29.md) modifier.

## See Also

### Changing view appearance for hover events

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
- [handPointerBehavior(\_:)](handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](../handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
