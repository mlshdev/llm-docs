> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration/distortioncoefficients](https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration/distortioncoefficients)

# distortionCoefficients

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The first and second radial distortion coefficients (k1 and k2) used to correct the distortion that appeared as curved lines for straight lines and the first and second tangential distortion coefficients (p1 and p2) used to correct the distortion caused by a lens’s improper alignment of physical elements.

## Declaration

```swift
var distortionCoefficients: SIMD4<Float>
```
