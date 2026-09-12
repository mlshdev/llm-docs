> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicedispose(_:)](https://developer.apple.com/documentation/coremidi/mididevicedispose(_:))

# MIDIDeviceDispose(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.3+ · visionOS 1.0+

Disposes of a MIDI device.

## Declaration

```swift
func MIDIDeviceDispose(_ device: MIDIDeviceRef) -> OSStatus
```

## Parameters

- `device`: The device to dispose.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers may call this function to dispose of device objects that they haven’t already added to the system using [MIDISetupAddDevice(\_:)](midisetupadddevice%28__%29.md). To remove a device after adding it to the session, call [MIDISetupRemoveDevice(\_:)](midisetupremovedevice%28__%29.md).

Nondrivers can’t call this function, and instead must call [MIDISetupAddDevice(\_:)](midisetupadddevice%28__%29.md) and [MIDISetupRemoveDevice(\_:)](midisetupremovedevice%28__%29.md).

## See Also

### Managing Device Lifecyle

- [MIDIDeviceCreate(\_:\_:\_:\_:\_:)](mididevicecreate%28__________%29.md): Creates a new device object that corresponds to the available hardware.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIDeviceDispose (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.3+ · visionOS 1.0+

Disposes of a MIDI device.

## Declaration

```objectivec
extern OSStatus MIDIDeviceDispose(MIDIDeviceRef device);
```

## Parameters

- `device`: The device to dispose.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Drivers may call this function to dispose of device objects that they haven’t already added to the system using [MIDISetupAddDevice](midisetupadddevice%28__%29.md). To remove a device after adding it to the session, call [MIDISetupRemoveDevice](midisetupremovedevice%28__%29.md).

Nondrivers can’t call this function, and instead must call [MIDISetupAddDevice](midisetupadddevice%28__%29.md) and [MIDISetupRemoveDevice](midisetupremovedevice%28__%29.md).

## See Also

### Managing Device Lifecyle

- [MIDIDeviceCreate](mididevicecreate%28__________%29.md): Creates a new device object that corresponds to the available hardware.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
