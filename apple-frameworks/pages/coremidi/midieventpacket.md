> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midieventpacket](https://developer.apple.com/documentation/coremidi/midieventpacket)

# MIDIEventPacket (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.

## Declaration

```swift
struct MIDIEventPacket
```

## Topics

### Configuring an Event Packet

- [timeStamp](midieventpacket/timestamp.md): The event packet timestamp.
- [wordCount](midieventpacket/wordcount.md): The number of valid MIDI 32-bit words in this event packet.
- [words](midieventpacket/words.md): A variable-length stream of native-endian 32-bit Universal MIDI Packets (UMP).

### Classes

- [MIDIEventPacket.Builder](midieventpacket/builder.md)

### Structures

- [MIDIEventPacket.WordCollection](midieventpacket/wordcollection.md)
- [MIDIEventPacket.WordSequence](midieventpacket/wordsequence.md)

### Initializers

- [init()](midieventpacket/init%28%29.md)
- [init(timeStamp:wordCount:words:)](midieventpacket/init%28timestamp_wordcount_words_%29.md)

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
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)

# MIDIEventPacket (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.

## Declaration

```objectivec
struct MIDIEventPacket;
```

## Topics

### Configuring an Event Packet

- [timeStamp](midieventpacket/timestamp.md): The event packet timestamp.
- [wordCount](midieventpacket/wordcount.md): The number of valid MIDI 32-bit words in this event packet.
- [words](midieventpacket/words.md): A variable-length stream of native-endian 32-bit Universal MIDI Packets (UMP).

## See Also

### Event list management

- [MIDIEventListInit](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
