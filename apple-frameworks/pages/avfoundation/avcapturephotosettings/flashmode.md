> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/flashmode](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/flashmode)

# flashMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

A setting for whether to fire the flash when capturing photos.

## Declaration

```swift
var flashMode: AVCaptureDevice.FlashMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this setting is [AVCaptureDevice.FlashMode.off](../avcapturedevice/flashmode-swift.enum/off.md).

> **Note**

>  This setting supersedes the deprecated [AVCaptureDevice](../avcapturedevice.md) [flashMode](../avcapturedevice/flashmode-swift.property.md) property. When using the [AVCapturePhotoOutput](../avcapturephotooutput.md) class, the capture device’s flash mode doesn’t apply—use this property on your photo settings object instead.

Assuming a static scene, using the [AVCaptureDevice.FlashMode.auto](../avcapturedevice/flashmode-swift.enum/auto.md) setting is equivalent to testing the [AVCapturePhotoOutput](../avcapturephotooutput.md) [isFlashScene](../avcapturephotooutput/isflashscene.md) property (which indicates whether flash is recommended for the scene currently visible to the camera), and then setting the [flashMode](flashmode.md) property of your photo settings output accordingly before requesting a capture. However, the visible scene can change between when you request a capture and when the camera hardware captures an image—the automatic setting ensures that the flash is enabled or disabled appropriately at the moment of capture. When the capture occurs, your [AVCapturePhotoCaptureDelegate](../avcapturephotocapturedelegate.md) methods receive an [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) object whose [isFlashEnabled](../avcaptureresolvedphotosettings/isflashenabled.md) property indicates which flash mode was used for that capture.

> **Note**

>  When the device becomes very hot, the flash becomes temporarily unavailable until the device cools down (see the [AVCaptureDevice](../avcapturedevice.md) [isFlashAvailable](../avcapturedevice/isflashavailable.md) property). While the flash is unavailable, a photo output’s [supportedFlashModes](../avcapturephotooutput/supportedflashmodes-4u69s.md) property still reports the [AVCaptureDevice.FlashMode.on](../avcapturedevice/flashmode-swift.enum/on.md) and [AVCaptureDevice.FlashMode.auto](../avcapturedevice/flashmode-swift.enum/auto.md) options as available, so you can still enable the flash in your photo settings even when the flash is temporarily unavailable.
>
> When the photo output calls your [AVCapturePhotoCaptureDelegate](../avcapturephotocapturedelegate.md) methods, check the [isFlashEnabled](../avcaptureresolvedphotosettings/isflashenabled.md) property of the provided [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) to verify whether the flash is in use.

When specifying a flash mode, the following requirements apply:

- The specified mode must be present in the photo output’s [supportedFlashModes](../avcapturephotooutput/supportedflashmodes-4u69s.md) array.
- You may not enable image stabilization if the flash mode is [AVCaptureDevice.FlashMode.on](../avcapturedevice/flashmode-swift.enum/on.md). (Enabling the flash takes priority over the [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md) setting).

The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings don’t meet these requirements, that method raises an exception.

## See Also

### Configuring photo settings

- [isAutoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isCameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [isAutoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# flashMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

A setting for whether to fire the flash when capturing photos.

## Declaration

```objectivec
@property (nonatomic) AVCaptureFlashMode flashMode;
```

<a id="Discussion"></a>

## Discussion

The default value for this setting is [AVCaptureFlashModeOff](../avcapturedevice/flashmode-swift.enum/off.md).

> **Note**

>  This setting supersedes the deprecated [AVCaptureDevice](../avcapturedevice.md) [flashMode](../avcapturedevice/flashmode-swift.property.md) property. When using the [AVCapturePhotoOutput](../avcapturephotooutput.md) class, the capture device’s flash mode doesn’t apply—use this property on your photo settings object instead.

Assuming a static scene, using the [AVCaptureFlashModeAuto](../avcapturedevice/flashmode-swift.enum/auto.md) setting is equivalent to testing the [AVCapturePhotoOutput](../avcapturephotooutput.md) [isFlashScene](../avcapturephotooutput/isflashscene.md) property (which indicates whether flash is recommended for the scene currently visible to the camera), and then setting the [flashMode](flashmode.md) property of your photo settings output accordingly before requesting a capture. However, the visible scene can change between when you request a capture and when the camera hardware captures an image—the automatic setting ensures that the flash is enabled or disabled appropriately at the moment of capture. When the capture occurs, your [AVCapturePhotoCaptureDelegate](../avcapturephotocapturedelegate.md) methods receive an [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) object whose [flashEnabled](../avcaptureresolvedphotosettings/isflashenabled.md) property indicates which flash mode was used for that capture.

> **Note**

>  When the device becomes very hot, the flash becomes temporarily unavailable until the device cools down (see the [AVCaptureDevice](../avcapturedevice.md) [flashAvailable](../avcapturedevice/isflashavailable.md) property). While the flash is unavailable, a photo output’s [supportedFlashModes](../avcapturephotooutput/supportedflashmodes-4u69s.md) property still reports the [AVCaptureFlashModeOn](../avcapturedevice/flashmode-swift.enum/on.md) and [AVCaptureFlashModeAuto](../avcapturedevice/flashmode-swift.enum/auto.md) options as available, so you can still enable the flash in your photo settings even when the flash is temporarily unavailable.
>
> When the photo output calls your [AVCapturePhotoCaptureDelegate](../avcapturephotocapturedelegate.md) methods, check the [flashEnabled](../avcaptureresolvedphotosettings/isflashenabled.md) property of the provided [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) to verify whether the flash is in use.

When specifying a flash mode, the following requirements apply:

- The specified mode must be present in the photo output’s [supportedFlashModes](../avcapturephotooutput/supportedflashmodes-4u69s.md) array.
- You may not enable image stabilization if the flash mode is [AVCaptureFlashModeOn](../avcapturedevice/flashmode-swift.enum/on.md). (Enabling the flash takes priority over the [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md) setting).

The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings don’t meet these requirements, that method raises an exception.

## See Also

### Configuring photo settings

- [autoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [cameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [autoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
