> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/outputsafetyoffset](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/outputsafetyoffset)

# outputSafetyOffset

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An Int whose value indicates the number for frames ahead of the current hardware position that is safe to do IO.

## Declaration

```swift
var outputSafetyOffset: Int { get throws }
```
