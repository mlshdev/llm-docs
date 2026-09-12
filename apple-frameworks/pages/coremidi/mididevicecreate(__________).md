> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicecreate(_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/mididevicecreate(_:_:_:_:_:))

# MIDIDeviceCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Creates a new device object that corresponds to the available hardware.

## Declaration

```swift
func MIDIDeviceCreate(_ owner: MIDIDriverRef?, _ name: CFString, _ manufacturer: CFString, _ model: CFString, _ outDevice: UnsafeMutablePointer<MIDIDeviceRef>) -> OSStatus
```

## Parameters

- `owner`: The driver that creates the device, or `NULL` for a non-driver.
- `name`: The name of the new device.
- `manufacturer`: The name of the device’s manufacturer.
- `model`: The name of the model of the device.
- `outDevice`: On successful return, points to the newly created device.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Nondrivers may call this function to create external devices.

## See Also

### Managing Device Lifecyle

- [MIDIDeviceDispose(\_:)](mididevicedispose%28__%29.md): Disposes of a MIDI device.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

# MIDIDeviceCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Creates a new device object that corresponds to the available hardware.

## Declaration

```objectivec
extern OSStatus MIDIDeviceCreate(MIDIDriverRef owner, CFStringRef name, CFStringRef manufacturer, CFStringRef model, MIDIDeviceRef *outDevice);
```

## Parameters

- `owner`: The driver that creates the device, or `NULL` for a non-driver.
- `name`: The name of the new device.
- `manufacturer`: The name of the device’s manufacturer.
- `model`: The name of the model of the device.
- `outDevice`: On successful return, points to the newly created device.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Nondrivers may call this function to create external devices.

## See Also

### Managing Device Lifecyle

- [MIDIDeviceDispose](mididevicedispose%28__%29.md): Disposes of a MIDI device.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.
