> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/whitebalancechromaticityvalues/init(x:y:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/whitebalancechromaticityvalues/init(x:y:))

# init(x:y:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a structure for white balance chromaticity values from its x and y coordinates.

## Declaration

```swift
init(x: Float, y: Float)
```

## Parameters

- `x`: The x-coordinate in the CIE 1931 chromaticity diagram, which spans the range between `0` and `0.8`.
- `y`: The y-coordinate in the CIE 1931 chromaticity diagram, which spans the range between `0` and `0.85`.

## See Also

### Creating chromaticity values

- [init()](init%28%29.md): Creates a structure for white balance chromaticity values.
