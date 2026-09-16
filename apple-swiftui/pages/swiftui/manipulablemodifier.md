> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/manipulablemodifier

# ManipulableModifier

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A view modifier that lets hand gestures move, rotate, and scale a view.

## Declaration

```swift
nonisolated struct ManipulableModifier
```

<a id="overview"></a>

## Overview

[manipulable(coordinateSpace:operations:inertia:isEnabled:onChanged:)](view/manipulable%28coordinatespace_operations_inertia_isenabled_onchanged_%29.md) returns a view modified with this type. You don’t create it directly.

## Relationships

### Conforms To

- [ViewModifier](viewmodifier.md)

## See Also

### Modifying a view

- [Configuring views](configuring-views.md): Adjust the characteristics of a view by applying view modifiers.
- [Reducing view modifier maintenance](reducing-view-modifier-maintenance.md): Bundle view modifiers that you regularly reuse into a custom view modifier.
- [modifier(\_:)](view/modifier%28__%29.md): Applies a modifier to a view and returns a new view.
- [ViewModifier](viewmodifier.md): A modifier that you apply to a view or another view modifier, producing a different version of the original value.
- [EmptyModifier](emptymodifier.md): An empty, or identity, modifier, used during development to switch modifiers at compile time.
- [ModifiedContent](modifiedcontent.md): A value with a modifier applied to it.
- [EnvironmentalModifier](environmentalmodifier.md): A modifier that must resolve to a concrete modifier in an environment before use.
- [ManipulableResponderModifier](manipulablerespondermodifier.md): A view modifier that makes a view respond to manipulation hand gestures.
- [ManipulableTransformBindingModifier](manipulabletransformbindingmodifier.md): A view modifier that applies a 3D affine transform to a view and lets hand gestures change it.
- [ManipulationGeometryModifier](manipulationgeometrymodifier.md): A view modifier that tracks the geometry a manipulation gesture acts on.
- [ManipulationGestureModifier](manipulationgesturemodifier.md): A view modifier that recognizes manipulation hand gestures and reports their state through a binding.
- [ManipulationUsingGestureStateModifier](manipulationusinggesturestatemodifier.md): A view modifier that applies the manipulation state from a gesture on another view.
- [Manipulable](manipulable.md): A namespace for various manipulable related types.
