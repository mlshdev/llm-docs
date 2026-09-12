> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/isflashenabled](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/isflashenabled)

# isFlashEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the camera flash fires for this capture.

## Declaration

```swift
var isFlashEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the [AVCapturePhotoSettings](../avcapturephotosettings.md) property [flashMode](../avcapturephotosettings/flashmode.md).

If you specify a flash mode of [AVCaptureDevice.FlashMode.auto](../avcapturedevice/flashmode-swift.enum/auto.md) when requesting a capture, the device automatically chooses whether to use the flash based on the scene contents at the moment of capture. Therefore, you don’t know whether the flash will fire until right before the moment of capture. When the photo output calls your [photoOutput(\_:willBeginCaptureFor:)](../avcapturephotocapturedelegate/photooutput%28__willbegincapturefor_%29.md) method (or other delegate methods that occur later in the capture process), you can use this property to determine whether a capture uses the flash.

> **Note**

>  The flash can also become temporarily disabled if the device is too hot. In this case, the flash will not fire even if you specify a flash mode of [AVCaptureDevice.FlashMode.on](../avcapturedevice/flashmode-swift.enum/on.md), and the resolved photo settings object passed to your [AVCapturePhotoCaptureDelegate](../avcapturephotocapturedelegate.md) method has a [isFlashEnabled](isflashenabled.md) value of [false](https://developer.apple.com/documentation/swift/false). To detect when the flash is temporarily disabled, key-value observe the [isFlashAvailable](../avcapturedevice/isflashavailable.md) property.

## See Also

### Examining photo capture settings

- [isRedEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [isVirtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [isStillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [isDualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.

# flashEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the camera flash fires for this capture.

## Declaration

```objectivec
@property (readonly, getter=isFlashEnabled) BOOL flashEnabled;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the [AVCapturePhotoSettings](../avcapturephotosettings.md) property [flashMode](../avcapturephotosettings/flashmode.md).

If you specify a flash mode of [AVCaptureFlashModeAuto](../avcapturedevice/flashmode-swift.enum/auto.md) when requesting a capture, the device automatically chooses whether to use the flash based on the scene contents at the moment of capture. Therefore, you don’t know whether the flash will fire until right before the moment of capture. When the photo output calls your [captureOutput:willBeginCaptureForResolvedSettings:](../avcapturephotocapturedelegate/photooutput%28__willbegincapturefor_%29.md) method (or other delegate methods that occur later in the capture process), you can use this property to determine whether a capture uses the flash.

> **Note**

>  The flash can also become temporarily disabled if the device is too hot. In this case, the flash will not fire even if you specify a flash mode of [AVCaptureFlashModeOn](../avcapturedevice/flashmode-swift.enum/on.md), and the resolved photo settings object passed to your [AVCapturePhotoCaptureDelegate](../avcapturephotocapturedelegate.md) method has a [flashEnabled](isflashenabled.md) value of [false](https://developer.apple.com/documentation/swift/false). To detect when the flash is temporarily disabled, key-value observe the [flashAvailable](../avcapturedevice/isflashavailable.md) property.

## See Also

### Examining photo capture settings

- [redEyeReductionEnabled](isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [virtualDeviceFusionEnabled](isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [stillImageStabilizationEnabled](isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [dualCameraFusionEnabled](isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.
