> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicontroltransform](https://developer.apple.com/documentation/coremidi/midicontroltransform)

# MIDIControlTransform (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the transformation of MIDI control change events.

## Declaration

```swift
struct MIDIControlTransform
```

<a id="overview"></a>

## Overview

A single parameters object may describe any number of transformations to control events. It’s important to order multiple transformations correctly: filter out, remap, and then alter values.

The system performs all transformations internally using 14-bit values, so when you perform an add, min, or max transform on a 7-bit control value, the parameter must be a 14-bit value. For example, to add 10 to a control value, the parameter must be (10 \<\< 7) = 1280.

Based on the MIDI specification, the system interprets several controls specially:

| Control | Function |
| --- | --- |
| 32-63 | The least signifcant bit of 0-31. |
| 6/38 | Data entry. |
| 96, 97 | Data increment and decrement, respectively. |
| 98-101 | NRPN/RPN |

## Topics

### Configuring a Control Transform

- [controlType](midicontroltransform/controltype.md): The type of control specified by the control number.
- [remappedControlType](midicontroltransform/remappedcontroltype.md): The remapped control type.
- [controlNumber](midicontroltransform/controlnumber.md): The control number to affect.
- [transform](midicontroltransform/transform.md): The type of transformation to apply to the event values.
- [param](midicontroltransform/param.md): An argument to the transformation method.

### Initializers

- [init()](midicontroltransform/init%28%29.md)
- [init(controlType:remappedControlType:controlNumber:transform:param:)](midicontroltransform/init%28controltype_remappedcontroltype_controlnumber_transform_param_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.

# MIDIControlTransform (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the transformation of MIDI control change events.

## Declaration

```objectivec
struct MIDIControlTransform;
```

<a id="overview"></a>

## Overview

A single parameters object may describe any number of transformations to control events. It’s important to order multiple transformations correctly: filter out, remap, and then alter values.

The system performs all transformations internally using 14-bit values, so when you perform an add, min, or max transform on a 7-bit control value, the parameter must be a 14-bit value. For example, to add 10 to a control value, the parameter must be (10 \<\< 7) = 1280.

Based on the MIDI specification, the system interprets several controls specially:

| Control | Function |
| --- | --- |
| 32-63 | The least signifcant bit of 0-31. |
| 6/38 | Data entry. |
| 96, 97 | Data increment and decrement, respectively. |
| 98-101 | NRPN/RPN |

## Topics

### Configuring a Control Transform

- [controlType](midicontroltransform/controltype.md): The type of control specified by the control number.
- [remappedControlType](midicontroltransform/remappedcontroltype.md): The remapped control type.
- [controlNumber](midicontroltransform/controlnumber.md): The control number to affect.
- [transform](midicontroltransform/transform.md): The type of transformation to apply to the event values.
- [param](midicontroltransform/param.md): An argument to the transformation method.

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.
