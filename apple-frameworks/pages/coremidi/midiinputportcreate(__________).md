> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiinputportcreate(_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midiinputportcreate(_:_:_:_:_:))

# MIDIInputPortCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.

> Use [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md) intead.

## Declaration

```swift
func MIDIInputPortCreate(_ client: MIDIClientRef, _ portName: CFString, _ readProc: MIDIReadProc, _ refCon: UnsafeMutableRawPointer?, _ outPort: UnsafeMutablePointer<MIDIPortRef>) -> OSStatus
```

## Parameters

- `client`: The client to own the newly-created port.
- `portName`: The name of the port.
- `readProc`: The MIDIReadProc which will be called with incoming MIDI, from sources connected to this port.
- `refCon`: The refCon passed to readHook.
- `outPort`: On successful return, points to the newly-created MIDIPort.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

After creating a port, use MIDIPortConnectSource to establish an input connection from any number of sources to your port.

readProc will be called on a separate high-priority thread owned by CoreMIDI.

## See Also

### Deprecated Functions

- [MIDIInputPortCreateWithBlock(\_:\_:\_:\_:)](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate(\_:\_:\_:)](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate(\_:\_:\_:\_:\_:)](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock(\_:\_:\_:\_:)](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit(\_:)](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDIPacketListAdd(\_:\_:\_:\_:\_:\_:)](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend(\_:\_:\_:)](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived(\_:\_:)](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.

# MIDIInputPortCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.

> Use [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md) intead.

## Declaration

```objectivec
extern OSStatus MIDIInputPortCreate(MIDIClientRef client, CFStringRef portName, MIDIReadProc readProc, void *refCon, MIDIPortRef *outPort);
```

## Parameters

- `client`: The client to own the newly-created port.
- `portName`: The name of the port.
- `readProc`: The MIDIReadProc which will be called with incoming MIDI, from sources connected to this port.
- `refCon`: The refCon passed to readHook.
- `outPort`: On successful return, points to the newly-created MIDIPort.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

After creating a port, use MIDIPortConnectSource to establish an input connection from any number of sources to your port.

readProc will be called on a separate high-priority thread owned by CoreMIDI.

## See Also

### Deprecated Functions

- [MIDIInputPortCreateWithBlock](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDISourceCreate](midisourcecreate%28______%29.md): Deprecated. Creates a virtual source in a client.
- [MIDIDestinationCreate](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDIPacketListAdd](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.
