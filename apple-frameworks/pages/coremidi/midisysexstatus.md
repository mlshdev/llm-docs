> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisysexstatus](https://developer.apple.com/documentation/coremidi/midisysexstatus)

# MIDISysExStatus (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

MIDI System Exclusive (SysEx) types.

## Declaration

```swift
enum MIDISysExStatus
```

## Topics

### Status Types

- [MIDISysExStatus.complete](midisysexstatus/complete.md)
- [MIDISysExStatus.start](midisysexstatus/start.md)
- [MIDISysExStatus.continue](midisysexstatus/continue.md)
- [MIDISysExStatus.end](midisysexstatus/end.md)

### Enumeration Cases

- [MIDISysExStatus.mixedDataSetHeader](midisysexstatus/mixeddatasetheader.md)
- [MIDISysExStatus.mixedDataSetPayload](midisysexstatus/mixeddatasetpayload.md)

### Initializers

- [init(rawValue:)](midisysexstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common

- [MIDICVStatus](midicvstatus.md): MIDI status types.
- [MIDIProtocolID](midiprotocolid.md): Specifies a MIDI protocol variant.
- [MIDISystemStatus](midisystemstatus.md): MIDI System status types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
- [MIDIMessageType](midimessagetype.md): Supported MIDI message types.

# MIDISysExStatus (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

MIDI System Exclusive (SysEx) types.

## Declaration

```objectivec
enum MIDISysExStatus : unsigned int;
```

## Topics

### Status Types

- [kMIDISysExStatusComplete](midisysexstatus/complete.md)
- [kMIDISysExStatusStart](midisysexstatus/start.md)
- [kMIDISysExStatusContinue](midisysexstatus/continue.md)
- [kMIDISysExStatusEnd](midisysexstatus/end.md)

### Enumeration Cases

- [kMIDISysExStatusMixedDataSetHeader](midisysexstatus/mixeddatasetheader.md)
- [kMIDISysExStatusMixedDataSetPayload](midisysexstatus/mixeddatasetpayload.md)

## See Also

### Common

- [MIDICVStatus](midicvstatus.md): MIDI status types.
- [MIDIProtocolID](midiprotocolid.md): Specifies a MIDI protocol variant.
- [MIDISystemStatus](midisystemstatus.md): MIDI System status types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
- [MIDIMessageType](midimessagetype.md): Supported MIDI message types.
