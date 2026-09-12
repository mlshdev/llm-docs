> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicelistgetdevice(_:_:)](https://developer.apple.com/documentation/coremidi/mididevicelistgetdevice(_:_:))

# MIDIDeviceListGetDevice(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Retrieves a MIDI device from a device list.

## Declaration

```swift
func MIDIDeviceListGetDevice(_ devList: MIDIDeviceListRef, _ index0: Int) -> MIDIDeviceRef
```

## Parameters

- `devList`: The device list.
- `index0`: The index of the device to return.

<a id="return-value"></a>

## Return Value

A reference to a device, or `NULL` if an error occurred.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices(\_:)](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListAddDevice(\_:\_:)](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose(\_:)](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.

# MIDIDeviceListGetDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Retrieves a MIDI device from a device list.

## Declaration

```objectivec
extern MIDIDeviceRef MIDIDeviceListGetDevice(MIDIDeviceListRef devList, ItemCount index0);
```

## Parameters

- `devList`: The device list.
- `index0`: The index of the device to return.

<a id="return-value"></a>

## Return Value

A reference to a device, or `NULL` if an error occurred.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListAddDevice](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.
