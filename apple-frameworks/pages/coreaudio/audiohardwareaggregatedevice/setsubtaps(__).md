> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareaggregatedevice/setsubtaps(_:)

# setSubtaps(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Set the subtaps property.

## Declaration

```swift
func setSubtaps(_ taps: [AudioHardwareTap]) throws
```

## Parameters

- `taps`: An array of AudioHardwareTaps representing all the taps to include in the aggregate device.
