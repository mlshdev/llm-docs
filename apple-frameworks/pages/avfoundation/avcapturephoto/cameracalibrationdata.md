> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/cameracalibrationdata](https://developer.apple.com/documentation/avfoundation/avcapturephoto/cameracalibrationdata)

# cameraCalibrationData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Calibration information for the camera device that captured the photo.

## Declaration

```swift
var cameraCalibrationData: AVCameraCalibrationData? { get }
```

<a id="Discussion"></a>

## Discussion

Camera calibration data is present only if you specified the [isCameraCalibrationDataDeliveryEnabled](../avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md) and [isDualCameraDualPhotoDeliveryEnabled](../avcapturephotosettings/isdualcameradualphotodeliveryenabled.md) settings when requesting capture. For camera calibration data in a capture that includes depth data, see the [AVDepthData](../avdepthdata.md) [cameraCalibrationData](../avdepthdata/cameracalibrationdata.md) property.

## See Also

### Accessing photo metadata

- [depthData](depthdata.md): Depth or disparity map data captured with the photo.
- [sourceDeviceType](sourcedevicetype.md): The type of device that captured the photo.
- [metadata](metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.

# cameraCalibrationData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Calibration information for the camera device that captured the photo.

## Declaration

```objectivec
@property (readonly, nullable) AVCameraCalibrationData * cameraCalibrationData;
```

<a id="Discussion"></a>

## Discussion

Camera calibration data is present only if you specified the [cameraCalibrationDataDeliveryEnabled](../avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md) and [dualCameraDualPhotoDeliveryEnabled](../avcapturephotosettings/isdualcameradualphotodeliveryenabled.md) settings when requesting capture. For camera calibration data in a capture that includes depth data, see the [AVDepthData](../avdepthdata.md) [cameraCalibrationData](../avdepthdata/cameracalibrationdata.md) property.

## See Also

### Accessing photo metadata

- [depthData](depthdata.md): Depth or disparity map data captured with the photo.
- [sourceDeviceType](sourcedevicetype.md): The type of device that captured the photo.
- [metadata](metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.
