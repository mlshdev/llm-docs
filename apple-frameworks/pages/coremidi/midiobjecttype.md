> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjecttype](https://developer.apple.com/documentation/coremidi/midiobjecttype)

# MIDIObjectType (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The MIDI object types that the system supports.

## Declaration

```swift
enum MIDIObjectType
```

## Topics

### Object Types

- [MIDIObjectType.other](midiobjecttype/other.md): A MIDI object with an undefined type.
- [MIDIObjectType.device](midiobjecttype/device.md): A MIDI device.
- [MIDIObjectType.entity](midiobjecttype/entity.md): A MIDI entity.
- [MIDIObjectType.source](midiobjecttype/source.md): A MIDI source.
- [MIDIObjectType.destination](midiobjecttype/destination.md): A MIDI destination.
- [MIDIObjectType.externalDevice](midiobjecttype/externaldevice.md): An external device.
- [MIDIObjectType.externalEntity](midiobjecttype/externalentity.md): An external entity.
- [MIDIObjectType.externalSource](midiobjecttype/externalsource.md): An external source.
- [MIDIObjectType.externalDestination](midiobjecttype/externaldestination.md): An external destination.
- [kMIDIObjectType_ExternalMask](kmidiobjecttype_externalmask.md): A bit mask indicating that a device is external.

### Initializers

- [init(rawValue:)](midiobjecttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameter Types

- [MIDIUniqueID](midiuniqueid.md): A MIDI object’s unique identifier.
- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.

# MIDIObjectType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The MIDI object types that the system supports.

## Declaration

```objectivec
enum MIDIObjectType : SInt32;
```

## Topics

### Object Types

- [kMIDIObjectType_Other](midiobjecttype/other.md): A MIDI object with an undefined type.
- [kMIDIObjectType_Device](midiobjecttype/device.md): A MIDI device.
- [kMIDIObjectType_Entity](midiobjecttype/entity.md): A MIDI entity.
- [kMIDIObjectType_Source](midiobjecttype/source.md): A MIDI source.
- [kMIDIObjectType_Destination](midiobjecttype/destination.md): A MIDI destination.
- [kMIDIObjectType_ExternalDevice](midiobjecttype/externaldevice.md): An external device.
- [kMIDIObjectType_ExternalEntity](midiobjecttype/externalentity.md): An external entity.
- [kMIDIObjectType_ExternalSource](midiobjecttype/externalsource.md): An external source.
- [kMIDIObjectType_ExternalDestination](midiobjecttype/externaldestination.md): An external destination.
- [kMIDIObjectType_ExternalMask](kmidiobjecttype_externalmask.md): A bit mask indicating that a device is external.

## See Also

### Parameter Types

- [MIDIUniqueID](midiuniqueid.md): A MIDI object’s unique identifier.
- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.
