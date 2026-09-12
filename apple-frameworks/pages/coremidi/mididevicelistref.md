> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicelistref](https://developer.apple.com/documentation/coremidi/mididevicelistref)

# MIDIDeviceListRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A list of MIDI devices.

## Declaration

```swift
typealias MIDIDeviceListRef = MIDIObjectRef
```

<a id="Discussion"></a>

## Discussion

This object doesn’t own the devices, so disposing it doesn’t dispose the devices it references.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices(\_:)](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice(\_:\_:)](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice(\_:\_:)](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose(\_:)](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.

# MIDIDeviceListRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A list of MIDI devices.

## Declaration

```objectivec
typedef MIDIObjectRef MIDIDeviceListRef;
```

<a id="Discussion"></a>

## Discussion

This object doesn’t own the devices, so disposing it doesn’t dispose the devices it references.

## See Also

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
