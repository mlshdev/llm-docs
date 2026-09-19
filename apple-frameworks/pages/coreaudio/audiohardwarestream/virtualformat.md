> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarestream/virtualformat

# virtualFormat

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioStreamBasicDescription that describes the current data format for the stream. The virtual format refers to the data format in which all IOProcs for the owning device will perform IO transactions.

## Declaration

```swift
var virtualFormat: AudioStreamBasicDescription { get throws }
```
