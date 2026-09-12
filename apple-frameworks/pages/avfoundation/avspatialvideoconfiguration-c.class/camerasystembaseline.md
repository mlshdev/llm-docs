> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avspatialvideoconfiguration-c.class/camerasystembaseline](https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-c.class/camerasystembaseline)

# cameraSystemBaseline

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the distance between centers of the lenses of the camera system that created the video.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSNumber * cameraSystemBaseline;
```

<a id="discussion"></a>

## Discussion

The distance is in micrometers or thousandths of a millimeter. Can be nil if the value is unknown.

## See Also

### Modifying the configuration

- [cameraCalibrationDataLensCollection](cameracalibrationdatalenscollection.md): Specifies intrinsic and extrinsic parameters for single or multiple lenses.
- [disparityAdjustment](disparityadjustment.md): Specifies a relative shift of the left and right images, which changes the zero parallax plane.
- [horizontalFieldOfView](horizontalfieldofview.md): Specifies horizontal field of view in thousandths of a degree. Can be nil if the value is unknown.
