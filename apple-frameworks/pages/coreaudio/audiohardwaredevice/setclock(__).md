> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/setclock(_:)

# setClock(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the clock property.

## Declaration

```swift
func setClock(_ clock: AudioHardwareClock) throws
```

## Parameters

- `clock`: The AudioHardwareClock to use as the main time base of the device.
