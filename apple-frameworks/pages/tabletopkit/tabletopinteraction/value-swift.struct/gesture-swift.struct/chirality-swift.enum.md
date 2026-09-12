> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct/chirality-swift.enum](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct/chirality-swift.enum)

# TabletopInteraction.Value.Gesture.Chirality

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.2+

The chirality, or handedness, of a gesture.

## Declaration

```swift
enum Chirality
```

## Topics

### Handedness

- [TabletopInteraction.Value.Gesture.Chirality.left](chirality-swift.enum/left.md): Indicates a left-handed gesture.
- [TabletopInteraction.Value.Gesture.Chirality.right](chirality-swift.enum/right.md): Indicates a right-handed gesture.

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
- [TabletopInteraction.Value.Gesture.Kind](kind-swift.enum.md): The possible input sources or modes that can start a gesture interaction.
- [chirality](chirality-swift.property.md): The chirality, or handedness, of this gesture, if known.
- [phase](phase.md): The current phase of the gesture.
