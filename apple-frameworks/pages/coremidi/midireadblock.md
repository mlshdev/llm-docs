> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midireadblock](https://developer.apple.com/documentation/coremidi/midireadblock)

# MIDIReadBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A block receiving MIDI input.

> use MIDIReceiveBlock and MIDIEventLists

## Declaration

```swift
typealias MIDIReadBlock = (UnsafePointer<MIDIPacketList>, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `pktlist`: The incoming MIDI message(s).
- `srcConnRefCon`: A refCon you passed to MIDIPortConnectSource, which identifies the source of the data.

<a id="Discussion"></a>

## Discussion

This is a callback block through which a client receives incoming MIDI messages.

A MIDIReadBlock is passed to the MIDIInputPortCreateWithBlock and MIDIDestinationCreateWithBlock functions. The CoreMIDI framework will create a high-priority receive thread on your client’s behalf, and from that thread, your MIDIReadProc will be called when incoming MIDI messages arrive.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate(\_:\_:\_:\_:\_:)](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock(\_:\_:\_:\_:)](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate(\_:\_:\_:)](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate(\_:\_:\_:\_:\_:)](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock(\_:\_:\_:\_:)](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit(\_:)](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDIPacketListAdd(\_:\_:\_:\_:\_:\_:)](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend(\_:\_:\_:)](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived(\_:\_:)](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.

# MIDIReadBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A block receiving MIDI input.

> use MIDIReceiveBlock and MIDIEventLists

## Declaration

```objectivec
typedef void (^)(const struct MIDIPacketList *, void *) __attribute__((nonblocking)) MIDIReadBlock;
```

## Parameters

- `pktlist`: The incoming MIDI message(s).
- `srcConnRefCon`: A refCon you passed to MIDIPortConnectSource, which identifies the source of the data.

<a id="Discussion"></a>

## Discussion

This is a callback block through which a client receives incoming MIDI messages.

A MIDIReadBlock is passed to the MIDIInputPortCreateWithBlock and MIDIDestinationCreateWithBlock functions. The CoreMIDI framework will create a high-priority receive thread on your client’s behalf, and from that thread, your MIDIReadProc will be called when incoming MIDI messages arrive.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDIPacketListAdd](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
