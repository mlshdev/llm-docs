> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/unsafemutablemidipacketlistpointer](https://developer.apple.com/documentation/coremidi/unsafemutablemidipacketlistpointer)

# UnsafeMutableMIDIPacketListPointer

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS

## Declaration

```swift
struct UnsafeMutableMIDIPacketListPointer
```

## Topics

### Initializers

- [init(\_:byteSize:)](unsafemutablemidipacketlistpointer/init%28__bytesize_%29-8acwt.md)
- [init(\_:byteSize:)](unsafemutablemidipacketlistpointer/init%28__bytesize_%29-96k5n.md)

### Instance Properties

- [count](unsafemutablemidipacketlistpointer/count.md)
- [lastPacket](unsafemutablemidipacketlistpointer/lastpacket.md)
- [listSizeInBytes](unsafemutablemidipacketlistpointer/listsizeinbytes.md)

### Instance Methods

- [append(timestamp:data:)](unsafemutablemidipacketlistpointer/append%28timestamp_data_%29.md)
- [clear()](unsafemutablemidipacketlistpointer/clear%28%29.md)

## Relationships

### Conforms To

- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Packet list management

- [MIDIPacketNext(\_:)](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
- [UnsafeMutableMIDIPacketPointer](unsafemutablemidipacketpointer.md)
