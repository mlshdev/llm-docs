> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/setstereopanvalue(_:)

# setStereoPanValue(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the stereoPanValue property.

## Declaration

```swift
func setStereoPanValue(_ value: Float) throws
```

## Parameters

- `value`: A Float where 0.0 is full left, 1.0 is full right, and 0.5 is center.
