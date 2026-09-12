> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiclientdispose(_:)](https://developer.apple.com/documentation/coremidi/midiclientdispose(_:))

# MIDIClientDispose(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Disposes of a MIDI client.

## Declaration

```swift
func MIDIClientDispose(_ client: MIDIClientRef) -> OSStatus
```

## Parameters

- `client`: The client to dispose of.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Don’t explicitly dispose of your client; the system automatically disposes all clients when an app terminates. However, if you call this method to dispose the last or only client owned by an app, the MIDI server may exit if there are no other clients remaining in the system. If this occurs, all subsequent calls by your app to [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md) and [MIDIClientCreateWithBlock(\_:\_:\_:)](midiclientcreatewithblock%28______%29.md) fail.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientCreateWithBlock(\_:\_:\_:)](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.

# MIDIClientDispose (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Disposes of a MIDI client.

## Declaration

```objectivec
extern OSStatus MIDIClientDispose(MIDIClientRef client);
```

## Parameters

- `client`: The client to dispose of.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Don’t explicitly dispose of your client; the system automatically disposes all clients when an app terminates. However, if you call this method to dispose the last or only client owned by an app, the MIDI server may exit if there are no other clients remaining in the system. If this occurs, all subsequent calls by your app to [MIDIClientCreate](midiclientcreate%28________%29.md) and [MIDIClientCreateWithBlock](midiclientcreatewithblock%28______%29.md) fail.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientCreateWithBlock](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.
