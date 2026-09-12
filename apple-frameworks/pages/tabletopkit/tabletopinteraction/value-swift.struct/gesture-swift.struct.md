> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct)

# TabletopInteraction.Value.Gesture

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.2+

A structure that provides details specific to a gesture driven interaction.

## Declaration

```swift
struct Gesture
```

## Topics

### Getting the gesture properties

- [initialInputDevicePose](gesture-swift.struct/initialinputdevicepose.md): The pose of the input device at the start of the interaction.
- [inputDevicePose](gesture-swift.struct/inputdevicepose.md): The current pose of the input device.
- [kind](gesture-swift.struct/kind-swift.property.md): The input source or mode which started this gesture.
- [TabletopInteraction.Value.Gesture.Kind](gesture-swift.struct/kind-swift.enum.md): The possible input sources or modes that can start a gesture interaction.
- [chirality](gesture-swift.struct/chirality-swift.property.md): The chirality, or handedness, of this gesture, if known.
- [TabletopInteraction.Value.Gesture.Chirality](gesture-swift.struct/chirality-swift.enum.md): The chirality, or handedness, of a gesture.
- [phase](gesture-swift.struct/phase.md): The current phase of the gesture.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the gestures

- [gesture](gesture-swift.property.md): If this is interaction is currently gesture driven, contains gesture specific additional information
