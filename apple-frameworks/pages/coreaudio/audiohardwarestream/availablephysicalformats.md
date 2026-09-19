> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarestream/availablephysicalformats

# availablePhysicalFormats

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioStreamRangedDescriptions that describe the available data formats for the stream. The physical format refers to the data format in which the hardware for the owning device performs its IO transactions.

## Declaration

```swift
var availablePhysicalFormats: [AudioStreamRangedDescription] { get throws }
```
