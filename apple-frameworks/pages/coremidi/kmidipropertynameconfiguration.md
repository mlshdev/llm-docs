> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertynameconfiguration](https://developer.apple.com/documentation/coremidi/kmidipropertynameconfiguration)

# kMIDIPropertyNameConfiguration (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ (deprecated in 13.0) · iPadOS 4.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · visionOS 1.0+ (deprecated in 1.0)

An XML representation of the device’s current patch, note, and control name values.

> Use [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md) instead.

## Declaration

```swift
let kMIDIPropertyNameConfiguration: CFString
```

## See Also

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyMaxSysExSpeed](kmidipropertymaxsysexspeed.md): The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.
- [kMIDIPropertyDriverDeviceEditorApp](kmidipropertydriverdeviceeditorapp.md): The full path to an app on the system that configures driver-owned devices.

# kMIDIPropertyNameConfiguration (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ (deprecated in 13.0) · iPadOS 4.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · visionOS 1.0+ (deprecated in 1.0)

An XML representation of the device’s current patch, note, and control name values.

> Use [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md) instead.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyNameConfiguration;
```

## See Also

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyMaxSysExSpeed](kmidipropertymaxsysexspeed.md): The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.
- [kMIDIPropertyDriverDeviceEditorApp](kmidipropertydriverdeviceeditorapp.md): The full path to an app on the system that configures driver-owned devices.
