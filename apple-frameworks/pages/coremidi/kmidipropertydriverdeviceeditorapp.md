> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/kmidipropertydriverdeviceeditorapp

# kMIDIPropertyDriverDeviceEditorApp (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.3+ · visionOS 1.0+

The full path to an app on the system that configures driver-owned devices.

## Declaration

```swift
let kMIDIPropertyDriverDeviceEditorApp: CFString
```

<a id="Discussion"></a>

## Discussion

Only drivers may set this property on their owned devices.

## See Also

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyMaxSysExSpeed](kmidipropertymaxsysexspeed.md): The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.
- [kMIDIPropertyNameConfiguration](kmidipropertynameconfiguration.md): Deprecated. An XML representation of the device’s current patch, note, and control name values.

# kMIDIPropertyDriverDeviceEditorApp (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.3+ · visionOS 1.0+

The full path to an app on the system that configures driver-owned devices.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyDriverDeviceEditorApp;
```

<a id="Discussion"></a>

## Discussion

Only drivers may set this property on their owned devices.

## See Also

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyMaxSysExSpeed](kmidipropertymaxsysexspeed.md): The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.
- [kMIDIPropertyNameConfiguration](kmidipropertynameconfiguration.md): Deprecated. An XML representation of the device’s current patch, note, and control name values.
