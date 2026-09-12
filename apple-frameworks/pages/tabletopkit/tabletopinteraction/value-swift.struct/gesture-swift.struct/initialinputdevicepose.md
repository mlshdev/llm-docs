> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct/initialinputdevicepose](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/value-swift.struct/gesture-swift.struct/initialinputdevicepose)

# initialInputDevicePose

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The pose of the input device at the start of the interaction.

## Declaration

```swift
var initialInputDevicePose: Pose3D { get }
```

## See Also

### Getting the gesture properties

- [inputDevicePose](inputdevicepose.md): The current pose of the input device.
- [kind](kind-swift.property.md): The input source or mode which started this gesture.
- [TabletopInteraction.Value.Gesture.Kind](kind-swift.enum.md): The possible input sources or modes that can start a gesture interaction.
- [chirality](chirality-swift.property.md): The chirality, or handedness, of this gesture, if known.
- [TabletopInteraction.Value.Gesture.Chirality](chirality-swift.enum.md): The chirality, or handedness, of a gesture.
- [phase](phase.md): The current phase of the gesture.
