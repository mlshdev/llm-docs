> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareaggregatedevice/subdevices

# subdevices

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareClocks representing all the devices and clocks, active or inactive, contained in the aggregate device. The order of the items in the array is significant and is used to determine the order of the streams of the aggregate device.

## Declaration

```swift
var subdevices: [AudioHardwareClock] { get throws }
```
