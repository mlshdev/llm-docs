> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isgeometricdistortioncorrectionsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isgeometricdistortioncorrectionsupported)

# isGeometricDistortionCorrectionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether this device supports geometric distortion correction.

## Declaration

```swift
var isGeometricDistortionCorrectionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Some devices benefit from geometric distortion correction (GDC), such as devices with a very wide field of view. GDC lessens the fisheye effect at the outer edge of the frame at the cost of losing a small amount of the horizontal field of view. When you enable GDC, the device upscales the corrected image to the original image size.

## See Also

### Enabling geometric distortion correction

- [isGeometricDistortionCorrectionEnabled](isgeometricdistortioncorrectionenabled.md): A Boolean value that indicates whether geometric distortion correction is enabled for this device.

# geometricDistortionCorrectionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether this device supports geometric distortion correction.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isGeometricDistortionCorrectionSupported) BOOL geometricDistortionCorrectionSupported;
```

<a id="Discussion"></a>

## Discussion

Some devices benefit from geometric distortion correction (GDC), such as devices with a very wide field of view. GDC lessens the fisheye effect at the outer edge of the frame at the cost of losing a small amount of the horizontal field of view. When you enable GDC, the device upscales the corrected image to the original image size.

## See Also

### Enabling geometric distortion correction

- [geometricDistortionCorrectionEnabled](isgeometricdistortioncorrectionenabled.md): A Boolean value that indicates whether geometric distortion correction is enabled for this device.
