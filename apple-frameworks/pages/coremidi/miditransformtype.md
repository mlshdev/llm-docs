> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/miditransformtype](https://developer.apple.com/documentation/coremidi/miditransformtype)

# MIDITransformType (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that specify the type of MIDI transformation.

## Declaration

```swift
enum MIDITransformType
```

## Topics

### Transform Types

- [MIDITransformType.none](miditransformtype/none.md): No transformation.
- [MIDITransformType.filterOut](miditransformtype/filterout.md): A transformation that filters out an event type.
- [MIDITransformType.mapControl](miditransformtype/mapcontrol.md): A transformation that changes a specified control number to a supplied parameter value.
- [MIDITransformType.add](miditransformtype/add.md): A transform that adds a parameter value.
- [MIDITransformType.scale](miditransformtype/scale.md): A transform that multiplies by the specified parameter value.
- [MIDITransformType.minValue](miditransformtype/minvalue.md): A transform that sets the minimum value to the specified parameter value.
- [MIDITransformType.maxValue](miditransformtype/maxvalue.md): A transform that sets the maximum value to the specified parameter value.
- [MIDITransformType.mapValue](miditransformtype/mapvalue.md): A transform that maps one value to another.

### Initializers

- [init(rawValue:)](miditransformtype/init%28rawvalue_%29.md)

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
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.

# MIDITransformType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that specify the type of MIDI transformation.

## Declaration

```objectivec
enum MIDITransformType : UInt16;
```

## Topics

### Transform Types

- [kMIDITransform_None](miditransformtype/none.md): No transformation.
- [kMIDITransform_FilterOut](miditransformtype/filterout.md): A transformation that filters out an event type.
- [kMIDITransform_MapControl](miditransformtype/mapcontrol.md): A transformation that changes a specified control number to a supplied parameter value.
- [kMIDITransform_Add](miditransformtype/add.md): A transform that adds a parameter value.
- [kMIDITransform_Scale](miditransformtype/scale.md): A transform that multiplies by the specified parameter value.
- [kMIDITransform_MinValue](miditransformtype/minvalue.md): A transform that sets the minimum value to the specified parameter value.
- [kMIDITransform_MaxValue](miditransformtype/maxvalue.md): A transform that sets the maximum value to the specified parameter value.
- [kMIDITransform_MapValue](miditransformtype/mapvalue.md): A transform that maps one value to another.

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.
