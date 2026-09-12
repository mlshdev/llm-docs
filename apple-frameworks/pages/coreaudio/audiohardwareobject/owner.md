> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/owner](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/owner)

# owner

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioHardwareObject that identifies this object’s owner. Note that all AudioHardwareObject are owned by some other AudioHardwareObject. The only exception is the AudioSystemObject, for which the value of this property is nil.

## Declaration

```swift
var owner: AudioHardwareObject? { get throws }
```
