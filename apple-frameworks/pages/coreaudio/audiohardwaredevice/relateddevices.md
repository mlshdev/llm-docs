> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/relateddevices

# relatedDevices

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareDevices for devices related to the device. For IOAudio-based devices, devices are related if they share the same IOAudioDevice object.

## Declaration

```swift
var relatedDevices: [AudioHardwareDevice] { get throws }
```
