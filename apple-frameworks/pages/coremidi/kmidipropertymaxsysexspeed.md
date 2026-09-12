> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertymaxsysexspeed](https://developer.apple.com/documentation/coremidi/kmidipropertymaxsysexspeed)

# kMIDIPropertyMaxSysExSpeed (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.

## Declaration

```swift
let kMIDIPropertyMaxSysExSpeed: CFString
```

<a id="Discussion"></a>

## Discussion

The owning driver may set an integer value for this property.

## See Also

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyDriverDeviceEditorApp](kmidipropertydriverdeviceeditorapp.md): The full path to an app on the system that configures driver-owned devices.
- [kMIDIPropertyNameConfiguration](kmidipropertynameconfiguration.md): Deprecated. An XML representation of the device’s current patch, note, and control name values.

# kMIDIPropertyMaxSysExSpeed (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyMaxSysExSpeed;
```

<a id="Discussion"></a>

## Discussion

The owning driver may set an integer value for this property.

## See Also

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyDriverDeviceEditorApp](kmidipropertydriverdeviceeditorapp.md): The full path to an app on the system that configures driver-owned devices.
- [kMIDIPropertyNameConfiguration](kmidipropertynameconfiguration.md): Deprecated. An XML representation of the device’s current patch, note, and control name values.
