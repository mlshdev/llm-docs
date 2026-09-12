> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetdevice(_:)](https://developer.apple.com/documentation/coremidi/midigetdevice(_:))

# MIDIGetDevice(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns a device from the system.

## Declaration

```swift
func MIDIGetDevice(_ deviceIndex0: Int) -> MIDIDeviceRef
```

## Parameters

- `deviceIndex0`: The index of the device to retrieve.

<a id="return-value"></a>

## Return Value

A reference to a device, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this function to enumerate the devices in the system. To enumerate the entities in the system, walk through the devices and then walk through the device’s entities. When you iterate through the devices and entities in the system, you don’t visit virtual sources and destinations created by other clients.

A device iteration returns devices that are *offline* (they were present in the past but aren’t currently available), while iterations through the system’s sources and destinations don’t include the endpoints of offline devices. Instead, clients typically use [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md), [MIDIGetSource(\_:)](midigetsource%28__%29.md), [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md) and [MIDIGetDestination(\_:)](midigetdestination%28__%29.md).

## See Also

### Device lookup

- [MIDIGetNumberOfDevices()](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetNumberOfExternalDevices()](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice(\_:)](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities(\_:)](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity(\_:\_:)](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIGetDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns a device from the system.

## Declaration

```objectivec
extern MIDIDeviceRef MIDIGetDevice(ItemCount deviceIndex0);
```

## Parameters

- `deviceIndex0`: The index of the device to retrieve.

<a id="return-value"></a>

## Return Value

A reference to a device, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this function to enumerate the devices in the system. To enumerate the entities in the system, walk through the devices and then walk through the device’s entities. When you iterate through the devices and entities in the system, you don’t visit virtual sources and destinations created by other clients.

A device iteration returns devices that are *offline* (they were present in the past but aren’t currently available), while iterations through the system’s sources and destinations don’t include the endpoints of offline devices. Instead, clients typically use [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md), [MIDIGetSource](midigetsource%28__%29.md), [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md) and [MIDIGetDestination](midigetdestination%28__%29.md).

## See Also

### Device lookup

- [MIDIGetNumberOfDevices](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetNumberOfExternalDevices](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
