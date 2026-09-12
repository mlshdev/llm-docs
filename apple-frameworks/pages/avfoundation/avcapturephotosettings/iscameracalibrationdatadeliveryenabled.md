> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/iscameracalibrationdatadeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/iscameracalibrationdatadeliveryenabled)

# isCameraCalibrationDataDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether a dual photo capture also delivers camera calibration data.

## Declaration

```swift
var isCameraCalibrationDataDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this setting is [false](https://developer.apple.com/documentation/swift/false) (the default), and the [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md) setting is [true](https://developer.apple.com/documentation/swift/true), dual photo capture doesn’t deliver additional data.

If you change this setting to [true](https://developer.apple.com/documentation/swift/true), the [AVCapturePhoto](../avcapturephoto.md) results from a dual photo capture include [AVCameraCalibrationData](../avcameracalibrationdata.md) objects that describe the imaging parameters for each camera. This data can be useful for performing computer vision tasks on the resulting images.

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [isAutoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isAutoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# cameraCalibrationDataDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether a dual photo capture also delivers camera calibration data.

## Declaration

```objectivec
@property (nonatomic, getter=isCameraCalibrationDataDeliveryEnabled) BOOL cameraCalibrationDataDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

When this setting is [false](https://developer.apple.com/documentation/swift/false) (the default), and the [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md) setting is [true](https://developer.apple.com/documentation/swift/true), dual photo capture doesn’t deliver additional data.

If you change this setting to [true](https://developer.apple.com/documentation/swift/true), the [AVCapturePhoto](../avcapturephoto.md) results from a dual photo capture include [AVCameraCalibrationData](../avcameracalibrationdata.md) objects that describe the imaging parameters for each camera. This data can be useful for performing computer vision tasks on the resulting images.

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [autoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [autoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
