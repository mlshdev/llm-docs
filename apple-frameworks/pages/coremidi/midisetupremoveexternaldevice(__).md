> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisetupremoveexternaldevice(_:)](https://developer.apple.com/documentation/coremidi/midisetupremoveexternaldevice(_:))

# MIDISetupRemoveExternalDevice(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Removes an external MIDI device from the current MIDI setup.

## Declaration

```swift
func MIDISetupRemoveExternalDevice(_ device: MIDIDeviceRef) -> OSStatus
```

## Parameters

- `device`: The device to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing External Devices

- [MIDIExternalDeviceCreate(\_:\_:\_:\_:)](midiexternaldevicecreate%28________%29.md): Creates an external MIDI device.
- [MIDISetupAddExternalDevice(\_:)](midisetupaddexternaldevice%28__%29.md): Adds an external MIDI device to the current MIDI setup.

# MIDISetupRemoveExternalDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Removes an external MIDI device from the current MIDI setup.

## Declaration

```objectivec
extern OSStatus MIDISetupRemoveExternalDevice(MIDIDeviceRef device);
```

## Parameters

- `device`: The device to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing External Devices

- [MIDIExternalDeviceCreate](midiexternaldevicecreate%28________%29.md): Creates an external MIDI device.
- [MIDISetupAddExternalDevice](midisetupaddexternaldevice%28__%29.md): Adds an external MIDI device to the current MIDI setup.
