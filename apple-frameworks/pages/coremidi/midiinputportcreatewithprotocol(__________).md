> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiinputportcreatewithprotocol(_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midiinputportcreatewithprotocol(_:_:_:_:_:))

# MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.

## Declaration

```swift
func MIDIInputPortCreateWithProtocol(_ client: MIDIClientRef, _ portName: CFString, _ protocol: MIDIProtocolID, _ outPort: UnsafeMutablePointer<MIDIPortRef>, _ receiveBlock: @escaping MIDIReceiveBlock) -> OSStatus
```

## Parameters

- `client`: The client to own the newly created port.
- `portName`: The name of the port.
- `protocol`: The MIDI protocol variant to deliver to this port. The system automatically converts messages from one protocol to another as needed.
- `outPort`: On successful return, points to the newly created MIDI port.
- `receiveBlock`: A callback block the system invokes with incoming MIDI from sources connected to this port.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

After creating a port, use [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md) to establish an input connection from any number of sources to your port.

The system calls the receive block on a separate high-priority thread owned by Core MIDI.

## See Also

### Port management

- [MIDIOutputPortCreate(\_:\_:\_:)](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose(\_:)](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource(\_:\_:)](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

# MIDIInputPortCreateWithProtocol (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.

## Declaration

```objectivec
extern OSStatus MIDIInputPortCreateWithProtocol(MIDIClientRef client, CFStringRef portName, MIDIProtocolID protocol, MIDIPortRef *outPort, MIDIReceiveBlock receiveBlock);
```

## Parameters

- `client`: The client to own the newly created port.
- `portName`: The name of the port.
- `protocol`: The MIDI protocol variant to deliver to this port. The system automatically converts messages from one protocol to another as needed.
- `outPort`: On successful return, points to the newly created MIDI port.
- `receiveBlock`: A callback block the system invokes with incoming MIDI from sources connected to this port.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

After creating a port, use [MIDIPortConnectSource](midiportconnectsource%28______%29.md) to establish an input connection from any number of sources to your port.

The system calls the receive block on a separate high-priority thread owned by Core MIDI.

## See Also

### Port management

- [MIDIOutputPortCreate](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.
