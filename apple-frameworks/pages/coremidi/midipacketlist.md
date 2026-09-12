> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midipacketlist](https://developer.apple.com/documentation/coremidi/midipacketlist)

# MIDIPacketList (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A list of MIDI events the system sends to or receives from an endpoint.

## Declaration

```swift
struct MIDIPacketList
```

## Topics

### Inspecting a Packet List

- [numPackets](midipacketlist/numpackets.md): The number of MIDI packets in the list.
- [packet](midipacketlist/packet.md): An open-ended array of variable-length MIDI packets.

### Classes

- [MIDIPacketList.Builder](midipacketlist/builder.md)

### Structures

- [MIDIPacketList.UnsafeSequence](midipacketlist/unsafesequence.md)

### Initializers

- [init()](midipacketlist/init%28%29.md)
- [init(numPackets:packet:)](midipacketlist/init%28numpackets_packet_%29.md)

### Type Methods

- [sizeInBytes(pktList:)](midipacketlist/sizeinbytes%28pktlist_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Packet list management

- [MIDIPacketNext(\_:)](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
- [UnsafeMutableMIDIPacketListPointer](unsafemutablemidipacketlistpointer.md)
- [UnsafeMutableMIDIPacketPointer](unsafemutablemidipacketpointer.md)

# MIDIPacketList (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A list of MIDI events the system sends to or receives from an endpoint.

## Declaration

```objectivec
struct MIDIPacketList;
```

## Topics

### Inspecting a Packet List

- [numPackets](midipacketlist/numpackets.md): The number of MIDI packets in the list.
- [packet](midipacketlist/packet.md): An open-ended array of variable-length MIDI packets.

## See Also

### Packet list management

- [MIDIPacketNext](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
