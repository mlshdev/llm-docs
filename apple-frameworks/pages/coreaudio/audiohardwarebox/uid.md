> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarebox/uid](https://developer.apple.com/documentation/coreaudio/audiohardwarebox/uid)

# uid

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A String that contains a persistent identifier for the box object. A box’s UID is persistent across boots. The content of the UID string is a black box and may contain information that is unique to a particular instance of an box’s hardware or unique to the CPU. Therefore they are not suitable for passing between CPUs or for identifying similar models of hardware.

## Declaration

```swift
var uid: String { get throws }
```
