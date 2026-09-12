> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectgroup](https://developer.apple.com/documentation/swiftui/hovereffectgroup)

# HoverEffectGroup

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Describes a grouping of effects that activate together.

## Declaration

```swift
struct HoverEffectGroup
```

<a id="overview"></a>

## Overview

Use [HoverEffectGroup](hovereffectgroup.md) to apply effects to multiple views in concert.

## Topics

### Structures

- [HoverEffectGroup.Behavior](hovereffectgroup/behavior.md): Describes the behavior of an effect in a group.

### Initializers

- [init(\_:behavior:)](hovereffectgroup/init%28__behavior_%29.md): Creates a new [HoverEffectGroup](hovereffectgroup.md) from a `Namespace.ID`.
- [init(id:in:behavior:)](hovereffectgroup/init%28id_in_behavior_%29.md): Creates a new [HoverEffectGroup](hovereffectgroup.md).

### Instance Methods

- [behavior(\_:)](hovereffectgroup/behavior%28__%29.md): Returns a new version of `self` with the given `behavior`.

### Type Properties

- [systemOverlays](hovereffectgroup/systemoverlays.md): A `HoverEffectGroup` that becomes active when system overlays are visible.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing view appearance for hover events

- [hoverEffect(\_:)](view/hovereffect%28__%29.md): Applies a hover effect to this view.
- [HoverEffect](hovereffect.md): An effect applied when the pointer hovers over a view.
- [hoverEffect(\_:in:isEnabled:)](view/hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](hovereffectgroup.md).
- [hoverEffect(in:isEnabled:body:)](view/hovereffect%28in_isenabled_body_%29.md): Applies a hover effect to this view described by the given closure.
- [CustomHoverEffect](customhovereffect.md): A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.
- [ContentHoverEffect](contenthovereffect.md): A `CustomHoverEffect` that applies effects to a view on hover using a closure.
- [hoverEffectGroup()](view/hovereffectgroup%28%29.md): Adds an implicit [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(\_:)](view/hovereffectgroup%28__%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(id:in:behavior:)](view/hovereffectgroup%28id_in_behavior_%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [GroupHoverEffect](grouphovereffect.md): A `CustomHoverEffect` that activates a named group of effects.
- [HoverEffectContent](hovereffectcontent.md): A type that describes the effects of a view for a particular hover effect phase.
- [EmptyHoverEffectContent](emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [handPointerBehavior(\_:)](view/handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
