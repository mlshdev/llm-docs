> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiendpointgetrefcons(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiendpointgetrefcons(_:_:_:))

# MIDIEndpointGetRefCons(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns contextual data assigned to an endpoint.

## Declaration

```swift
func MIDIEndpointGetRefCons(_ endpt: MIDIEndpointRef, _ ref1: UnsafeMutablePointer<UnsafeMutableRawPointer>?, _ ref2: UnsafeMutablePointer<UnsafeMutableRawPointer>?) -> OSStatus
```

## Parameters

- `endpt`: The endpoint with the `refCons` to return.
- `ref1`: On exit, the first `refCon`.
- `ref2`: On exit, the second `refCon`.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

## See Also

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity(\_:\_:)](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointSetRefCons(\_:\_:\_:)](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

# MIDIEndpointGetRefCons (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns contextual data assigned to an endpoint.

## Declaration

```objectivec
extern OSStatus MIDIEndpointGetRefCons(MIDIEndpointRef endpt, void **ref1, void **ref2);
```

## Parameters

- `endpt`: The endpoint with the `refCons` to return.
- `ref1`: On exit, the first `refCon`.
- `ref2`: On exit, the second `refCon`.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

## See Also

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointSetRefCons](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.
