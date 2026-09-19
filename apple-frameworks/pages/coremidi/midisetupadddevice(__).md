> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midisetupadddevice(_:)

# MIDISetupAddDevice(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Adds a driver-owned MIDI device to the current MIDI setup.

## Declaration

```swift
func MIDISetupAddDevice(_ device: MIDIDeviceRef) -> OSStatus
```

## Parameters

- `device`: The device to add.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Only MIDI drivers may call this function.

## See Also

### Managing Devices

- [MIDISetupRemoveDevice(\_:)](midisetupremovedevice%28__%29.md): Removes a driver-owned MIDI device from the current MIDI setup.

# MIDISetupAddDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Adds a driver-owned MIDI device to the current MIDI setup.

## Declaration

```objectivec
extern OSStatus MIDISetupAddDevice(MIDIDeviceRef device);
```

## Parameters

- `device`: The device to add.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Only MIDI drivers may call this function.

## See Also

### Managing Devices

- [MIDISetupRemoveDevice](midisetupremovedevice%28__%29.md): Removes a driver-owned MIDI device from the current MIDI setup.
