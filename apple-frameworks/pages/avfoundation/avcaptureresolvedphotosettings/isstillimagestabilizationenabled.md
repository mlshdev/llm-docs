> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/isstillimagestabilizationenabled](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/isstillimagestabilizationenabled)

# isStillImageStabilizationEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 13.0)

A Boolean value indicating whether this capture uses image stabilization.

> Use [photoProcessingTimeRange](photoprocessingtimerange.md) instead.

## Declaration

```swift
var isStillImageStabilizationEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the [AVCapturePhotoSettings](../avcapturephotosettings.md) property [isAutoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md).

When this value is [true](https://developer.apple.com/documentation/swift/true), the device automatically applies stabilization in low-light conditions to counteract hand shake. Automatic stabilization always includes digital image stabilization, and may also include optical lens stabilization, based on the current device.

If you specify automatic stabilization when requesting a capture, the device automatically chooses whether to use image stabilization based on the scene contents at the moment of capture. Therefore, you don’t know whether the system uses stabilization until right before the moment of capture. When the photo output calls your [photoOutput(\_:willBeginCaptureFor:)](../avcapturephotocapturedelegate/photooutput%28__willbegincapturefor_%29.md) method (or other delegate methods that occur later in the capture process), you can use this property to determine whether stabilization is active.

## See Also

### Examining photo capture settings

- [isFlashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [isRedEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [isVirtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [isDualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.

# stillImageStabilizationEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · tvOS 17.0+ (deprecated in 13.0)

A Boolean value indicating whether this capture uses image stabilization.

> Use [photoProcessingTimeRange](photoprocessingtimerange.md) instead.

## Declaration

```objectivec
@property (readonly, getter=isStillImageStabilizationEnabled) BOOL stillImageStabilizationEnabled;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the [AVCapturePhotoSettings](../avcapturephotosettings.md) property [autoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md).

When this value is [true](https://developer.apple.com/documentation/swift/true), the device automatically applies stabilization in low-light conditions to counteract hand shake. Automatic stabilization always includes digital image stabilization, and may also include optical lens stabilization, based on the current device.

If you specify automatic stabilization when requesting a capture, the device automatically chooses whether to use image stabilization based on the scene contents at the moment of capture. Therefore, you don’t know whether the system uses stabilization until right before the moment of capture. When the photo output calls your [captureOutput:willBeginCaptureForResolvedSettings:](../avcapturephotocapturedelegate/photooutput%28__willbegincapturefor_%29.md) method (or other delegate methods that occur later in the capture process), you can use this property to determine whether stabilization is active.

## See Also

### Examining photo capture settings

- [flashEnabled](isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [redEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [virtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [dualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.
