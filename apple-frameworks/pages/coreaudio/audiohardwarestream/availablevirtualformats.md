> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarestream/availablevirtualformats](https://developer.apple.com/documentation/coreaudio/audiohardwarestream/availablevirtualformats)

# availableVirtualFormats

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioStreamRangedDescriptions that describe the available data formats for the stream. The virtual format refers to the data format in which all IOProcs for the owning device will perform IO transactions.

## Declaration

```swift
var availableVirtualFormats: [AudioStreamRangedDescription] { get throws }
```
