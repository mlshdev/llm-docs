> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/isrunninginaprocess

# isRunningInAProcess

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that the device is running in at least one process on the system and false means that it isn’t running at all.

## Declaration

```swift
var isRunningInAProcess: Bool { get throws }
```
