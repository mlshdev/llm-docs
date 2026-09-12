> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisourcecreatewithprotocol(_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midisourcecreatewithprotocol(_:_:_:_:))

# MIDISourceCreateWithProtocol(\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a virtual source in a client.

## Declaration

```swift
func MIDISourceCreateWithProtocol(_ client: MIDIClientRef, _ name: CFString, _ protocol: MIDIProtocolID, _ outSrc: UnsafeMutablePointer<MIDIEndpointRef>) -> OSStatus
```

## Parameters

- `client`: The client to own the virtual source.
- `name`: The name of the virtual source.
- `protocol`: The MIDI protocol variant to send from this source. The system automatically converts messages from this protocol to the protocol of the destination.
- `outSrc`: On successful return, a pointer to the newly created source.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers don’t need to call this function. When they create devices and entities, the system automatically creates sources and destinations at that time. After creating a virtual source, use [MIDIReceivedEventList(\_:\_:)](midireceivedeventlist%28____%29.md) to transmit MIDI messages from your virtual source to any clients connected to the virtual source.

> **Tip**

>  After creating a virtual source, assign it the same unique ID it had the last time your app created it. Doing so permits other clients to retain persistent references to your virtual source.

## See Also

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity(\_:\_:)](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons(\_:\_:\_:)](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons(\_:\_:\_:)](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

# MIDISourceCreateWithProtocol (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a virtual source in a client.

## Declaration

```objectivec
extern OSStatus MIDISourceCreateWithProtocol(MIDIClientRef client, CFStringRef name, MIDIProtocolID protocol, MIDIEndpointRef *outSrc);
```

## Parameters

- `client`: The client to own the virtual source.
- `name`: The name of the virtual source.
- `protocol`: The MIDI protocol variant to send from this source. The system automatically converts messages from this protocol to the protocol of the destination.
- `outSrc`: On successful return, a pointer to the newly created source.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers don’t need to call this function. When they create devices and entities, the system automatically creates sources and destinations at that time. After creating a virtual source, use [MIDIReceivedEventList](midireceivedeventlist%28____%29.md) to transmit MIDI messages from your virtual source to any clients connected to the virtual source.

> **Tip**

>  After creating a virtual source, assign it the same unique ID it had the last time your app created it. Doing so permits other clients to retain persistent references to your virtual source.

## See Also

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.
