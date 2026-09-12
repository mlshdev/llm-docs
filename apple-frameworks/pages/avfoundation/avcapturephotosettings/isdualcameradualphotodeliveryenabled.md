> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isdualcameradualphotodeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isdualcameradualphotodeliveryenabled)

# isDualCameraDualPhotoDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that determines whether a dual camera device delivers images from both cameras.

## Declaration

```swift
var isDualCameraDualPhotoDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false) (the default), and the photo output is configured with a capture device of the [builtInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) type, the photo output delivers a single main photo image for each capture. (The device determines how to produce that image from one or both cameras).

If you change this setting to [true](https://developer.apple.com/documentation/swift/true), your delegate’s [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method fires at least twice for each main image—once for the telephoto image and again for the wide-angle image. Setting this property to true when not using a dual-camera device raises an exception.

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
- [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# dualCameraDualPhotoDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that determines whether a dual camera device delivers images from both cameras.

## Declaration

```objectivec
@property (nonatomic, getter=isDualCameraDualPhotoDeliveryEnabled) BOOL dualCameraDualPhotoDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false) (the default), and the photo output is configured with a capture device of the [AVCaptureDeviceTypeBuiltInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) type, the photo output delivers a single main photo image for each capture. (The device determines how to produce that image from one or both cameras).

If you change this setting to [true](https://developer.apple.com/documentation/swift/true), your delegate’s [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method fires at least twice for each main image—once for the telephoto image and again for the wide-angle image. Setting this property to true when not using a dual-camera device raises an exception.

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
- [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
