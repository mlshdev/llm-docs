> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareobject/owner

# owner

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioHardwareObject that identifies this object’s owner. Note that all AudioHardwareObject are owned by some other AudioHardwareObject. The only exception is the AudioSystemObject, for which the value of this property is nil.

## Declaration

```swift
var owner: AudioHardwareObject? { get throws }
```
