> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/isprocessoutputmuted](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/isprocessoutputmuted)

# isProcessOutputMuted

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that the current process’s output audio will be zeroed out by the system.

## Declaration

```swift
var isProcessOutputMuted: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

This property does not apply to aggregate devices, just real, physical devices.
