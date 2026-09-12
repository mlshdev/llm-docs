> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/manipulable](https://developer.apple.com/documentation/swiftui/manipulable)

# Manipulable

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

A namespace for various manipulable related types.

## Declaration

```swift
enum Manipulable
```

## Topics

### Structures

- [Manipulable.Event](manipulable/event.md): Describes an event generated during a manipulation gesture.
- [Manipulable.GestureState](manipulable/gesturestate.md): Describes the state of a manipulation gesture.
- [Manipulable.Inertia](manipulable/inertia.md): Describes inertia of a view that defines how much a view resists being manipulated.
- [Manipulable.InputDevice](manipulable/inputdevice.md): Describes an input device like a hand or a trackpad.
- [Manipulable.Operation](manipulable/operation.md): Describes an operation applied to a view when a person is manipulating a view.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying a view

- [Configuring views](configuring-views.md): Adjust the characteristics of a view by applying view modifiers.
- [Reducing view modifier maintenance](reducing-view-modifier-maintenance.md): Bundle view modifiers that you regularly reuse into a custom view modifier.
- [modifier(\_:)](view/modifier%28__%29.md): Applies a modifier to a view and returns a new view.
- [ViewModifier](viewmodifier.md): A modifier that you apply to a view or another view modifier, producing a different version of the original value.
- [EmptyModifier](emptymodifier.md): An empty, or identity, modifier, used during development to switch modifiers at compile time.
- [ModifiedContent](modifiedcontent.md): A value with a modifier applied to it.
- [EnvironmentalModifier](environmentalmodifier.md): A modifier that must resolve to a concrete modifier in an environment before use.
- [ManipulableModifier](manipulablemodifier.md)
- [ManipulableResponderModifier](manipulablerespondermodifier.md)
- [ManipulableTransformBindingModifier](manipulabletransformbindingmodifier.md)
- [ManipulationGeometryModifier](manipulationgeometrymodifier.md)
- [ManipulationGestureModifier](manipulationgesturemodifier.md)
- [ManipulationUsingGestureStateModifier](manipulationusinggesturestatemodifier.md)
