> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/unload()](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/unload())

# unload()

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Terminates all IO on all devices within the process and releases all resources capable of being released. This essentially returns the HAL to its uninitialized state.

## Declaration

```swift
func unload() throws
```
