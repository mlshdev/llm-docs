> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiportconnectsource(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiportconnectsource(_:_:_:))

# MIDIPortConnectSource(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Makes a connection from a source to a client input port.

## Declaration

```swift
func MIDIPortConnectSource(_ port: MIDIPortRef, _ source: MIDIEndpointRef, _ connRefCon: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `port`: The port on which to create the connection.
- `source`: The source from which to create the connection.
- `connRefCon`: The data that passes to the port’s [MIDIReceiveBlock](midireceiveblock.md) to identify the source, which is always [nil](../objectivec/nil-227m0.md) for virtual destinations.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate(\_:\_:\_:)](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose(\_:)](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortDisconnectSource(\_:\_:)](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

# MIDIPortConnectSource (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Makes a connection from a source to a client input port.

## Declaration

```objectivec
extern OSStatus MIDIPortConnectSource(MIDIPortRef port, MIDIEndpointRef source, void *connRefCon);
```

## Parameters

- `port`: The port on which to create the connection.
- `source`: The source from which to create the connection.
- `connRefCon`: The data that passes to the port’s [MIDIReceiveBlock](midireceiveblock.md) to identify the source, which is always [nil](../objectivec/nil-227m0.md) for virtual destinations.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortDisconnectSource](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.
