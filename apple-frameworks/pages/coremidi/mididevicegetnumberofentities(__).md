> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicegetnumberofentities(_:)](https://developer.apple.com/documentation/coremidi/mididevicegetnumberofentities(_:))

# MIDIDeviceGetNumberOfEntities(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the number of entities in a device.

## Declaration

```swift
func MIDIDeviceGetNumberOfEntities(_ device: MIDIDeviceRef) -> Int
```

## Parameters

- `device`: The device to query.

<a id="return-value"></a>

## Return Value

The number of entities the device contains, or 0 if an error occurred.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices()](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice(\_:)](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices()](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice(\_:)](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetEntity(\_:\_:)](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIDeviceGetNumberOfEntities (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the number of entities in a device.

## Declaration

```objectivec
extern ItemCount MIDIDeviceGetNumberOfEntities(MIDIDeviceRef device);
```

## Parameters

- `device`: The device to query.

<a id="return-value"></a>

## Return Value

The number of entities the device contains, or 0 if an error occurred.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetEntity](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
