> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midientitygetnumberofsources(_:)](https://developer.apple.com/documentation/coremidi/midientitygetnumberofsources(_:))

# MIDIEntityGetNumberOfSources(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the number of sources in an entity.

## Declaration

```swift
func MIDIEntityGetNumberOfSources(_ entity: MIDIEntityRef) -> Int
```

## Parameters

- `entity`: The entity to query.

<a id="return-value"></a>

## Return Value

The number of sources the entity contains, or 0 if an error occurred.

## See Also

### Entity lookup

- [MIDIEntityGetDevice(\_:\_:)](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetSource(\_:\_:)](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations(\_:)](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination(\_:\_:)](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.

# MIDIEntityGetNumberOfSources (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the number of sources in an entity.

## Declaration

```objectivec
extern ItemCount MIDIEntityGetNumberOfSources(MIDIEntityRef entity);
```

## Parameters

- `entity`: The entity to query.

<a id="return-value"></a>

## Return Value

The number of sources the entity contains, or 0 if an error occurred.

## See Also

### Entity lookup

- [MIDIEntityGetDevice](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetSource](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.
