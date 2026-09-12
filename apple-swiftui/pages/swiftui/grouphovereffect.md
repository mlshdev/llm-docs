> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/grouphovereffect](https://developer.apple.com/documentation/swiftui/grouphovereffect)

# GroupHoverEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A `CustomHoverEffect` that activates a named group of effects.

## Declaration

```swift
struct GroupHoverEffect
```

<a id="overview"></a>

## Overview

Use the [hoverEffectGroup(\_:)](customhovereffect/hovereffectgroup%28__%29-swift.type.method.md) or [hoverEffectGroup(id:in:behavior:)](customhovereffect/hovereffectgroup%28id_in_behavior_%29-swift.type.method.md) methods to construct a [GroupHoverEffect](grouphovereffect.md).

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomHoverEffect](customhovereffect.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Changing view appearance for hover events

- [hoverEffect(\_:)](view/hovereffect%28__%29.md): Applies a hover effect to this view.
- [HoverEffect](hovereffect.md): An effect applied when the pointer hovers over a view.
- [hoverEffect(\_:in:isEnabled:)](view/hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](hovereffectgroup.md).
- [hoverEffect(in:isEnabled:body:)](view/hovereffect%28in_isenabled_body_%29.md): Applies a hover effect to this view described by the given closure.
- [CustomHoverEffect](customhovereffect.md): A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.
- [ContentHoverEffect](contenthovereffect.md): A `CustomHoverEffect` that applies effects to a view on hover using a closure.
- [HoverEffectGroup](hovereffectgroup.md): Describes a grouping of effects that activate together.
- [hoverEffectGroup()](view/hovereffectgroup%28%29.md): Adds an implicit [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(\_:)](view/hovereffectgroup%28__%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(id:in:behavior:)](view/hovereffectgroup%28id_in_behavior_%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [HoverEffectContent](hovereffectcontent.md): A type that describes the effects of a view for a particular hover effect phase.
- [EmptyHoverEffectContent](emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [handPointerBehavior(\_:)](view/handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
