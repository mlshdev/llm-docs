> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisystemstatus](https://developer.apple.com/documentation/coremidi/midisystemstatus)

# MIDISystemStatus (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

MIDI System status types.

## Declaration

```swift
enum MIDISystemStatus
```

## Topics

### Status Types

- [MIDISystemStatus.statusActiveSending](midisystemstatus/statusactivesending.md)
- [MIDISystemStatus.statusContinue](midisystemstatus/statuscontinue.md)
- [MIDISystemStatus.statusEndOfExclusive](midisystemstatus/statusendofexclusive.md)
- [MIDISystemStatus.statusMTC](midisystemstatus/statusmtc.md)
- [MIDISystemStatus.statusSongPosPointer](midisystemstatus/statussongpospointer.md)
- [MIDISystemStatus.statusSongSelect](midisystemstatus/statussongselect.md)
- [MIDISystemStatus.statusStart](midisystemstatus/statusstart.md)
- [MIDISystemStatus.statusStartOfExclusive](midisystemstatus/statusstartofexclusive.md)
- [MIDISystemStatus.statusStop](midisystemstatus/statusstop.md)
- [MIDISystemStatus.statusSystemReset](midisystemstatus/statussystemreset.md)
- [MIDISystemStatus.statusTimingClock](midisystemstatus/statustimingclock.md)
- [MIDISystemStatus.statusTuneRequest](midisystemstatus/statustunerequest.md)

### Initializers

- [init(rawValue:)](midisystemstatus/init%28rawvalue_%29.md)

### Type Properties

- [statusActiveSensing](midisystemstatus/statusactivesensing.md)

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
- [MIDISysExStatus](midisysexstatus.md): MIDI System Exclusive (SysEx) types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
- [MIDIMessageType](midimessagetype.md): Supported MIDI message types.

# MIDISystemStatus (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

MIDI System status types.

## Declaration

```objectivec
enum MIDISystemStatus : unsigned int;
```

## Topics

### Status Types

- [kMIDIStatusActiveSending](midisystemstatus/statusactivesending.md)
- [kMIDIStatusContinue](midisystemstatus/statuscontinue.md)
- [kMIDIStatusEndOfExclusive](midisystemstatus/statusendofexclusive.md)
- [kMIDIStatusMTC](midisystemstatus/statusmtc.md)
- [kMIDIStatusSongPosPointer](midisystemstatus/statussongpospointer.md)
- [kMIDIStatusSongSelect](midisystemstatus/statussongselect.md)
- [kMIDIStatusStart](midisystemstatus/statusstart.md)
- [kMIDIStatusStartOfExclusive](midisystemstatus/statusstartofexclusive.md)
- [kMIDIStatusStop](midisystemstatus/statusstop.md)
- [kMIDIStatusSystemReset](midisystemstatus/statussystemreset.md)
- [kMIDIStatusTimingClock](midisystemstatus/statustimingclock.md)
- [kMIDIStatusTuneRequest](midisystemstatus/statustunerequest.md)

### Enumeration Cases

- [kMIDIStatusActiveSensing](midisystemstatus/statusactivesensing.md)

## See Also

### Common

- [MIDICVStatus](midicvstatus.md): MIDI status types.
- [MIDIProtocolID](midiprotocolid.md): Specifies a MIDI protocol variant.
- [MIDISysExStatus](midisysexstatus.md): MIDI System Exclusive (SysEx) types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
- [MIDIMessageType](midimessagetype.md): Supported MIDI message types.
