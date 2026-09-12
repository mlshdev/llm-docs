> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarestream/physicalformat](https://developer.apple.com/documentation/coreaudio/audiohardwarestream/physicalformat)

# physicalFormat

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioStreamBasicDescription that describes the current data format for the stream. The physical format refers to the data format in which the hardware for the owning device performs its IO transactions.

## Declaration

```swift
var physicalFormat: AudioStreamBasicDescription { get throws }
```
