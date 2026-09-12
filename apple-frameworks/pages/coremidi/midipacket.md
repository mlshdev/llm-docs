> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midipacket](https://developer.apple.com/documentation/coremidi/midipacket)

# MIDIPacket (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of simultaneous MIDI events.

## Declaration

```swift
struct MIDIPacket
```

## Topics

### Configuring a Packet

- [timeStamp](midipacket/timestamp.md): The MIDI packet timestamp.
- [length](midipacket/length.md): The number of valid MIDI data bytes in this packet.
- [data](midipacket/data.md): A variable-length stream of MIDI messages.

### Classes

- [MIDIPacket.Builder](midipacket/builder.md)

### Structures

- [MIDIPacket.ByteCollection](midipacket/bytecollection.md)
- [MIDIPacket.ByteSequence](midipacket/bytesequence.md)

### Initializers

- [init()](midipacket/init%28%29.md)
- [init(timeStamp:length:data:)](midipacket/init%28timestamp_length_data_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Packet list management

- [MIDIPacketNext(\_:)](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
- [UnsafeMutableMIDIPacketListPointer](unsafemutablemidipacketlistpointer.md)
- [UnsafeMutableMIDIPacketPointer](unsafemutablemidipacketpointer.md)

# MIDIPacket (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of simultaneous MIDI events.

## Declaration

```objectivec
struct MIDIPacket;
```

## Topics

### Configuring a Packet

- [timeStamp](midipacket/timestamp.md): The MIDI packet timestamp.
- [length](midipacket/length.md): The number of valid MIDI data bytes in this packet.
- [data](midipacket/data.md): A variable-length stream of MIDI messages.

## See Also

### Packet list management

- [MIDIPacketNext](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
