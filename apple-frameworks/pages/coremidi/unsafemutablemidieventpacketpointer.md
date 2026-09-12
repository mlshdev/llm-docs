> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/unsafemutablemidieventpacketpointer](https://developer.apple.com/documentation/coremidi/unsafemutablemidieventpacketpointer)

# UnsafeMutableMIDIEventPacketPointer

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

## Declaration

```swift
struct UnsafeMutableMIDIEventPacketPointer
```

## Topics

### Initializers

- [init(\_:)](unsafemutablemidieventpacketpointer/init%28__%29-2pp97.md)
- [init(\_:)](unsafemutablemidieventpacketpointer/init%28__%29-91lug.md)

### Instance Properties

- [count](unsafemutablemidieventpacketpointer/count.md)
- [timeStamp](unsafemutablemidieventpacketpointer/timestamp.md)

### Default Implementations

- [MutableCollection Implementations](unsafemutablemidieventpacketpointer/mutablecollection-implementations.md)
- [RandomAccessCollection Implementations](unsafemutablemidieventpacketpointer/randomaccesscollection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
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
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
