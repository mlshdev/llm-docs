> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midientityref](https://developer.apple.com/documentation/coremidi/midientityref)

# MIDIEntityRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An entity that a device owns and that contains endpoints.

## Declaration

```swift
typealias MIDIEntityRef = MIDIObjectRef
```

<a id="Discussion"></a>

## Discussion

An entity object derives from [MIDIObjectRef](midiobjectref.md), and its owning object is a [MIDIDeviceRef](midideviceref.md).

Devices may have multiple logically distinct subcomponents; for example, a MIDI synthesizer and a pair of MIDI ports are addressable using a USB port. By grouping a device’s endpoints into entities, the system has enough information for an app to make reasonable assumptions about how to communicate bidirectionally with each entity, as required by MIDI librarian apps.

## See Also

### Entity lookup

- [MIDIEntityGetDevice(\_:\_:)](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources(\_:)](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource(\_:\_:)](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations(\_:)](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination(\_:\_:)](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.

# MIDIEntityRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An entity that a device owns and that contains endpoints.

## Declaration

```objectivec
typedef MIDIObjectRef MIDIEntityRef;
```

<a id="Discussion"></a>

## Discussion

An entity object derives from [MIDIObjectRef](midiobjectref.md), and its owning object is a [MIDIDeviceRef](midideviceref.md).

Devices may have multiple logically distinct subcomponents; for example, a MIDI synthesizer and a pair of MIDI ports are addressable using a USB port. By grouping a device’s endpoints into entities, the system has enough information for an app to make reasonable assumptions about how to communicate bidirectionally with each entity, as required by MIDI librarian apps.

## See Also

### Entity lookup

- [MIDIEntityGetDevice](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
