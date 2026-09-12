> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isautovirtualdevicefusionenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isautovirtualdevicefusionenabled)

# isAutoVirtualDeviceFusionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that specifies whether to use automatic virtual-device image fusion.

## Declaration

```swift
var isAutoVirtualDeviceFusionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md) and [isVirtualDeviceFusionSupported](../avcapturephotooutput/isvirtualdevicefusionsupported.md) are true, the framework may fuse constituent camera images of a virtual device to improve still image quality, depending on the current zoom factor, light levels, and focus position. You can determine whether virtual device fusion is enabled for a particular capture request by inspecting the [isVirtualDeviceFusionEnabled](../avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md) property of [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md).

The default value for this property is true, unless you’re capturing a RAW photo or a bracket using [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md).

> **Note**

>  When using the deprecated [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) interface with a virtual device, [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md) is always enabled, if supported.

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [isAutoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isCameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [isAutoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# autoVirtualDeviceFusionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that specifies whether to use automatic virtual-device image fusion.

## Declaration

```objectivec
@property (nonatomic, getter=isAutoVirtualDeviceFusionEnabled) BOOL autoVirtualDeviceFusionEnabled;
```

<a id="Discussion"></a>

## Discussion

When [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md) and [virtualDeviceFusionSupported](../avcapturephotooutput/isvirtualdevicefusionsupported.md) are true, the framework may fuse constituent camera images of a virtual device to improve still image quality, depending on the current zoom factor, light levels, and focus position. You can determine whether virtual device fusion is enabled for a particular capture request by inspecting the [virtualDeviceFusionEnabled](../avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md) property of [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md).

The default value for this property is true, unless you’re capturing a RAW photo or a bracket using [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md).

> **Note**

>  When using the deprecated [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) interface with a virtual device, [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md) is always enabled, if supported.

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [autoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [cameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [autoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
