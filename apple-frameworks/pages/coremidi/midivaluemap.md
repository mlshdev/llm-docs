> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midivaluemap](https://developer.apple.com/documentation/coremidi/midivaluemap)

# MIDIValueMap (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.

## Declaration

```swift
struct MIDIValueMap
```

## Topics

### Creating a Value Map

- [init()](midivaluemap/init%28%29.md)
- [init(value:)](midivaluemap/init%28value_%29.md)

### Configuring a Value Map

- [value](midivaluemap/value.md): The array of unsigned 8-bit integers.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Transforming Values

- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.

# MIDIValueMap (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.

## Declaration

```objectivec
struct MIDIValueMap;
```

## Topics

### Configuring a Value Map

- [value](midivaluemap/value.md): The array of unsigned 8-bit integers.

## See Also

### Transforming Values

- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.
