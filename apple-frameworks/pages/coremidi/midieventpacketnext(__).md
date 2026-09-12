> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midieventpacketnext(_:)](https://developer.apple.com/documentation/coremidi/midieventpacketnext(_:))

# MIDIEventPacketNext(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Advances a packet pointer to the next packet in memory, if the packet is part of an event list.

## Declaration

```swift
func MIDIEventPacketNext(_ pkt: UnsafePointer<MIDIEventPacket>) -> UnsafeMutablePointer<MIDIEventPacket>
```

## Parameters

- `pkt`: A pointer to a [MIDIEventPacket](midieventpacket.md) in an event list.

<a id="return-value"></a>

## Return Value

The subsequent packet in the event list.

## See Also

### Event list management

- [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDISendEventList(\_:\_:\_:)](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList(\_:\_:)](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)

# MIDIEventPacketNext (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Advances a packet pointer to the next packet in memory, if the packet is part of an event list.

## Declaration

```objectivec
static MIDIEventPacket *MIDIEventPacketNext(const MIDIEventPacket *pkt);
```

## Parameters

- `pkt`: A pointer to a [MIDIEventPacket](midieventpacket.md) in an event list.

<a id="return-value"></a>

## Return Value

The subsequent packet in the event list.

## See Also

### Event list management

- [MIDIEventListInit](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDISendEventList](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
