> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/depthdata](https://developer.apple.com/documentation/avfoundation/avcapturephoto/depthdata)

# depthData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Depth or disparity map data captured with the photo.

## Declaration

```swift
var depthData: AVDepthData? { get }
```

## Mentioned In

- [Capturing photos with depth](../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

To request capture of depth data alongside a photo (on supported devices), set the [isDepthDataDeliveryEnabled](../avcapturephotosettings/isdepthdatadeliveryenabled.md) property of your photo settings object to [true](https://developer.apple.com/documentation/swift/true) when requesting photo capture. If you did not request depth data delivery, this property’s value is `nil`.

> **Note**

>  If you set the [embedsDepthDataInPhoto](../avcapturephotosettings/embedsdepthdatainphoto.md) property of your photo object to [false](https://developer.apple.com/documentation/swift/false) when requesting photo capture, this property still provides depth data, but that data is not included when generating photo file data for output.

## See Also

### Accessing photo metadata

- [cameraCalibrationData](cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [sourceDeviceType](sourcedevicetype.md): The type of device that captured the photo.
- [metadata](metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.

# depthData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Depth or disparity map data captured with the photo.

## Declaration

```objectivec
@property (readonly, nullable) AVDepthData * depthData;
```

## Mentioned In

- [Capturing photos with depth](../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

To request capture of depth data alongside a photo (on supported devices), set the [depthDataDeliveryEnabled](../avcapturephotosettings/isdepthdatadeliveryenabled.md) property of your photo settings object to [true](https://developer.apple.com/documentation/swift/true) when requesting photo capture. If you did not request depth data delivery, this property’s value is `nil`.

> **Note**

>  If you set the [embedsDepthDataInPhoto](../avcapturephotosettings/embedsdepthdatainphoto.md) property of your photo object to [false](https://developer.apple.com/documentation/swift/false) when requesting photo capture, this property still provides depth data, but that data is not included when generating photo file data for output.

## See Also

### Accessing photo metadata

- [cameraCalibrationData](cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [sourceDeviceType](sourcedevicetype.md): The type of device that captured the photo.
- [metadata](metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.
