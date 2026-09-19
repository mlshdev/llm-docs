> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-swift.struct/camerasystembaseline

# cameraSystemBaseline

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the distance between centers of the lenses of the camera system that created the video.

## Declaration

```swift
var cameraSystemBaseline: UInt32?
```

<a id="discussion"></a>

## Discussion

The distance is in micrometers or thousandths of a millimeter. Can be nil if the value is unknown.

## See Also

### Modifying the configuration

- [cameraCalibrationDataLensCollection](cameracalibrationdatalenscollection.md): Specifies intrinsic and extrinsic parameters for single or multiple lenses.
- [disparityAdjustment](disparityadjustment.md): Specifies a relative shift of the left and right images, which changes the zero parallax plane.
- [horizontalFieldOfView](horizontalfieldofview.md): Specifies horizontal field of view in thousandths of a degree. Can be nil if the value is unknown.
