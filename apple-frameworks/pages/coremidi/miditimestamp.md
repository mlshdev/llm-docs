> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/miditimestamp

# MIDITimeStamp (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time on the host clock when the event occurred.

## Declaration

```swift
typealias MIDITimeStamp = UInt64
```

<a id="Discussion"></a>

## Discussion

The system determines the timestamp using `mach_absolute_time()`.

## See Also

### Packet list management

- [MIDIPacketNext(\_:)](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [UnsafeMutableMIDIPacketListPointer](unsafemutablemidipacketlistpointer.md)
- [UnsafeMutableMIDIPacketPointer](unsafemutablemidipacketpointer.md)

# MIDITimeStamp (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time on the host clock when the event occurred.

## Declaration

```objectivec
typedef UInt64 MIDITimeStamp;
```

<a id="Discussion"></a>

## Discussion

The system determines the timestamp using `mach_absolute_time()`.

## See Also

### Packet list management

- [MIDIPacketNext](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
