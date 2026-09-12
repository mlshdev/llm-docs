> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiportdispose(_:)](https://developer.apple.com/documentation/coremidi/midiportdispose(_:))

# MIDIPortDispose(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Disposes of a MIDI port.

## Declaration

```swift
func MIDIPortDispose(_ port: MIDIPortRef) -> OSStatus
```

## Parameters

- `port`: The port to dispose of.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Calling this method explicitly isn’t required because the framework automatically disposes of clients at termination.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate(\_:\_:\_:)](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource(\_:\_:)](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

# MIDIPortDispose (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Disposes of a MIDI port.

## Declaration

```objectivec
extern OSStatus MIDIPortDispose(MIDIPortRef port);
```

## Parameters

- `port`: The port to dispose of.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Calling this method explicitly isn’t required because the framework automatically disposes of clients at termination.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortConnectSource](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.
