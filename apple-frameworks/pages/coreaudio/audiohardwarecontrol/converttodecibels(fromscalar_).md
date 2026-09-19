> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/converttodecibels(fromscalar:)

# convertToDecibels(fromScalar:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Convert a volume scalar value to the equivalent dB value.

## Declaration

```swift
func convertToDecibels(fromScalar scalar: Float) throws -> Float
```

## Parameters

- `scalar`: A Float representing the volume scalar value to convert.

<a id="return-value"></a>

## Return Value

A Float representing the equivalent dB value.
