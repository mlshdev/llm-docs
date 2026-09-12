> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicvstatus](https://developer.apple.com/documentation/coremidi/midicvstatus)

# MIDICVStatus (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

MIDI status types.

## Declaration

```swift
enum MIDICVStatus
```

## Topics

### MIDI 1.0

- [MIDICVStatus.noteOff](midicvstatus/noteoff.md)
- [MIDICVStatus.noteOn](midicvstatus/noteon.md)
- [MIDICVStatus.polyPressure](midicvstatus/polypressure.md)
- [MIDICVStatus.controlChange](midicvstatus/controlchange.md)
- [MIDICVStatus.programChange](midicvstatus/programchange.md)
- [MIDICVStatus.channelPressure](midicvstatus/channelpressure.md)
- [MIDICVStatus.pitchBend](midicvstatus/pitchbend.md)

### MIDI 2.0

- [MIDICVStatus.registeredPNC](midicvstatus/registeredpnc.md)
- [MIDICVStatus.assignablePNC](midicvstatus/assignablepnc.md)
- [MIDICVStatus.registeredControl](midicvstatus/registeredcontrol.md)
- [MIDICVStatus.assignableControl](midicvstatus/assignablecontrol.md)
- [MIDICVStatus.relRegisteredControl](midicvstatus/relregisteredcontrol.md)
- [MIDICVStatus.relAssignableControl](midicvstatus/relassignablecontrol.md)
- [MIDICVStatus.perNotePitchBend](midicvstatus/pernotepitchbend.md)
- [MIDICVStatus.perNoteMgmt](midicvstatus/pernotemgmt.md)

### Initializers

- [init(rawValue:)](midicvstatus/init%28rawvalue_%29.md)

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

- [MIDIProtocolID](midiprotocolid.md): Specifies a MIDI protocol variant.
- [MIDISysExStatus](midisysexstatus.md): MIDI System Exclusive (SysEx) types.
- [MIDISystemStatus](midisystemstatus.md): MIDI System status types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
- [MIDIMessageType](midimessagetype.md): Supported MIDI message types.

# MIDICVStatus (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

MIDI status types.

## Declaration

```objectivec
enum MIDICVStatus : unsigned int;
```

## Topics

### MIDI 1.0

- [kMIDICVStatusNoteOff](midicvstatus/noteoff.md)
- [kMIDICVStatusNoteOn](midicvstatus/noteon.md)
- [kMIDICVStatusPolyPressure](midicvstatus/polypressure.md)
- [kMIDICVStatusControlChange](midicvstatus/controlchange.md)
- [kMIDICVStatusProgramChange](midicvstatus/programchange.md)
- [kMIDICVStatusChannelPressure](midicvstatus/channelpressure.md)
- [kMIDICVStatusPitchBend](midicvstatus/pitchbend.md)

### MIDI 2.0

- [kMIDICVStatusRegisteredPNC](midicvstatus/registeredpnc.md)
- [kMIDICVStatusAssignablePNC](midicvstatus/assignablepnc.md)
- [kMIDICVStatusRegisteredControl](midicvstatus/registeredcontrol.md)
- [kMIDICVStatusAssignableControl](midicvstatus/assignablecontrol.md)
- [kMIDICVStatusRelRegisteredControl](midicvstatus/relregisteredcontrol.md)
- [kMIDICVStatusRelAssignableControl](midicvstatus/relassignablecontrol.md)
- [kMIDICVStatusPerNotePitchBend](midicvstatus/pernotepitchbend.md)
- [kMIDICVStatusPerNoteMgmt](midicvstatus/pernotemgmt.md)

## See Also

### Common

- [MIDIProtocolID](midiprotocolid.md): Specifies a MIDI protocol variant.
- [MIDISysExStatus](midisysexstatus.md): MIDI System Exclusive (SysEx) types.
- [MIDISystemStatus](midisystemstatus.md): MIDI System status types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
- [MIDIMessageType](midimessagetype.md): Supported MIDI message types.
