> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/isdualcamerafusionenabled](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/isdualcamerafusionenabled)

# isDualCameraFusionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 13.0) · iPadOS 10.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether this capture combines image data from a dual camera.

> Use [isVirtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md) instead.

## Declaration

```swift
var isDualCameraFusionEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the [AVCapturePhotoSettings](../avcapturephotosettings.md) property [isAutoDualCameraFusionEnabled](../avcapturephotosettings/isautodualcamerafusionenabled.md).

When this value is [true](https://developer.apple.com/documentation/swift/true), a dual-camera device automatically combines samples from both cameras to produce a higher quality image. This property applies only when using the [builtInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) device type on supported devices.

If you specify automatic image fusion when requesting a capture, the device automatically chooses whether to use image fusion based on the scene conditions at the moment of capture. Therefore, you don’t know whether the system uses image fusion until right before the moment of capture. When the photo output calls your [photoOutput(\_:willBeginCaptureFor:)](../avcapturephotocapturedelegate/photooutput%28__willbegincapturefor_%29.md) method (or other delegate methods that occur later in the capture process), you can use this property to determine whether image fusion is active.

## See Also

### Examining photo capture settings

- [isFlashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [isRedEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [isVirtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [isStillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.

# dualCameraFusionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 13.0) · iPadOS 10.2+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value indicating whether this capture combines image data from a dual camera.

> Use [virtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md) instead.

## Declaration

```objectivec
@property (readonly, getter=isDualCameraFusionEnabled) BOOL dualCameraFusionEnabled;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the [AVCapturePhotoSettings](../avcapturephotosettings.md) property [autoDualCameraFusionEnabled](../avcapturephotosettings/isautodualcamerafusionenabled.md).

When this value is [true](https://developer.apple.com/documentation/swift/true), a dual-camera device automatically combines samples from both cameras to produce a higher quality image. This property applies only when using the [AVCaptureDeviceTypeBuiltInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) device type on supported devices.

If you specify automatic image fusion when requesting a capture, the device automatically chooses whether to use image fusion based on the scene conditions at the moment of capture. Therefore, you don’t know whether the system uses image fusion until right before the moment of capture. When the photo output calls your [captureOutput:willBeginCaptureForResolvedSettings:](../avcapturephotocapturedelegate/photooutput%28__willbegincapturefor_%29.md) method (or other delegate methods that occur later in the capture process), you can use this property to determine whether image fusion is active.

## See Also

### Examining photo capture settings

- [flashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [redEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [virtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [stillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
