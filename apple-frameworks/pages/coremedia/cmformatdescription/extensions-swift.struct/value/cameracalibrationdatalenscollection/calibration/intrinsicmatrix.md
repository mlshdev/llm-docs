> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration/intrinsicmatrix](https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration/intrinsicmatrix)

# intrinsicMatrix

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The 3x3 camera intrinsic matrix for camera calibration.

## Declaration

```swift
var intrinsicMatrix: simd_float3x3
```

<a id="discussion"></a>

## Discussion

It has the following contents: | fx | s  | cx | |  0 | fy | cy | |  0 |  0 |  1 | fx and fy are the focal length in pixels. For square pixels, they will have the same value. cx and cy are the coordinates of the principal point. The origin is the upper left of the frame. s is an optional skew factor.
