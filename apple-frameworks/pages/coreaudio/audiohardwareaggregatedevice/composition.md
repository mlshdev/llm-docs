> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareaggregatedevice/composition

# composition

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Dictionary that describes the composition of the aggregate device. The keys for this CFDicitionary are defined in the AudioAggregateDevice Constants section of AudioHardware.h

## Declaration

```swift
var composition: [String : Any] { get throws }
```
