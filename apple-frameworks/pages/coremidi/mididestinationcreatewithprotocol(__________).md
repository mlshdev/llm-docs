> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididestinationcreatewithprotocol(_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/mididestinationcreatewithprotocol(_:_:_:_:_:))

# MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a virtual destination in a client.

## Declaration

```swift
func MIDIDestinationCreateWithProtocol(_ client: MIDIClientRef, _ name: CFString, _ protocol: MIDIProtocolID, _ outDest: UnsafeMutablePointer<MIDIEndpointRef>, _ readBlock: @escaping MIDIReceiveBlock) -> OSStatus
```

## Parameters

- `client`: The client that owns the virtual destination.
- `name`: The name of the virtual destination.
- `protocol`: The MIDI protocol variant to deliver to the destination. The system automatically converts messages to this protocol as needed.
- `outDest`: On successful return, a pointer to the newly created destination.
- `readBlock`: A callback block the system invokes when a client sends MIDI data to the virtual destination.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers don’t need to call this function. When they create devices and entities, the system automatically creates sources and destinations at that time. See [kMIDIPropertyAdvanceScheduleTimeMuSec](kmidipropertyadvancescheduletimemusec.md) for information about the relationship between when a sender sends MIDI data to the destination and when it’s received.

The system calls the read block on a separate high-priority thread owned by Core MIDI.

> **Tip**

>  After creating a virtual source, assign it the same unique ID it had the last time your app created it. Doing so permits other clients to retain persistent references to your virtual source.

## See Also

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity(\_:\_:)](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons(\_:\_:\_:)](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons(\_:\_:\_:)](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

# MIDIDestinationCreateWithProtocol (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a virtual destination in a client.

## Declaration

```objectivec
extern OSStatus MIDIDestinationCreateWithProtocol(MIDIClientRef client, CFStringRef name, MIDIProtocolID protocol, MIDIEndpointRef *outDest, MIDIReceiveBlock readBlock);
```

## Parameters

- `client`: The client that owns the virtual destination.
- `name`: The name of the virtual destination.
- `protocol`: The MIDI protocol variant to deliver to the destination. The system automatically converts messages to this protocol as needed.
- `outDest`: On successful return, a pointer to the newly created destination.
- `readBlock`: A callback block the system invokes when a client sends MIDI data to the virtual destination.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers don’t need to call this function. When they create devices and entities, the system automatically creates sources and destinations at that time. See [kMIDIPropertyAdvanceScheduleTimeMuSec](kmidipropertyadvancescheduletimemusec.md) for information about the relationship between when a sender sends MIDI data to the destination and when it’s received.

The system calls the read block on a separate high-priority thread owned by Core MIDI.

> **Tip**

>  After creating a virtual source, assign it the same unique ID it had the last time your app created it. Doing so permits other clients to retain persistent references to your virtual source.

## See Also

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.
