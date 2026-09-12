> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvproresrawmetadata/colormatrix](https://developer.apple.com/documentation/corevideo/cvproresrawmetadata/colormatrix)

# colorMatrix

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

This is a 3x3 matrix which transforms linear RGB pixel values in the camera native color space to CIE 1931 XYZ values relative to the D65 illuminant, where the matrix entries are stored in row-major order.

## Declaration

```swift
var colorMatrix: InlineArray<9, Float32>
```
