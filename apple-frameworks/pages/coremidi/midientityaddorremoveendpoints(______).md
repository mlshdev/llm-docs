> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midientityaddorremoveendpoints(_:_:_:)](https://developer.apple.com/documentation/coremidi/midientityaddorremoveendpoints(_:_:_:))

# MIDIEntityAddOrRemoveEndpoints(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Adds or removes an entity’s endpoints.

## Declaration

```swift
func MIDIEntityAddOrRemoveEndpoints(_ entity: MIDIEntityRef, _ numSourceEndpoints: Int, _ numDestinationEndpoints: Int) -> OSStatus
```

## Parameters

- `entity`: The entity to update.
- `numSourceEndpoints`: The number of source endpoints.
- `numDestinationEndpoints`: The number of destination endpoints.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers and configuration editors may call this function to add to or remove an entity’s endpoints. The [MIDIProtocolID](midiprotocolid.md) of new endpoints is initially the same as that of the entity.

## See Also

### Managing Entities

- [MIDIDeviceNewEntity(\_:\_:\_:\_:\_:\_:\_:)](mididevicenewentity%28______________%29.md): Adds a new entity to a device.
- [MIDIDeviceRemoveEntity(\_:\_:)](midideviceremoveentity%28____%29.md): Removes an entity from a device.

# MIDIEntityAddOrRemoveEndpoints (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Adds or removes an entity’s endpoints.

## Declaration

```objectivec
extern OSStatus MIDIEntityAddOrRemoveEndpoints(MIDIEntityRef entity, ItemCount numSourceEndpoints, ItemCount numDestinationEndpoints);
```

## Parameters

- `entity`: The entity to update.
- `numSourceEndpoints`: The number of source endpoints.
- `numDestinationEndpoints`: The number of destination endpoints.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers and configuration editors may call this function to add to or remove an entity’s endpoints. The [MIDIProtocolID](midiprotocolid.md) of new endpoints is initially the same as that of the entity.

## See Also

### Managing Entities

- [MIDIDeviceNewEntity](mididevicenewentity%28______________%29.md): Adds a new entity to a device.
- [MIDIDeviceRemoveEntity](midideviceremoveentity%28____%29.md): Removes an entity from a device.
