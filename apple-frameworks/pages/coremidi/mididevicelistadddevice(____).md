> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicelistadddevice(_:_:)](https://developer.apple.com/documentation/coremidi/mididevicelistadddevice(_:_:))

# MIDIDeviceListAddDevice(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Adds the specified device to the device list.

## Declaration

```swift
func MIDIDeviceListAddDevice(_ devList: MIDIDeviceListRef, _ dev: MIDIDeviceRef) -> OSStatus
```

## Parameters

- `devList`: The device list.
- `dev`: The device to add to the list.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices(\_:)](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice(\_:\_:)](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListDispose(\_:)](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.

# MIDIDeviceListAddDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Adds the specified device to the device list.

## Declaration

```objectivec
extern OSStatus MIDIDeviceListAddDevice(MIDIDeviceListRef devList, MIDIDeviceRef dev);
```

## Parameters

- `devList`: The device list.
- `dev`: The device to add to the list.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListDispose](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.
