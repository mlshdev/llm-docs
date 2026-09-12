> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcameracalibrationdata/lensdistortionlookuptable](https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/lensdistortionlookuptable)

# lensDistortionLookupTable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A map of floating-point values describing radial distortions imparted by the camera lens, for use in rectifying camera images.

## Declaration

```swift
var lensDistortionLookupTable: Data? { get }
```

<a id="Discussion"></a>

## Discussion

Images captured by a camera are geometrically warped by small imperfections in the lens. To project from the 2D image plane back into the 3D world, the images must be distortion corrected, or made rectilinear. Lens distortion is modeled using a one-dimensional lookup table of 32-bit float values evenly distributed along a radius from the center of the distortion to a corner, with each value representing a magnification of the radius. This model assumes symmetrical lens distortion.

When dealing with [AVDepthData](../avdepthdata.md) objects, the disparity/depth map representations are geometrically distorted to align with images produced by the camera.

## See Also

### Correcting for lens distortion

- [inverseLensDistortionLookupTable](inverselensdistortionlookuptable.md): A map of floating-point values describing radial distortions for use in reapplying camera geometry to a rectified image.
- [lensDistortionCenter](lensdistortioncenter.md): The offset of the distortion center of the camera lens from the top-left corner of the image.

# lensDistortionLookupTable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A map of floating-point values describing radial distortions imparted by the camera lens, for use in rectifying camera images.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * lensDistortionLookupTable;
```

<a id="Discussion"></a>

## Discussion

Images captured by a camera are geometrically warped by small imperfections in the lens. To project from the 2D image plane back into the 3D world, the images must be distortion corrected, or made rectilinear. Lens distortion is modeled using a one-dimensional lookup table of 32-bit float values evenly distributed along a radius from the center of the distortion to a corner, with each value representing a magnification of the radius. This model assumes symmetrical lens distortion.

When dealing with [AVDepthData](../avdepthdata.md) objects, the disparity/depth map representations are geometrically distorted to align with images produced by the camera.

## See Also

### Correcting for lens distortion

- [inverseLensDistortionLookupTable](inverselensdistortionlookuptable.md): A map of floating-point values describing radial distortions for use in reapplying camera geometry to a rectified image.
- [lensDistortionCenter](lensdistortioncenter.md): The offset of the distortion center of the camera lens from the top-left corner of the image.
