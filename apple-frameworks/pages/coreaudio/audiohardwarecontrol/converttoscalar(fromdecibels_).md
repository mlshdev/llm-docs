> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/converttoscalar(fromdecibels:)

# convertToScalar(fromDecibels:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Convert a volume dB value to the equivalent scalar value.

## Declaration

```swift
func convertToScalar(fromDecibels decibels: Float) throws -> Float
```

## Parameters

- `decibels`: A Float representing the volume dB value to convert.

<a id="return-value"></a>

## Return Value

A Float representing the equivalent scalar value.
