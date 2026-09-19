> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarebox/devices

# devices

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareDevices that represent all the device objects that came out of the given box. Note that until a box is enabled, this list will be empty.

## Declaration

```swift
var devices: [AudioHardwareDevice] { get throws }
```
