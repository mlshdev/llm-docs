> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/inputsafetyoffset](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/inputsafetyoffset)

# inputSafetyOffset

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An Int whose value indicates the number of frames behind the current hardware position that is safe to do IO.

## Declaration

```swift
var inputSafetyOffset: Int { get throws }
```
