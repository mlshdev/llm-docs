> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicontroltransform/remappedcontroltype](https://developer.apple.com/documentation/coremidi/midicontroltransform/remappedcontroltype)

# remappedControlType (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The remapped control type.

## Declaration

```swift
var remappedControlType: MIDITransformControlType
```

<a id="Discussion"></a>

## Discussion

If transform is [MIDITransformType.mapControl](../miditransformtype/mapcontrol.md), the output control type.

## See Also

### Configuring a Control Transform

- [controlType](controltype.md): The type of control specified by the control number.
- [controlNumber](controlnumber.md): The control number to affect.
- [transform](transform.md): The type of transformation to apply to the event values.
- [param](param.md): An argument to the transformation method.

# remappedControlType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The remapped control type.

## Declaration

```objectivec
MIDITransformControlType remappedControlType;
```

<a id="Discussion"></a>

## Discussion

If transform is [kMIDITransform_MapControl](../miditransformtype/mapcontrol.md), the output control type.

## See Also

### Configuring a Control Transform

- [controlType](controltype.md): The type of control specified by the control number.
- [controlNumber](controlnumber.md): The control number to affect.
- [transform](transform.md): The type of transformation to apply to the event values.
- [param](param.md): An argument to the transformation method.
