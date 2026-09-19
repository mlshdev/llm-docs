> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareobject/baseclassid

# baseClassID

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioClassID that identifies the class from which the class of the AudioObject is derived. This value must always be one of the standard classes.

## Declaration

```swift
var baseClassID: AudioClassID { get throws }
```
