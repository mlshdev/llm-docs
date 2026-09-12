> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiportdisconnectsource(_:_:)](https://developer.apple.com/documentation/coremidi/midiportdisconnectsource(_:_:))

# MIDIPortDisconnectSource(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Closes a previously established source-to-input port connection.

## Declaration

```swift
func MIDIPortDisconnectSource(_ port: MIDIPortRef, _ source: MIDIEndpointRef) -> OSStatus
```

## Parameters

- `port`: The port with the connection to close.
- `source`: The source from which to close a connection to a port.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate(\_:\_:\_:)](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose(\_:)](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

# MIDIPortDisconnectSource (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Closes a previously established source-to-input port connection.

## Declaration

```objectivec
extern OSStatus MIDIPortDisconnectSource(MIDIPortRef port, MIDIEndpointRef source);
```

## Parameters

- `port`: The port with the connection to close.
- `source`: The source from which to close a connection to a port.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.
