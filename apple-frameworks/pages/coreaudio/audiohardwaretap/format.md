> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaretap/format

# format

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

An AudioStreamBasicDescription that describes the current data format for the tap. This is the format of the data that will be accessible in any aggregate device that contains the tap.

## Declaration

```swift
var format: AudioStreamBasicDescription { get throws }
```
