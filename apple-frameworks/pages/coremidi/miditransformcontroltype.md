> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/miditransformcontroltype](https://developer.apple.com/documentation/coremidi/miditransformcontroltype)

# MIDITransformControlType (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of values that indicate how to interpret control numbers.

## Declaration

```swift
enum MIDITransformControlType
```

## Topics

### Transform Control Types

- [MIDITransformControlType.controlType_7Bit](miditransformcontroltype/controltype_7bit.md): A 7-bit control type.
- [MIDITransformControlType.controlType_14Bit](miditransformcontroltype/controltype_14bit.md): A 14-bit control type.
- [MIDITransformControlType.controlType_7BitRPN](miditransformcontroltype/controltype_7bitrpn.md): A 7-bit Registered Parameter Number (RPN).
- [MIDITransformControlType.controlType_14BitRPN](miditransformcontroltype/controltype_14bitrpn.md): A 14-bit Registered Parameter Number (RPN).
- [MIDITransformControlType.controlType_7BitNRPN](miditransformcontroltype/controltype_7bitnrpn.md): A 7-bit Nonregistered Parameter Number (RPN).
- [MIDITransformControlType.controlType_14BitNRPN](miditransformcontroltype/controltype_14bitnrpn.md): A 14-bit Nonregistered Parameter Number (RPN).

### Initializers

- [init(rawValue:)](miditransformcontroltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.

# MIDITransformControlType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of values that indicate how to interpret control numbers.

## Declaration

```objectivec
enum MIDITransformControlType : UInt8;
```

## Topics

### Transform Control Types

- [kMIDIControlType_7Bit](miditransformcontroltype/controltype_7bit.md): A 7-bit control type.
- [kMIDIControlType_14Bit](miditransformcontroltype/controltype_14bit.md): A 14-bit control type.
- [kMIDIControlType_7BitRPN](miditransformcontroltype/controltype_7bitrpn.md): A 7-bit Registered Parameter Number (RPN).
- [kMIDIControlType_14BitRPN](miditransformcontroltype/controltype_14bitrpn.md): A 14-bit Registered Parameter Number (RPN).
- [kMIDIControlType_7BitNRPN](miditransformcontroltype/controltype_7bitnrpn.md): A 7-bit Nonregistered Parameter Number (RPN).
- [kMIDIControlType_14BitNRPN](miditransformcontroltype/controltype_14bitnrpn.md): A 14-bit Nonregistered Parameter Number (RPN).

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
