> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareclock/controls](https://developer.apple.com/documentation/coreaudio/audiohardwareclock/controls)

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
