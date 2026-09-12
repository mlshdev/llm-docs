> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicegetentity(_:_:)](https://developer.apple.com/documentation/coremidi/mididevicegetentity(_:_:))

# MIDIDeviceGetEntity(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the device’s entity at a specific index.

## Declaration

```swift
func MIDIDeviceGetEntity(_ device: MIDIDeviceRef, _ entityIndex0: Int) -> MIDIEntityRef
```

## Parameters

- `device`: The device to query.
- `entityIndex0`: The entity index.

<a id="return-value"></a>

## Return Value

An entity reference, or `NULL` if an error occurred.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices()](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice(\_:)](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices()](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice(\_:)](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities(\_:)](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIDeviceGetEntity (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the device’s entity at a specific index.

## Declaration

```objectivec
extern MIDIEntityRef MIDIDeviceGetEntity(MIDIDeviceRef device, ItemCount entityIndex0);
```

## Parameters

- `device`: The device to query.
- `entityIndex0`: The entity index.

<a id="return-value"></a>

## Return Value

An entity reference, or `NULL` if an error occurred.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
