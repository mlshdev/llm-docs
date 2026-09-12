> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midioutputportcreate(_:_:_:)](https://developer.apple.com/documentation/coremidi/midioutputportcreate(_:_:_:))

# MIDIOutputPortCreate(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.

## Declaration

```swift
func MIDIOutputPortCreate(_ client: MIDIClientRef, _ portName: CFString, _ outPort: UnsafeMutablePointer<MIDIPortRef>) -> OSStatus
```

## Parameters

- `client`: The client to own the newly created port.
- `portName`: The name of the port.
- `outPort`: On successful return, points to the newly created port.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Output ports provide a mechanism for MIDI merging. Core MIDI assumes that each output port is responsible for sending only a single MIDI stream to each destination, although a single port may address all of the destinations in the system.

Multiple output ports are only necessary when an application is capable of directing multiple simultaneous MIDI streams to the same destination.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIPortDispose(\_:)](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource(\_:\_:)](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

# MIDIOutputPortCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.

## Declaration

```objectivec
extern OSStatus MIDIOutputPortCreate(MIDIClientRef client, CFStringRef portName, MIDIPortRef *outPort);
```

## Parameters

- `client`: The client to own the newly created port.
- `portName`: The name of the port.
- `outPort`: On successful return, points to the newly created port.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Output ports provide a mechanism for MIDI merging. Core MIDI assumes that each output port is responsible for sending only a single MIDI stream to each destination, although a single port may address all of the destinations in the system.

Multiple output ports are only necessary when an application is capable of directing multiple simultaneous MIDI streams to the same destination.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIPortDispose](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.
