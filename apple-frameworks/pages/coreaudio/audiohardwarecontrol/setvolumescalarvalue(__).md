> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/setvolumescalarvalue(_:)

# setVolumeScalarValue(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the volumeScalarValue property.

## Declaration

```swift
func setVolumeScalarValue(_ value: Float) throws
```

## Parameters

- `value`: A Float that represents the value of the volume control. The range is between 0.0 and 1.0 (inclusive).
