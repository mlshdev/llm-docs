> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiendpointref](https://developer.apple.com/documentation/coremidi/midiendpointref)

# MIDIEndpointRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A MIDI source or destination an entity owns.

## Declaration

```swift
typealias MIDIEndpointRef = MIDIObjectRef
```

<a id="Discussion"></a>

## Discussion

An endpoint object derives from [MIDIObjectRef](midiobjectref.md). It’s owned by a [MIDIEntityRef](midientityref.md), unless it’s a virtual endpoint, in which case it has no owner. An entity may have any number of MIDI endpoints, which contain sources and destinations of 16-channel MIDI streams.

## See Also

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity(\_:\_:)](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons(\_:\_:\_:)](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons(\_:\_:\_:)](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.

# MIDIEndpointRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A MIDI source or destination an entity owns.

## Declaration

```objectivec
typedef MIDIObjectRef MIDIEndpointRef;
```

<a id="Discussion"></a>

## Discussion

An endpoint object derives from [MIDIObjectRef](midiobjectref.md). It’s owned by a [MIDIEntityRef](midientityref.md), unless it’s a virtual endpoint, in which case it has no owner. An entity may have any number of MIDI endpoints, which contain sources and destinations of 16-channel MIDI streams.

## See Also

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
