> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarebox/clocks](https://developer.apple.com/documentation/coreaudio/audiohardwarebox/clocks)

# clocks

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareClocks that represent all the clock objects that came out of the given box. Note that until a box is enabled, this list will be empty.

## Declaration

```swift
var clocks: [AudioHardwareClock] { get throws }
```
