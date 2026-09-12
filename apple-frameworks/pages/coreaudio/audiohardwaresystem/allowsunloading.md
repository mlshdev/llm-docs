> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/allowsunloading](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/allowsunloading)

# allowsUnloading

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that this process wants the HAL to unload itself after a period of inactivity where there are no IOProcs and no listeners registered with any object.

## Declaration

```swift
var allowsUnloading: Bool { get throws }
```
