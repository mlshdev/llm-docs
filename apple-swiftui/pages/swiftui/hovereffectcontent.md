> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent](https://developer.apple.com/documentation/swiftui/hovereffectcontent)

# HoverEffectContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A type that describes the effects of a view for a particular hover effect phase.

## Declaration

```swift
protocol HoverEffectContent
```

<a id="overview"></a>

## Overview

```swift
Color.red
    .hoverEffect { effect, isActive, proxy in
        effect.opacity(isActive ? 1 : 0.5)
    }
```

You don’t conform to this protocol yourself. Instead, effects are described by calling modifier functions on other effects, like the `opacity(_:)` modifier used in the example above.

## Topics

### Instance Methods

- [animation(\_:body:)](hovereffectcontent/animation%28__body_%29.md): Applies the given [Animation](animation.md) to all effects within the `body` closure.
- [clipShape(\_:style:)](hovereffectcontent/clipshape%28__style_%29.md): Sets a clipping shape for the view.
- [offset(\_:)](hovereffectcontent/offset%28__%29.md): Offsets the view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](hovereffectcontent/offset%28x_y_%29.md): Offsets the view by the specified horizontal and vertical distances.
- [opacity(\_:)](hovereffectcontent/opacity%28__%29.md): Sets the transparency of the view.
- [rotationEffect(\_:anchor:)](hovereffectcontent/rotationeffect%28__anchor_%29.md): Rotates content in two dimensions around the specified point.
- [scaleEffect(\_:anchor:)](hovereffectcontent/scaleeffect%28__anchor_%29.md): Scales the view’s rendered output by the given amount in both the horizontal and vertical directions, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](hovereffectcontent/scaleeffect%28x_y_anchor_%29.md): Scales the view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [transformEffect(\_:)](hovereffectcontent/transformeffect%28__%29.md): Applies an affine transformation to the view’s rendered output.

## Relationships

### Conforming Types

- [EmptyHoverEffectContent](emptyhovereffectcontent.md)
- [ModifiedContent](modifiedcontent.md)

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
- [GroupHoverEffect](grouphovereffect.md): A `CustomHoverEffect` that activates a named group of effects.
- [EmptyHoverEffectContent](emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [handPointerBehavior(\_:)](view/handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.
