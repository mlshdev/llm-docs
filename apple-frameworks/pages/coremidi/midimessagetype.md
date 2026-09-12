> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midimessagetype](https://developer.apple.com/documentation/coremidi/midimessagetype)

# MIDIMessageType (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Supported MIDI message types.

## Declaration

```swift
enum MIDIMessageType
```

## Topics

### Message Types

- [MIDIMessageType.channelVoice1](midimessagetype/channelvoice1.md)
- [MIDIMessageType.channelVoice2](midimessagetype/channelvoice2.md)
- [MIDIMessageType.data128](midimessagetype/data128.md)
- [MIDIMessageType.sysEx](midimessagetype/sysex.md)
- [MIDIMessageType.system](midimessagetype/system.md)
- [MIDIMessageType.utility](midimessagetype/utility.md)

### Enumeration Cases

- [MIDIMessageType.flexData](midimessagetype/flexdata.md)
- [MIDIMessageType.invalid](midimessagetype/invalid.md)
- [MIDIMessageType.unknownF](midimessagetype/unknownf.md)

### Initializers

- [init(rawValue:)](midimessagetype/init%28rawvalue_%29.md)

### Type Properties

- [stream](midimessagetype/stream.md)

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
- [MIDISystemStatus](midisystemstatus.md): MIDI System status types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.

# MIDIMessageType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Supported MIDI message types.

## Declaration

```objectivec
enum MIDIMessageType : unsigned int;
```

## Topics

### Message Types

- [kMIDIMessageTypeChannelVoice1](midimessagetype/channelvoice1.md)
- [kMIDIMessageTypeChannelVoice2](midimessagetype/channelvoice2.md)
- [kMIDIMessageTypeData128](midimessagetype/data128.md)
- [kMIDIMessageTypeSysEx](midimessagetype/sysex.md)
- [kMIDIMessageTypeSystem](midimessagetype/system.md)
- [kMIDIMessageTypeUtility](midimessagetype/utility.md)

### Enumeration Cases

- [kMIDIMessageTypeFlexData](midimessagetype/flexdata.md)
- [kMIDIMessageTypeInvalid](midimessagetype/invalid.md)
- [kMIDIMessageTypeStream](midimessagetype/stream.md)
- [kMIDIMessageTypeUnknownF](midimessagetype/unknownf.md)

## See Also

### Common

- [MIDICVStatus](midicvstatus.md): MIDI status types.
- [MIDIProtocolID](midiprotocolid.md): Specifies a MIDI protocol variant.
- [MIDISysExStatus](midisysexstatus.md): MIDI System Exclusive (SysEx) types.
- [MIDISystemStatus](midisystemstatus.md): MIDI System status types.
- [MIDIMessage_128](midimessage_128.md): A 128-bit MIDI message.
- [MIDIMessage_96](midimessage_96.md): A 96-bit MIDI message.
- [MIDIMessage_64](midimessage_64.md): A 64-bit MIDI message.
- [MIDIMessage_32](midimessage_32.md): A 32-bit MIDI message.
