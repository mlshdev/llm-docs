> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareaggregatedevice/activesubdevices

# activeSubdevices

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareClocks for all the active subdevices in the aggregate device.

## Declaration

```swift
var activeSubdevices: [AudioHardwareClock] { get throws }
```
