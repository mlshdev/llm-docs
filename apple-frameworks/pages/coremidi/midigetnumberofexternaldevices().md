> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetnumberofexternaldevices()](https://developer.apple.com/documentation/coremidi/midigetnumberofexternaldevices())

# MIDIGetNumberOfExternalDevices() (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns the number of external MIDI devices in the system.

## Declaration

```swift
func MIDIGetNumberOfExternalDevices() -> Int
```

<a id="return-value"></a>

## Return Value

The number of external devices in the system, or 0 if an error occurred.

<a id="Discussion"></a>

## Discussion

External MIDI devices connect to driver endpoints using a standard MIDI cable. Their presence is optional only when a UI (such as Audio MIDI Setup) adds them.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices()](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice(\_:)](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetExternalDevice(\_:)](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities(\_:)](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity(\_:\_:)](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIGetNumberOfExternalDevices (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns the number of external MIDI devices in the system.

## Declaration

```objectivec
extern ItemCount MIDIGetNumberOfExternalDevices();
```

<a id="return-value"></a>

## Return Value

The number of external devices in the system, or 0 if an error occurred.

<a id="Discussion"></a>

## Discussion

External MIDI devices connect to driver endpoints using a standard MIDI cable. Their presence is optional only when a UI (such as Audio MIDI Setup) adds them.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetExternalDevice](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
