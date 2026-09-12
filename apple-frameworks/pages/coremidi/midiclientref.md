> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiclientref](https://developer.apple.com/documentation/coremidi/midiclientref)

# MIDIClientRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that maintains per-client state.

## Declaration

```swift
typealias MIDIClientRef = MIDIObjectRef
```

<a id="Discussion"></a>

## Discussion

A client object derives from [MIDIObjectRef](midiobjectref.md). It doesn’t have an owning object.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientCreateWithBlock(\_:\_:\_:)](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientDispose(\_:)](midiclientdispose%28__%29.md): Disposes of a MIDI client.

# MIDIClientRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that maintains per-client state.

## Declaration

```objectivec
typedef MIDIObjectRef MIDIClientRef;
```

<a id="Discussion"></a>

## Discussion

A client object derives from [MIDIObjectRef](midiobjectref.md). It doesn’t have an owning object.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientCreateWithBlock](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientDispose](midiclientdispose%28__%29.md): Disposes of a MIDI client.
