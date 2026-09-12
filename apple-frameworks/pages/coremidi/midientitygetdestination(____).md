> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midientitygetdestination(_:_:)](https://developer.apple.com/documentation/coremidi/midientitygetdestination(_:_:))

# MIDIEntityGetDestination(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns one of an entity’s destinations.

## Declaration

```swift
func MIDIEntityGetDestination(_ entity: MIDIEntityRef, _ destIndex0: Int) -> MIDIEndpointRef
```

## Parameters

- `entity`: The entity to query.
- `destIndex0`: The destination index.

<a id="return-value"></a>

## Return Value

A reference to a destination, or `NULL` if an error occurred.

## See Also

### Entity lookup

- [MIDIEntityGetDevice(\_:\_:)](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources(\_:)](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource(\_:\_:)](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations(\_:)](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.

# MIDIEntityGetDestination (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns one of an entity’s destinations.

## Declaration

```objectivec
extern MIDIEndpointRef MIDIEntityGetDestination(MIDIEntityRef entity, ItemCount destIndex0);
```

## Parameters

- `entity`: The entity to query.
- `destIndex0`: The destination index.

<a id="return-value"></a>

## Return Value

A reference to a destination, or `NULL` if an error occurred.

## See Also

### Entity lookup

- [MIDIEntityGetDevice](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.
