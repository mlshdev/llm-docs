> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avspatialvideoconfiguration-c.class/disparityadjustment](https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-c.class/disparityadjustment)

# disparityAdjustment

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies a relative shift of the left and right images, which changes the zero parallax plane.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSNumber * disparityAdjustment;
```

<a id="discussion"></a>

## Discussion

The value is in normalized image space and measured over the range of -10000 to 10000 mapping to the uniform range \[-1.0…1.0\]. The interval of 0.0 to 1.0 or 0 to 10000 maps onto the stereo eye view image width. The negative interval 0.0 to -1.0 or 0 to -10000 similarly map onto the stereo eye view image width. Can be nil if the value is unknown.

## See Also

### Modifying the configuration

- [cameraCalibrationDataLensCollection](cameracalibrationdatalenscollection.md): Specifies intrinsic and extrinsic parameters for single or multiple lenses.
- [cameraSystemBaseline](camerasystembaseline.md): Specifies the distance between centers of the lenses of the camera system that created the video.
- [horizontalFieldOfView](horizontalfieldofview.md): Specifies horizontal field of view in thousandths of a degree. Can be nil if the value is unknown.
