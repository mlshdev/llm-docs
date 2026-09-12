> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midipacketlistinit(_:)](https://developer.apple.com/documentation/coremidi/midipacketlistinit(_:))

# MIDIPacketListInit(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Prepares a MIDIPacketList to be built up dynamically.

> Use [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md) instead.

## Declaration

```swift
func MIDIPacketListInit(_ pktlist: UnsafeMutablePointer<MIDIPacketList>) -> UnsafeMutablePointer<MIDIPacket>
```

## Parameters

- `pktlist`: The packet list to be initialized.

<a id="return-value"></a>

## Return Value

A pointer to the first MIDIPacket in the packet list.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate(\_:\_:\_:\_:\_:)](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock(\_:\_:\_:\_:)](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate(\_:\_:\_:)](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate(\_:\_:\_:\_:\_:)](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock(\_:\_:\_:\_:)](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListAdd(\_:\_:\_:\_:\_:\_:)](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend(\_:\_:\_:)](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived(\_:\_:)](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.

# MIDIPacketListInit (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Prepares a MIDIPacketList to be built up dynamically.

> Use [MIDIEventListInit](midieventlistinit%28____%29.md) instead.

## Declaration

```objectivec
extern MIDIPacket *MIDIPacketListInit(MIDIPacketList *pktlist);
```

## Parameters

- `pktlist`: The packet list to be initialized.

<a id="return-value"></a>

## Return Value

A pointer to the first MIDIPacket in the packet list.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListAdd](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.
