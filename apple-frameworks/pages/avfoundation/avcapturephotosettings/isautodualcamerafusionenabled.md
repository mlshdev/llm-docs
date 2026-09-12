> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isautodualcamerafusionenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isautodualcamerafusionenabled)

# isAutoDualCameraFusionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 13.0) · iPadOS 10.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that specifies whether captures automatically combine data from a dual camera device.

## Declaration

```swift
var isAutoDualCameraFusionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default setting is [true](https://developer.apple.com/documentation/swift/true), unless you are capturing a RAW photo. (By definition, RAW photos are unprocessed, and image fusion involves processing the captured image).

When you enable this setting, a dual-camera device automatically combines samples from both cameras to produce a higher quality image. This property applies only when using the [builtInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) device type on supported devices.

> **Tip**

>  Image processing, including dual camera fusion, increases capture time. To capture photos at the highest possible speed (like in the built-in Camera app’s burst mode), set the [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md) and [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md) properties to [false](https://developer.apple.com/documentation/swift/false) and the [flashMode](flashmode.md) property to [AVCaptureDevice.FlashMode.off](../avcapturedevice/flashmode-swift.enum/off.md).

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [isAutoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isCameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [isAutoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# autoDualCameraFusionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 13.0) · iPadOS 10.2+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that specifies whether captures automatically combine data from a dual camera device.

## Declaration

```objectivec
@property (nonatomic, getter=isAutoDualCameraFusionEnabled) BOOL autoDualCameraFusionEnabled;
```

<a id="Discussion"></a>

## Discussion

The default setting is [true](https://developer.apple.com/documentation/swift/true), unless you are capturing a RAW photo. (By definition, RAW photos are unprocessed, and image fusion involves processing the captured image).

When you enable this setting, a dual-camera device automatically combines samples from both cameras to produce a higher quality image. This property applies only when using the [AVCaptureDeviceTypeBuiltInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) device type on supported devices.

> **Tip**

>  Image processing, including dual camera fusion, increases capture time. To capture photos at the highest possible speed (like in the built-in Camera app’s burst mode), set the [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md) and [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md) properties to [false](https://developer.apple.com/documentation/swift/false) and the [flashMode](flashmode.md) property to [AVCaptureFlashModeOff](../avcapturedevice/flashmode-swift.enum/off.md).

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [autoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [cameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [autoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
