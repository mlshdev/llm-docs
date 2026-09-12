> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midientitygetsource(_:_:)](https://developer.apple.com/documentation/coremidi/midientitygetsource(_:_:))

# MIDIEntityGetSource(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns one of an entity’s sources.

## Declaration

```swift
func MIDIEntityGetSource(_ entity: MIDIEntityRef, _ sourceIndex0: Int) -> MIDIEndpointRef
```

## Parameters

- `entity`: The entity to query.
- `sourceIndex0`: The source index.

<a id="return-value"></a>

## Return Value

A reference to a source, or `NULL` if an error occurred.

## See Also

### Entity lookup

- [MIDIEntityGetDevice(\_:\_:)](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources(\_:)](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetNumberOfDestinations(\_:)](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination(\_:\_:)](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.

# MIDIEntityGetSource (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns one of an entity’s sources.

## Declaration

```objectivec
extern MIDIEndpointRef MIDIEntityGetSource(MIDIEntityRef entity, ItemCount sourceIndex0);
```

## Parameters

- `entity`: The entity to query.
- `sourceIndex0`: The source index.

<a id="return-value"></a>

## Return Value

A reference to a source, or `NULL` if an error occurred.

## See Also

### Entity lookup

- [MIDIEntityGetDevice](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetNumberOfDestinations](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.
