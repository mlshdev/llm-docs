> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midieventlist](https://developer.apple.com/documentation/coremidi/midieventlist)

# MIDIEventList (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A variable-length list of MIDI event packets.

## Declaration

```swift
struct MIDIEventList
```

## Topics

### Configuring an Event List

- [protocol](midieventlist/protocol.md): The MIDI protocol variant of the events in the list.
- [numPackets](midieventlist/numpackets.md): The number of MIDI event packet structures in the list.
- [packet](midieventlist/packet.md): An array of variable-length MIDI event packet structures.

### Classes

- [MIDIEventList.Builder](midieventlist/builder.md)

### Structures

- [MIDIEventList.UnsafeSequence](midieventlist/unsafesequence.md)

### Initializers

- [init()](midieventlist/init%28%29.md)
- [init(protocol:numPackets:packet:)](midieventlist/init%28protocol_numpackets_packet_%29.md)

### Type Methods

- [sizeInBytes(pktList:)](midieventlist/sizeinbytes%28pktlist_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Event list management

- [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext(\_:)](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList(\_:\_:\_:)](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList(\_:\_:)](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)

# MIDIEventList (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A variable-length list of MIDI event packets.

## Declaration

```objectivec
struct MIDIEventList;
```

## Topics

### Configuring an Event List

- [protocol](midieventlist/protocol.md): The MIDI protocol variant of the events in the list.
- [numPackets](midieventlist/numpackets.md): The number of MIDI event packet structures in the list.
- [packet](midieventlist/packet.md): An array of variable-length MIDI event packet structures.

## See Also

### Event list management

- [MIDIEventListInit](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
