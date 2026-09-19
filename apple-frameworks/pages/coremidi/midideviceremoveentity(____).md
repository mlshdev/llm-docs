> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midideviceremoveentity(_:_:)

# MIDIDeviceRemoveEntity(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Removes an entity from a device.

## Declaration

```swift
func MIDIDeviceRemoveEntity(_ device: MIDIDeviceRef, _ entity: MIDIEntityRef) -> OSStatus
```

## Parameters

- `device`: The device to update.
- `entity`: The entity to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers call this function to remove one of a device’s entities.

## See Also

### Managing Entities

- [MIDIDeviceNewEntity(\_:\_:\_:\_:\_:\_:\_:)](mididevicenewentity%28______________%29.md): Adds a new entity to a device.
- [MIDIEntityAddOrRemoveEndpoints(\_:\_:\_:)](midientityaddorremoveendpoints%28______%29.md): Adds or removes an entity’s endpoints.

# MIDIDeviceRemoveEntity (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Removes an entity from a device.

## Declaration

```objectivec
extern OSStatus MIDIDeviceRemoveEntity(MIDIDeviceRef device, MIDIEntityRef entity);
```

## Parameters

- `device`: The device to update.
- `entity`: The entity to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers call this function to remove one of a device’s entities.

## See Also

### Managing Entities

- [MIDIDeviceNewEntity](mididevicenewentity%28______________%29.md): Adds a new entity to a device.
- [MIDIEntityAddOrRemoveEndpoints](midientityaddorremoveendpoints%28______%29.md): Adds or removes an entity’s endpoints.
