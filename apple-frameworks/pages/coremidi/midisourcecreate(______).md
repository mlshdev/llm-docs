> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisourcecreate(_:_:_:)](https://developer.apple.com/documentation/coremidi/midisourcecreate(_:_:_:))

# MIDISourceCreate(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a virtual source in a client.

> Use [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md) instead.

## Declaration

```swift
func MIDISourceCreate(_ client: MIDIClientRef, _ name: CFString, _ outSrc: UnsafeMutablePointer<MIDIEndpointRef>) -> OSStatus
```

## Parameters

- `client`: The client owning the virtual source.
- `name`: The name of the virtual source.
- `outSrc`: On successful return, a pointer to the newly-created source.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

Drivers need not call this; when they create devices and entities, sources and destinations are created at that time.

After creating a virtual source, use MIDIReceived to transmit MIDI messages from your virtual source to any clients connected to the virtual source.

After creating a virtual source, it’s a good idea to assign it the same unique ID it had the last time your application created it. (Although you should be prepared for this to fail in the unlikely event of a collision.) This will permit other clients to retain persistent references to your virtual source more easily.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate(\_:\_:\_:\_:\_:)](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock(\_:\_:\_:\_:)](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIDestinationCreate(\_:\_:\_:\_:\_:)](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock(\_:\_:\_:\_:)](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit(\_:)](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDIPacketListAdd(\_:\_:\_:\_:\_:\_:)](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend(\_:\_:\_:)](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived(\_:\_:)](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.

# MIDISourceCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a virtual source in a client.

> Use [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md) instead.

## Declaration

```objectivec
extern OSStatus MIDISourceCreate(MIDIClientRef client, CFStringRef name, MIDIEndpointRef *outSrc);
```

## Parameters

- `client`: The client owning the virtual source.
- `name`: The name of the virtual source.
- `outSrc`: On successful return, a pointer to the newly-created source.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

Drivers need not call this; when they create devices and entities, sources and destinations are created at that time.

After creating a virtual source, use MIDIReceived to transmit MIDI messages from your virtual source to any clients connected to the virtual source.

After creating a virtual source, it’s a good idea to assign it the same unique ID it had the last time your application created it. (Although you should be prepared for this to fail in the unlikely event of a collision.) This will permit other clients to retain persistent references to your virtual source more easily.

## See Also

### Deprecated Functions

- [MIDIInputPortCreate](midiinputportcreate%28__________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIInputPortCreateWithBlock](midiinputportcreatewithblock%28________%29.md): Deprecated. Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIDestinationCreate](mididestinationcreate%28__________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIDestinationCreateWithBlock](mididestinationcreatewithblock%28________%29.md): Deprecated. Creates a virtual destination in a client.
- [MIDIPacketListInit](midipacketlistinit%28__%29.md): Deprecated. Prepares a MIDIPacketList to be built up dynamically.
- [MIDIPacketListAdd](midipacketlistadd%28____________%29.md): Deprecated. Adds a MIDI event to a MIDIPacketList.
- [MIDISend](midisend%28______%29.md): Deprecated. Sends MIDI to a destination.
- [MIDIReceived](midireceived%28____%29.md): Deprecated. Distributes incoming MIDI from a source to the client input ports which are connected to that source.
- [MIDIReadProc](midireadproc.md): Deprecated. A function receiving MIDI input.
- [MIDIReadBlock](midireadblock.md): Deprecated. A block receiving MIDI input.
