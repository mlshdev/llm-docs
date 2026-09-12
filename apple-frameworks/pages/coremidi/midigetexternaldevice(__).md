> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetexternaldevice(_:)](https://developer.apple.com/documentation/coremidi/midigetexternaldevice(_:))

# MIDIGetExternalDevice(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns one of the external devices in the system.

## Declaration

```swift
func MIDIGetExternalDevice(_ deviceIndex0: Int) -> MIDIDeviceRef
```

## Parameters

- `deviceIndex0`: The index of the device to return.

<a id="return-value"></a>

## Return Value

A reference to a device, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this function to enumerate the external devices in the system.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices()](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice(\_:)](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices()](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIDeviceGetNumberOfEntities(\_:)](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity(\_:\_:)](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIGetExternalDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns one of the external devices in the system.

## Declaration

```objectivec
extern MIDIDeviceRef MIDIGetExternalDevice(ItemCount deviceIndex0);
```

## Parameters

- `deviceIndex0`: The index of the device to return.

<a id="return-value"></a>

## Return Value

A reference to a device, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this function to enumerate the external devices in the system.

## See Also

### Device lookup

- [MIDIGetNumberOfDevices](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIDeviceGetNumberOfEntities](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
