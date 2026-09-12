> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcameracalibrationdata/lensdistortioncenter](https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/lensdistortioncenter)

# lensDistortionCenter (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The offset of the distortion center of the camera lens from the top-left corner of the image.

## Declaration

```swift
var lensDistortionCenter: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

Due to geometric distortions in the image, the center of the distortion may not be equal to the optical center (principal point) of the lens. When making an image rectilinear, use the distortion center rather than the optical center of the image.

## See Also

### Correcting for lens distortion

- [lensDistortionLookupTable](lensdistortionlookuptable.md): A map of floating-point values describing radial distortions imparted by the camera lens, for use in rectifying camera images.
- [inverseLensDistortionLookupTable](inverselensdistortionlookuptable.md): A map of floating-point values describing radial distortions for use in reapplying camera geometry to a rectified image.

# lensDistortionCenter (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The offset of the distortion center of the camera lens from the top-left corner of the image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGPoint lensDistortionCenter;
```

<a id="Discussion"></a>

## Discussion

Due to geometric distortions in the image, the center of the distortion may not be equal to the optical center (principal point) of the lens. When making an image rectilinear, use the distortion center rather than the optical center of the image.

## See Also

### Correcting for lens distortion

- [lensDistortionLookupTable](lensdistortionlookuptable.md): A map of floating-point values describing radial distortions imparted by the camera lens, for use in rectifying camera images.
- [inverseLensDistortionLookupTable](inverselensdistortionlookuptable.md): A map of floating-point values describing radial distortions for use in reapplying camera geometry to a rectified image.
