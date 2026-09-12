> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/isidentifying](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/isidentifying)

# isIdentifying

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where a value of true indicates that the object’s hardware is drawing attention to itself, typically by flashing or lighting up its front panel display. A value of false indicates that this function is turned off. This makes it easy for a user to associate the physical hardware with its representation in an application. Typically, this property is only supported by AudioHardwareDevices and AudioHardwareBoxes.

## Declaration

```swift
var isIdentifying: Bool { get throws }
```
