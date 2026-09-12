> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetnumberofdevices()](https://developer.apple.com/documentation/coremidi/midigetnumberofdevices())

# MIDIGetNumberOfDevices() (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the number of devices in the system.

## Declaration

```swift
func MIDIGetNumberOfDevices() -> Int
```

<a id="return-value"></a>

## Return Value

The number of devices in the system, or 0 if an error occurred.

## See Also

### Device lookup

- [MIDIGetDevice(\_:)](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices()](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice(\_:)](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities(\_:)](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity(\_:\_:)](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIGetNumberOfDevices (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the number of devices in the system.

## Declaration

```objectivec
extern ItemCount MIDIGetNumberOfDevices();
```

<a id="return-value"></a>

## Return Value

The number of devices in the system, or 0 if an error occurred.

## See Also

### Device lookup

- [MIDIGetDevice](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
