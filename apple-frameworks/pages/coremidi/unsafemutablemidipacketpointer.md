> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/unsafemutablemidipacketpointer](https://developer.apple.com/documentation/coremidi/unsafemutablemidipacketpointer)

# UnsafeMutableMIDIPacketPointer

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS

## Declaration

```swift
struct UnsafeMutableMIDIPacketPointer
```

## Topics

### Initializers

- [init(\_:)](unsafemutablemidipacketpointer/init%28__%29-5z9po.md)
- [init(\_:)](unsafemutablemidipacketpointer/init%28__%29-7ypj1.md)

### Instance Properties

- [count](unsafemutablemidipacketpointer/count.md)
- [timeStamp](unsafemutablemidipacketpointer/timestamp.md)

### Default Implementations

- [MutableCollection Implementations](unsafemutablemidipacketpointer/mutablecollection-implementations.md)
- [RandomAccessCollection Implementations](unsafemutablemidipacketpointer/randomaccesscollection-implementations.md)

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

### Packet list management

- [MIDIPacketNext(\_:)](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
- [UnsafeMutableMIDIPacketListPointer](unsafemutablemidipacketlistpointer.md)
