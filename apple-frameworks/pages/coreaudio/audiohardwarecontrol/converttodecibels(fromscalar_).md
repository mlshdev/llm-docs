> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarecontrol/converttodecibels(fromscalar:)](https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol/converttodecibels(fromscalar:))

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
