> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration/extrinsicorientationquaternion

# extrinsicOrientationQuaternion

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Camera’s orientation to a world or scene coordinate system. The orientation value is a unit quaternion (ix, iy, and iz) instead of the classical 3x3 matrix.

## Declaration

```swift
var extrinsicOrientationQuaternion: SIMD3<Float>
```
