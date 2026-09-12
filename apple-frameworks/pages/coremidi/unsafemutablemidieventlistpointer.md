> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/unsafemutablemidieventlistpointer](https://developer.apple.com/documentation/coremidi/unsafemutablemidieventlistpointer)

# UnsafeMutableMIDIEventListPointer

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

## Declaration

```swift
struct UnsafeMutableMIDIEventListPointer
```

## Topics

### Initializers

- [init(\_:wordSize:)](unsafemutablemidieventlistpointer/init%28__wordsize_%29.md)
- [init(\_:wordSize:inProtocol:)](unsafemutablemidieventlistpointer/init%28__wordsize_inprotocol_%29.md)

### Instance Properties

- [count](unsafemutablemidieventlistpointer/count.md)
- [lastPacket](unsafemutablemidieventlistpointer/lastpacket.md)
- [listSizeInBytes](unsafemutablemidieventlistpointer/listsizeinbytes.md)
- [midiProtocol](unsafemutablemidieventlistpointer/midiprotocol.md)

### Instance Methods

- [append(timestamp:words:)](unsafemutablemidieventlistpointer/append%28timestamp_words_%29.md)
- [clear()](unsafemutablemidieventlistpointer/clear%28%29.md)

## Relationships

### Conforms To

- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Event list management

- [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext(\_:)](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList(\_:\_:\_:)](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList(\_:\_:)](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)
