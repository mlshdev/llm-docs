> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarestream/availablephysicalformats](https://developer.apple.com/documentation/coreaudio/audiohardwarestream/availablephysicalformats)

# availablePhysicalFormats

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioStreamRangedDescriptions that describe the available data formats for the stream. The physical format refers to the data format in which the hardware for the owning device performs its IO transactions.

## Declaration

```swift
var availablePhysicalFormats: [AudioStreamRangedDescription] { get throws }
```
