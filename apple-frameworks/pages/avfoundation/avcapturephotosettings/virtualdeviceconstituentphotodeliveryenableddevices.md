> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/virtualdeviceconstituentphotodeliveryenableddevices](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/virtualdeviceconstituentphotodeliveryenableddevices)

# virtualDeviceConstituentPhotoDeliveryEnabledDevices (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The constituent devices for which the virtual device should deliver photos.

## Declaration

```swift
var virtualDeviceConstituentPhotoDeliveryEnabledDevices: [AVCaptureDevice] { get set }
```

<a id="Discussion"></a>

## Discussion

You can opt in to constituent-device photo delivery by setting this property to any subset of the devices in the virtual device’s [constituentDevices](../avcapturedevice/constituentdevices.md) array. The framework calls your [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md)callback once for each of the devices you include in the array.

You may only set this property to a non-`nil` array if you’ve set your photo output’s [isVirtualDeviceConstituentPhotoDeliveryEnabled](../avcapturephotooutput/isvirtualdeviceconstituentphotodeliveryenabled.md) property to [true](https://developer.apple.com/documentation/swift/true), and your delegate implements the [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method.

The default value of this property is an empty array.

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [isAutoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isCameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [isAutoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [isAutoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [isDualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

# virtualDeviceConstituentPhotoDeliveryEnabledDevices (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The constituent devices for which the virtual device should deliver photos.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVCaptureDevice *> * virtualDeviceConstituentPhotoDeliveryEnabledDevices;
```

<a id="Discussion"></a>

## Discussion

You can opt in to constituent-device photo delivery by setting this property to any subset of the devices in the virtual device’s [constituentDevices](../avcapturedevice/constituentdevices.md) array. The framework calls your [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md)callback once for each of the devices you include in the array.

You may only set this property to a non-`nil` array if you’ve set your photo output’s [virtualDeviceConstituentPhotoDeliveryEnabled](../avcapturephotooutput/isvirtualdeviceconstituentphotodeliveryenabled.md) property to [true](https://developer.apple.com/documentation/swift/true), and your delegate implements the [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method.

The default value of this property is an empty array.

## See Also

### Configuring photo settings

- [flashMode](flashmode.md): A setting for whether to fire the flash when capturing photos.
- [autoRedEyeReductionEnabled](isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [cameraCalibrationDataDeliveryEnabled](iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [autoContentAwareDistortionCorrectionEnabled](isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [autoVirtualDeviceFusionEnabled](isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [dualCameraDualPhotoDeliveryEnabled](isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoDualCameraFusionEnabled](isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.
