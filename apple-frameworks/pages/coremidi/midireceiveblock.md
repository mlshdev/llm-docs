> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midireceiveblock](https://developer.apple.com/documentation/coremidi/midireceiveblock)

# MIDIReceiveBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

## Declaration

```swift
typealias MIDIReceiveBlock = (UnsafePointer<MIDIEventList>, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `evtlist`: The incoming MIDI message(s).
- `srcConnRefCon`: The refCon that identifies the source of the data, which is the value that you pass for the `connRefCon` parameter to [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md). This value is always [nil](../objectivec/nil-227m0.md) when receiving a MIDI event on a virtual input.

<a id="Discussion"></a>

## Discussion

A client receives incoming MIDI messages through this callback block.

The [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md) and [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md) functions receive a [MIDIReceiveBlock](midireceiveblock.md). The system creates a high-priority receive thread on your client’s behalf, and from that thread it calls your [MIDIReceiveBlock](midireceiveblock.md) when incoming MIDI messages arrive.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate(\_:\_:\_:)](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose(\_:)](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource(\_:\_:)](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.

# MIDIReceiveBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

## Declaration

```objectivec
typedef void (^)(const struct MIDIEventList *, void *) __attribute__((nonblocking)) MIDIReceiveBlock;
```

## Parameters

- `evtlist`: The incoming MIDI message(s).
- `srcConnRefCon`: The refCon that identifies the source of the data, which is the value that you pass for the `connRefCon` parameter to [MIDIPortConnectSource](midiportconnectsource%28______%29.md). This value is always [nil](../objectivec/nil-227m0.md) when receiving a MIDI event on a virtual input.

<a id="Discussion"></a>

## Discussion

A client receives incoming MIDI messages through this callback block.

The [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md) and [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md) functions receive a [MIDIReceiveBlock](midireceiveblock.md). The system creates a high-priority receive thread on your client’s behalf, and from that thread it calls your [MIDIReceiveBlock](midireceiveblock.md) when incoming MIDI messages arrive.

## See Also

### Port management

- [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
