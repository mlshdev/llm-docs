> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct/kind-swift.enum](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct/kind-swift.enum)

# TabletopInteraction.Value.Gesture.Kind

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.2+

The possible input sources or modes that can start a gesture interaction.

## Declaration

```swift
enum Kind
```

## Topics

### Gestures

- [TabletopInteraction.Value.Gesture.Kind.directPinch](kind-swift.enum/directpinch.md)
- [TabletopInteraction.Value.Gesture.Kind.indirectPinch](kind-swift.enum/indirectpinch.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the gesture properties

- [initialInputDevicePose](initialinputdevicepose.md): The pose of the input device at the start of the interaction.
- [inputDevicePose](inputdevicepose.md): The current pose of the input device.
- [kind](kind-swift.property.md): The input source or mode which started this gesture.
- [chirality](chirality-swift.property.md): The chirality, or handedness, of this gesture, if known.
- [TabletopInteraction.Value.Gesture.Chirality](chirality-swift.enum.md): The chirality, or handedness, of a gesture.
- [phase](phase.md): The current phase of the gesture.
