> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/isprocessinputmuted

# isProcessInputMuted

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that the current process’s input audio will be zeroed out by the system.

## Declaration

```swift
var isProcessInputMuted: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

This property does not apply to aggregate devices, just real, physical devices.
