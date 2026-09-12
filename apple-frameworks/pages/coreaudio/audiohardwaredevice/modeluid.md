> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/modeluid](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/modeluid)

# modelUID

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A String that contains a persistent identifier for the model of a device. The identifier is unique such that the identifier from two devices are equal if and only if the two devices are the exact same model from the same manufacturer. Further, the identifier has to be the same no matter on what machine the device appears.

## Declaration

```swift
var modelUID: String { get throws }
```
