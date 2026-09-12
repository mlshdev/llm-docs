> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/maxphotodimensions](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/maxphotodimensions)

# maxPhotoDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The maximum resolution of the photo to capture.

## Declaration

```swift
var maxPhotoDimensions: CMVideoDimensions { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a value specifies a maximum for the captured image. The dimensions must match one of the dimensions returned by capture device’s active format’s [supportedMaxPhotoDimensions](../avcapturedevice/format/supportedmaxphotodimensions.md), and be equal to or smaller than the value of the photo outputs [maxPhotoDimensions](../avcapturephotooutput/maxphotodimensions.md).

This property defaults to the smallest dimensions returned by [supportedMaxPhotoDimensions](../avcapturedevice/format/supportedmaxphotodimensions.md).

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [isAutoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isCameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [isAutoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# maxPhotoDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The maximum resolution of the photo to capture.

## Declaration

```objectivec
@property (nonatomic) CMVideoDimensions maxPhotoDimensions;
```

<a id="Discussion"></a>

## Discussion

Setting a value specifies a maximum for the captured image. The dimensions must match one of the dimensions returned by capture device’s active format’s [supportedMaxPhotoDimensions](../avcapturedevice/format/supportedmaxphotodimensions.md), and be equal to or smaller than the value of the photo outputs [maxPhotoDimensions](../avcapturephotooutput/maxphotodimensions.md).

This property defaults to the smallest dimensions returned by [supportedMaxPhotoDimensions](../avcapturedevice/format/supportedmaxphotodimensions.md).

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [autoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [cameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [autoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
