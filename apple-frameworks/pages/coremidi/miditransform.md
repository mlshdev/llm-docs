> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/miditransform](https://developer.apple.com/documentation/coremidi/miditransform)

# MIDITransform (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The transformation of a single type of MIDI event.

## Declaration

```swift
struct MIDITransform
```

## Topics

### Configuring a Transform

- [param](miditransform/param.md): An argument to the transformation method (see description of MIDITransformType).
- [transform](miditransform/transform.md): The type of transformation to apply to the event values.

### Initializers

- [init()](miditransform/init%28%29.md)
- [init(transform:param:)](miditransform/init%28transform_param_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.

# MIDITransform (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The transformation of a single type of MIDI event.

## Declaration

```objectivec
struct MIDITransform;
```

## Topics

### Configuring a Transform

- [param](miditransform/param.md): An argument to the transformation method (see description of MIDITransformType).
- [transform](miditransform/transform.md): The type of transformation to apply to the event values.

## See Also

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.
