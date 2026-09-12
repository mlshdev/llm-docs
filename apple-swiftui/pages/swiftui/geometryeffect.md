> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryeffect](https://developer.apple.com/documentation/swiftui/geometryeffect)

# GeometryEffect

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An effect that changes the visual appearance of a view, largely without changing its ancestors or descendants.

## Declaration

```swift
nonisolated protocol GeometryEffect : Animatable, ViewModifier where Self.Body == Never
```

<a id="overview"></a>

## Overview

The only change the effect makes to the view’s ancestors and descendants is to change the coordinate transform to and from them.

## Topics

### Applying effects

- [effectValue(size:)](geometryeffect/effectvalue%28size_%29.md): Returns the current value of the effect.
- [ignoredByLayout()](geometryeffect/ignoredbylayout%28%29.md): Returns an effect that produces the same geometry transform as this effect, but only applies the transform while rendering its view.

## Relationships

### Inherits From

- [Animatable](animatable.md)
- [ViewModifier](viewmodifier.md)

## See Also

### Synchronizing geometries

- [matchedGeometryEffect(id:in:properties:anchor:isSource:)](view/matchedgeometryeffect%28id_in_properties_anchor_issource_%29.md): Defines a group of views with synchronized geometry using an identifier and namespace that you provide.
- [MatchedGeometryProperties](matchedgeometryproperties.md): A set of view properties that may be synchronized between views using the `View.matchedGeometryEffect()` function.
- [Namespace](namespace.md): A dynamic property type that allows access to a namespace defined by the persistent identity of the object containing the property (e.g. a view).
- [geometryGroup()](view/geometrygroup%28%29.md): Isolates the geometry (e.g. position and size) of the view from its parent view.
