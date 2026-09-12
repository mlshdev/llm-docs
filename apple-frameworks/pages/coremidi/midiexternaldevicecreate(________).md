> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiexternaldevicecreate(_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midiexternaldevicecreate(_:_:_:_:))

# MIDIExternalDeviceCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Creates an external MIDI device.

## Declaration

```swift
func MIDIExternalDeviceCreate(_ name: CFString, _ manufacturer: CFString, _ model: CFString, _ outDevice: UnsafeMutablePointer<MIDIDeviceRef>) -> OSStatus
```

## Parameters

- `name`: The name of the device to create.
- `manufacturer`: The name of the device’s manufacturer.
- `model`: The model name of the device.
- `outDevice`: On successful return, this points to the newly created device.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Non-drivers may call this function to create external devices.

## See Also

### Managing External Devices

- [MIDISetupAddExternalDevice(\_:)](midisetupaddexternaldevice%28__%29.md): Adds an external MIDI device to the current MIDI setup.
- [MIDISetupRemoveExternalDevice(\_:)](midisetupremoveexternaldevice%28__%29.md): Removes an external MIDI device from the current MIDI setup.

# MIDIExternalDeviceCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Creates an external MIDI device.

## Declaration

```objectivec
extern OSStatus MIDIExternalDeviceCreate(CFStringRef name, CFStringRef manufacturer, CFStringRef model, MIDIDeviceRef *outDevice);
```

## Parameters

- `name`: The name of the device to create.
- `manufacturer`: The name of the device’s manufacturer.
- `model`: The model name of the device.
- `outDevice`: On successful return, this points to the newly created device.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Non-drivers may call this function to create external devices.

## See Also

### Managing External Devices

- [MIDISetupAddExternalDevice](midisetupaddexternaldevice%28__%29.md): Adds an external MIDI device to the current MIDI setup.
- [MIDISetupRemoveExternalDevice](midisetupremoveexternaldevice%28__%29.md): Removes an external MIDI device from the current MIDI setup.
