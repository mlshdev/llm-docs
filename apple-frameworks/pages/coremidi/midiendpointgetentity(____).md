> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiendpointgetentity(_:_:)](https://developer.apple.com/documentation/coremidi/midiendpointgetentity(_:_:))

# MIDIEndpointGetEntity(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Returns an endpoint’s entity.

## Declaration

```swift
func MIDIEndpointGetEntity(_ inEndpoint: MIDIEndpointRef, _ outEntity: UnsafeMutablePointer<MIDIEntityRef>?) -> OSStatus
```

## Parameters

- `inEndpoint`: The endpoint to query.
- `outEntity`: On exit, the endpoint’s owning entity, or `NULL` if none.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Virtual sources and destinations don’t have entities.

## See Also

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetRefCons(\_:\_:\_:)](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons(\_:\_:\_:)](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

# MIDIEndpointGetEntity (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Returns an endpoint’s entity.

## Declaration

```objectivec
extern OSStatus MIDIEndpointGetEntity(MIDIEndpointRef inEndpoint, MIDIEntityRef *outEntity);
```

## Parameters

- `inEndpoint`: The endpoint to query.
- `outEntity`: On exit, the endpoint’s owning entity, or `NULL` if none.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Virtual sources and destinations don’t have entities.

## See Also

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetRefCons](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.
