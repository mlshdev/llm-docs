> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicelistdispose(_:)](https://developer.apple.com/documentation/coremidi/mididevicelistdispose(_:))

# MIDIDeviceListDispose(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Disposes of a device list, but not its devices.

## Declaration

```swift
func MIDIDeviceListDispose(_ devList: MIDIDeviceListRef) -> OSStatus
```

## Parameters

- `devList`: The device list of which you dispose.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices(\_:)](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice(\_:\_:)](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice(\_:\_:)](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.

# MIDIDeviceListDispose (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Disposes of a device list, but not its devices.

## Declaration

```objectivec
extern OSStatus MIDIDeviceListDispose(MIDIDeviceListRef devList);
```

## Parameters

- `devList`: The device list of which you dispose.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.
