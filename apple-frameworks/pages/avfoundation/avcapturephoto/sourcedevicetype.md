> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/sourcedevicetype](https://developer.apple.com/documentation/avfoundation/avcapturephoto/sourcedevicetype)

# sourceDeviceType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The type of device that captured the photo.

## Declaration

```swift
var sourceDeviceType: AVCaptureDevice.DeviceType? { get }
```

<a id="Discussion"></a>

## Discussion

When you capture dual photos with a [builtInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) device and the [isDualCameraDualPhotoDeliveryEnabled](../avcapturephotosettings/isdualcameradualphotodeliveryenabled.md) setting, use this property to determine which of the two resulting photo objects is from the [builtInWideAngleCamera](../avcapturedevice/devicetype-swift.struct/builtinwideanglecamera.md) or [builtInTelephotoCamera](../avcapturedevice/devicetype-swift.struct/builtintelephotocamera.md) device.

For all other captures, this property’s value is equal to the [deviceType](../avcapturedevice/devicetype-swift.property.md) property of the capture device to which the photo output is connected.

This property’s value can be `nil` if the [AVCapturePhoto](../avcapturephoto.md) object did not come from an [AVCaptureDevice](../avcapturedevice.md) capture.

## See Also

### Accessing photo metadata

- [depthData](depthdata.md): Depth or disparity map data captured with the photo.
- [cameraCalibrationData](cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [metadata](metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.

# sourceDeviceType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The type of device that captured the photo.

## Declaration

```objectivec
@property (readonly, nullable) AVCaptureDeviceType sourceDeviceType;
```

<a id="Discussion"></a>

## Discussion

When you capture dual photos with a [AVCaptureDeviceTypeBuiltInDualCamera](../avcapturedevice/devicetype-swift.struct/builtindualcamera.md) device and the [dualCameraDualPhotoDeliveryEnabled](../avcapturephotosettings/isdualcameradualphotodeliveryenabled.md) setting, use this property to determine which of the two resulting photo objects is from the [AVCaptureDeviceTypeBuiltInWideAngleCamera](../avcapturedevice/devicetype-swift.struct/builtinwideanglecamera.md) or [AVCaptureDeviceTypeBuiltInTelephotoCamera](../avcapturedevice/devicetype-swift.struct/builtintelephotocamera.md) device.

For all other captures, this property’s value is equal to the [deviceType](../avcapturedevice/devicetype-swift.property.md) property of the capture device to which the photo output is connected.

This property’s value can be `nil` if the [AVCapturePhoto](../avcapturephoto.md) object did not come from an [AVCaptureDevice](../avcapturedevice.md) capture.

## See Also

### Accessing photo metadata

- [depthData](depthdata.md): Depth or disparity map data captured with the photo.
- [cameraCalibrationData](cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [metadata](metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.
