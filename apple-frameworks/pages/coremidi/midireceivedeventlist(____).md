> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midireceivedeventlist(_:_:)](https://developer.apple.com/documentation/coremidi/midireceivedeventlist(_:_:))

# MIDIReceivedEventList(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Distributes incoming MIDI events from a source to its connected client input ports.

## Declaration

```swift
func MIDIReceivedEventList(_ src: MIDIEndpointRef, _ evtlist: UnsafePointer<MIDIEventList>) -> OSStatus
```

## Parameters

- `src`: The source that’s transmitting MIDI events.
- `evtlist`: The MIDI events to transmit.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers can call this function when receiving MIDI events from a source.

Clients that create virtual sources, using [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md), can call this function when the source is generating MIDI events.

## See Also

### Event list management

- [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext(\_:)](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList(\_:\_:\_:)](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)

# MIDIReceivedEventList (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Distributes incoming MIDI events from a source to its connected client input ports.

## Declaration

```objectivec
extern OSStatus MIDIReceivedEventList(MIDIEndpointRef src, const MIDIEventList *evtlist);
```

## Parameters

- `src`: The source that’s transmitting MIDI events.
- `evtlist`: The MIDI events to transmit.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers can call this function when receiving MIDI events from a source.

Clients that create virtual sources, using [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md), can call this function when the source is generating MIDI events.

## See Also

### Event list management

- [MIDIEventListInit](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
