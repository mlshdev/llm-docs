> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midipacketnext(_:)

# MIDIPacketNext(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Advances a MIDI packet pointer to the next packet in a package list.

## Declaration

```swift
func MIDIPacketNext(_ pkt: UnsafePointer<MIDIPacket>) -> UnsafeMutablePointer<MIDIPacket>
```

## Parameters

- `pkt`: A pointer to a MIDI packet in a MIDI packet list.

<a id="return-value"></a>

## Return Value

The subsequent packet in the [MIDIPacketList](midipacketlist.md).

## See Also

### Packet list management

- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
- [UnsafeMutableMIDIPacketListPointer](unsafemutablemidipacketlistpointer.md)
- [UnsafeMutableMIDIPacketPointer](unsafemutablemidipacketpointer.md)

# MIDIPacketNext (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Advances a MIDI packet pointer to the next packet in a package list.

## Declaration

```objectivec
static MIDIPacket *MIDIPacketNext(const MIDIPacket *pkt);
```

## Parameters

- `pkt`: A pointer to a MIDI packet in a MIDI packet list.

<a id="return-value"></a>

## Return Value

The subsequent packet in the [MIDIPacketList](midipacketlist.md).

## See Also

### Packet list management

- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
