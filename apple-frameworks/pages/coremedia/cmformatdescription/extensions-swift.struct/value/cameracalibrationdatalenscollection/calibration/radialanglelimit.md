> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration/radialanglelimit

# radialAngleLimit

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Outer limit of the calibration validity in degrees of angle eccentric from the optical axis.

## Declaration

```swift
var radialAngleLimit: Float
```

<a id="discussion"></a>

## Discussion

The value is linked to radial distortion corrections with k1 and k2.
