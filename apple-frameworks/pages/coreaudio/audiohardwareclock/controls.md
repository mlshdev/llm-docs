> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareclock/controls

# controls

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareControls that represent the controls of the device.

## Declaration

```swift
var controls: [AudioHardwareControl] { get throws }
```

<a id="discussion"></a>

## Discussion

If a notification is received for kAudioClockDevicePropertyControlList or kAudioObjectPropertyControlList, any cached AudioHardwareControl objects become invalid and need to be re-fetched.
