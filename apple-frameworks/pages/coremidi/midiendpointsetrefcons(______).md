> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiendpointsetrefcons(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiendpointsetrefcons(_:_:_:))

# MIDIEndpointSetRefCons(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Sets contextual data on an endpoint.

## Declaration

```swift
func MIDIEndpointSetRefCons(_ endpt: MIDIEndpointRef, _ ref1: UnsafeMutableRawPointer?, _ ref2: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `endpt`: The endpoint to set the data on.
- `ref1`: The first `refCon`.
- `ref2`: The second `refCon`.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

Drivers need an efficient way to translate from a [MIDIEndpointRef](midiendpointref.md) (source or destination) to their own internal data structures corresponding to that endpoint. This function provides a way for the driver to assign its own data to endpoints.

The data you set isn’t persistent and needs to be reintialized in each call to [Start](mididriverinterface/start.md).

A typical use is for one `refCon` to refer to a device, and a second to refer to a port on the device.

## See Also

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity(\_:\_:)](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons(\_:\_:\_:)](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

# MIDIEndpointSetRefCons (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Sets contextual data on an endpoint.

## Declaration

```objectivec
extern OSStatus MIDIEndpointSetRefCons(MIDIEndpointRef endpt, void *ref1, void *ref2);
```

## Parameters

- `endpt`: The endpoint to set the data on.
- `ref1`: The first `refCon`.
- `ref2`: The second `refCon`.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

Drivers need an efficient way to translate from a [MIDIEndpointRef](midiendpointref.md) (source or destination) to their own internal data structures corresponding to that endpoint. This function provides a way for the driver to assign its own data to endpoints.

The data you set isn’t persistent and needs to be reintialized in each call to [Start](mididriverinterface/start.md).

A typical use is for one `refCon` to refer to a device, and a second to refer to a port on the device.

## See Also

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.
