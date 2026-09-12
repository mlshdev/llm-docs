> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midipacketlistadd(_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midipacketlistadd(_:_:_:_:_:_:))

# MIDIPacketListAdd(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds a MIDI event to a MIDIPacketList.

> Use [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md) instead.

## Declaration

```swift
func MIDIPacketListAdd(_ pktlist: UnsafeMutablePointer<MIDIPacketList>, _ listSize: Int, _ curPacket: UnsafeMutablePointer<MIDIPacket>, _ time: MIDITimeStamp, _ nData: Int, _ data: UnsafePointer<UInt8>) -> UnsafeMutablePointer<MIDIPacket>
```

## Parameters

- `pktlist`: The packet list to which the event is to be added.
- `listSize`: The size, in bytes, of the packet list.
- `curPacket`: A packet pointer returned by a previous call to MIDIPacketListInit or MIDIPacketListAdd for this packet list.
- `time`: The new event’s time.
- `nData`: The length of the new event, in bytes.
- `data`: The new event. May be a single MIDI event, or a partial sys-ex event. Running status is *not* permitted.

<a id="return-value"></a>

## Return Value

Returns null if there was not room in the packet for the event; otherwise returns a packet pointer which should be passed as curPacket in a subsequent call to this function.

<a id="Discussion"></a>

## Discussion

The maximum size of a packet list is 65536 bytes. Large sysex messages must be sent in smaller packet lists.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate(\_:\_:\_:\_:\_:)](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock(\_:\_:\_:\_:)](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate(\_:\_:\_:)](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate(\_:\_:\_:\_:\_:)](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock(\_:\_:\_:\_:)](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit(\_:)](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDISend(\_:\_:\_:)](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived(\_:\_:)](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.

# MIDIPacketListAdd (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds a MIDI event to a MIDIPacketList.

> Use [MIDIEventListAdd](midieventlistadd%28____________%29.md) instead.

## Declaration

```objectivec
extern MIDIPacket *MIDIPacketListAdd(MIDIPacketList *pktlist, ByteCount listSize, MIDIPacket *curPacket, MIDITimeStamp time, ByteCount nData, const Byte *data);
```

## Parameters

- `pktlist`: The packet list to which the event is to be added.
- `listSize`: The size, in bytes, of the packet list.
- `curPacket`: A packet pointer returned by a previous call to MIDIPacketListInit or MIDIPacketListAdd for this packet list.
- `time`: The new event’s time.
- `nData`: The length of the new event, in bytes.
- `data`: The new event. May be a single MIDI event, or a partial sys-ex event. Running status is *not* permitted.

<a id="return-value"></a>

## Return Value

Returns null if there was not room in the packet for the event; otherwise returns a packet pointer which should be passed as curPacket in a subsequent call to this function.

<a id="Discussion"></a>

## Discussion

The maximum size of a packet list is 65536 bytes. Large sysex messages must be sent in smaller packet lists.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDISend](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.
