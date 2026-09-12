> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect](https://developer.apple.com/documentation/swiftui/customhovereffect)

# CustomHoverEffect

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.

## Declaration

```swift
protocol CustomHoverEffect
```

<a id="overview"></a>

## Overview

Custom hover effects apply their inactive values when the effect is inactive, and their active values when the effect is active. For example, the following effect causes a view to be partially transparent when inactive, but animate to fully opaque when active:

```swift
struct FadeInHoverEffect: CustomHoverEffect {
    func body(content: Content) -> some CustomHoverEffect {
        content.hoverEffect { effect, isActive, proxy in
            effect.animation(.easeOut) {
                $0.opacity(isActive ? 1 : 0.5)
            }
        }
    }
}
```

This effect can be applied to a view using the `hoverEffect(_:)` modifier:

```swift
Color.red
    .hoverEffect(FadeInHoverEffect())
```

Hover effects do not affect a view’s layout, and may be applied to a view out-of-process. Therefore an effect’s current phase may not be visible within your app.

## Topics

### Getting built-in hover effects

- [automatic](customhovereffect/automatic.md): Conforms when `Self` is `AutomaticHoverEffect`. The default hover effect based on the surrounding context.
- [empty](customhovereffect/empty.md): Conforms when `Self` is `EmptyHoverEffect`. An effect that applies no changes when hovered.
- [highlight](customhovereffect/highlight.md): Conforms when `Self` is `HighlightHoverEffect`. A hover effect that highlights views using a light source to indicate position.
- [lift](customhovereffect/lift.md): Conforms when `Self` is `LiftHoverEffect`. A hover effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.

### Creating custom hover effects

- [hoverEffect(\_:in:isEnabled:)](customhovereffect/hovereffect%28__in_isenabled_%29.md): Applies this effect in parallel with the given `effect`.
- [hoverEffect(in:isEnabled:body:)](customhovereffect/hovereffect%28in_isenabled_body_%29-swift.method.md): Applies a hover effect based on the current phase.
- [hoverEffectGroup(\_:)](customhovereffect/hovereffectgroup%28__%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectGroup(id:in:behavior:)](customhovereffect/hovereffectgroup%28id_in_behavior_%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectDisabled(\_:)](customhovereffect/hovereffectdisabled%28__%29.md): Disables this hover effect.

### Supporting types

- [AutomaticHoverEffect](automatichovereffect.md): The default hover effect based on the surrounding context.
- [EmptyHoverEffect](emptyhovereffect.md): A base hover effect used to build additional effects.
- [HighlightHoverEffect](highlighthovereffect.md): A hover effect that highlights views using a light source to indicate position.
- [LiftHoverEffect](lifthovereffect.md): A hover effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.

### Associated Types

- [Body](customhovereffect/body.md): The type of effect representing the body of this effect. When you create a custom effect, Swift infers this type from your implementation of the required [body(content:)](customhovereffect/body%28content_%29.md) method.

### Instance Methods

- [body(content:)](customhovereffect/body%28content_%29.md): Defines the effect produced by this effect.
- [hoverEffectPhaseOverride(\_:)](customhovereffect/hovereffectphaseoverride%28__%29.md): Returns a new effect with the given `HoverEffectPhaseOverride` applied to this effect.

### Type Aliases

- [CustomHoverEffect.Content](customhovereffect/content.md): The content effect type passed to `body(content:)`.

### Type Methods

- [hoverEffect(in:isEnabled:body:)](customhovereffect/hovereffect%28in_isenabled_body_%29-swift.type.method.md): Creates a hover effect that applies effects to a view using the given closure.
- [hoverEffectGroup(\_:)](customhovereffect/hovereffectgroup%28__%29-swift.type.method.md): Conforms when `Self` is `GroupHoverEffect`. Creates an effect that activates a named group of effects.
- [hoverEffectGroup(id:in:behavior:)](customhovereffect/hovereffectgroup%28id_in_behavior_%29-swift.type.method.md): Conforms when `Self` is `GroupHoverEffect`. Creates an effect that activates a named group of effects.
- [ornament(attachmentAnchor:contentAlignment:ornament:)](customhovereffect/ornament%28attachmentanchor_contentalignment_ornament_%29.md): Presents an ornament on hover.
- [ornament(attachmentAnchor:contentAlignment:ornament:effect:)](customhovereffect/ornament%28attachmentanchor_contentalignment_ornament_effect_%29.md): Presents an ornament on hover.

## Relationships

### Conforming Types

- [AutomaticHoverEffect](automatichovereffect.md)
- [ContentHoverEffect](contenthovereffect.md)
- [EmptyHoverEffect](emptyhovereffect.md)
- [GroupHoverEffect](grouphovereffect.md)
- [HighlightHoverEffect](highlighthovereffect.md)
- [HoverEffect](hovereffect.md)
- [LiftHoverEffect](lifthovereffect.md)
- [ModifiedContent](modifiedcontent.md)
- [OrnamentHoverContentEffect](ornamenthovercontenteffect.md)
- [OrnamentHoverEffect](ornamenthovereffect.md)

## See Also

### Changing view appearance for hover events

- [hoverEffect(\_:)](view/hovereffect%28__%29.md): Applies a hover effect to this view.
- [HoverEffect](hovereffect.md): An effect applied when the pointer hovers over a view.
- [hoverEffect(\_:in:isEnabled:)](view/hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](hovereffectgroup.md).
- [hoverEffect(in:isEnabled:body:)](view/hovereffect%28in_isenabled_body_%29.md): Applies a hover effect to this view described by the given closure.
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
