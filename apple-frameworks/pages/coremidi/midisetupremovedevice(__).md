> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisetupremovedevice(_:)](https://developer.apple.com/documentation/coremidi/midisetupremovedevice(_:))

# MIDISetupRemoveDevice(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Removes a driver-owned MIDI device from the current MIDI setup.

## Declaration

```swift
func MIDISetupRemoveDevice(_ device: MIDIDeviceRef) -> OSStatus
```

## Parameters

- `device`: The device to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Typically, only a studio-configuration editor calls this function to remove a device that’s offline and which the user has specified as permanently missing. It’s a good practice to have drivers set the deviceʼs [kMIDIPropertyOffline](kmidipropertyoffline.md) to 1, instead of removing the device from the setup, so if the device reappears later, the system preserves the deviceʼs property state.

## See Also

### Managing Devices

- [MIDISetupAddDevice(\_:)](midisetupadddevice%28__%29.md): Adds a driver-owned MIDI device to the current MIDI setup.

# MIDISetupRemoveDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Removes a driver-owned MIDI device from the current MIDI setup.

## Declaration

```objectivec
extern OSStatus MIDISetupRemoveDevice(MIDIDeviceRef device);
```

## Parameters

- `device`: The device to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Typically, only a studio-configuration editor calls this function to remove a device that’s offline and which the user has specified as permanently missing. It’s a good practice to have drivers set the deviceʼs [kMIDIPropertyOffline](kmidipropertyoffline.md) to 1, instead of removing the device from the setup, so if the device reappears later, the system preserves the deviceʼs property state.

## See Also

### Managing Devices

- [MIDISetupAddDevice](midisetupadddevice%28__%29.md): Adds a driver-owned MIDI device to the current MIDI setup.
