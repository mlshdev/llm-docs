> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareclock/availablenominalsamplerates

# availableNominalSampleRates

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioValueRange structs that indicates the valid ranges for the nominal sample rate of the device.

## Declaration

```swift
var availableNominalSampleRates: [AudioValueRange] { get throws }
```
