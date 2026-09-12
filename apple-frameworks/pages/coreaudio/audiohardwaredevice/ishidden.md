> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/ishidden](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/ishidden)

# isHidden

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that the device is not included in the normal list of devices provided by the system nor can it be the default device. Hidden devices can only be obtained from the system by UID.

## Declaration

```swift
var isHidden: Bool { get throws }
```
