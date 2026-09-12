> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffect](https://developer.apple.com/documentation/swiftui/hovereffect)

# HoverEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 16.0+ · visionOS 1.0+

An effect applied when the pointer hovers over a view.

## Declaration

```swift
struct HoverEffect
```

## Topics

### Getting hover effects

- [automatic](hovereffect/automatic.md): An effect that attempts to determine the effect automatically. This is the default effect.
- [highlight](hovereffect/highlight.md): An effect that morphs the pointer into a platter behind the view and shows a light source indicating position.
- [lift](hovereffect/lift.md): An effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.

### Initializers

- [init(\_:)](hovereffect/init%28__%29.md): Create a `HoverEffect` that contains the specified custom hover effect.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomHoverEffect](customhovereffect.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Changing view appearance for hover events

- [hoverEffect(\_:)](view/hovereffect%28__%29.md): Applies a hover effect to this view.
- [hoverEffect(\_:in:isEnabled:)](view/hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](hovereffectgroup.md).
- [hoverEffect(in:isEnabled:body:)](view/hovereffect%28in_isenabled_body_%29.md): Applies a hover effect to this view described by the given closure.
- [CustomHoverEffect](customhovereffect.md): A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.
- [ContentHoverEffect](contenthovereffect.md): A `CustomHoverEffect` that applies effects to a view on hover using a closure.
- [HoverEffectGroup](hovereffectgroup.md): Describes a grouping of effects that activate together.
- [hoverEffectGroup()](view/hovereffectgroup%28%29.md): Adds an implicit [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(\_:)](view/hovereffectgroup%28__%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(id:in:behavior:)](view/hovereffectgroup%28id_in_behavior_%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [GroupHoverEffect](grouphovereffect.md): A `CustomHoverEffect` that activates a named group of effects.
- [HoverEffectContent](hovereffectcontent.md): A type that describes the effects of a view for a particular hover effect phase.
- [EmptyHoverEffectContent](emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [handPointerBehavior(\_:)](view/handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
