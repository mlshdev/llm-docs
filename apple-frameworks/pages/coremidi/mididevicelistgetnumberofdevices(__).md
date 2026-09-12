> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicelistgetnumberofdevices(_:)](https://developer.apple.com/documentation/coremidi/mididevicelistgetnumberofdevices(_:))

# MIDIDeviceListGetNumberOfDevices(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Retrieves the number of devices in a device list.

## Declaration

```swift
func MIDIDeviceListGetNumberOfDevices(_ devList: MIDIDeviceListRef) -> Int
```

## Parameters

- `devList`: The device list.

<a id="return-value"></a>

## Return Value

The number of devices in the list, or 0 if an error occurred.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetDevice(\_:\_:)](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice(\_:\_:)](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose(\_:)](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.

# MIDIDeviceListGetNumberOfDevices (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Retrieves the number of devices in a device list.

## Declaration

```objectivec
extern ItemCount MIDIDeviceListGetNumberOfDevices(MIDIDeviceListRef devList);
```

## Parameters

- `devList`: The device list.

<a id="return-value"></a>

## Return Value

The number of devices in the list, or 0 if an error occurred.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetDevice](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.
