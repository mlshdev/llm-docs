> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameradevice-swift.property](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameradevice-swift.property)

# cameraDevice (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

The camera used by the image picker controller.

## Declaration

```swift
var cameraDevice: UIImagePickerController.CameraDevice { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [UIImagePickerController.CameraDevice.rear](cameradevice-swift.enum/rear.md).

## See Also

### Related Documentation

- [isFlashAvailable(for:)](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [availableCaptureModes(for:)](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.

### Configuring the camera to use

- [isCameraDeviceAvailable(\_:)](iscameradeviceavailable%28__%29.md): Queries whether the specified camera is available.
- [UIImagePickerController.CameraDevice](cameradevice-swift.enum.md): Constants that specify the camera to use for image or movie capture.

# cameraDevice (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

The camera used by the image picker controller.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerCameraDevice cameraDevice;
```

<a id="Discussion"></a>

## Discussion

The default is [UIImagePickerControllerCameraDeviceRear](cameradevice-swift.enum/rear.md).

## See Also

### Related Documentation

- [isFlashAvailableForCameraDevice:](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [availableCaptureModesForCameraDevice:](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.

### Configuring the camera to use

- [isCameraDeviceAvailable:](iscameradeviceavailable%28__%29.md): Queries whether the specified camera is available.
- [UIImagePickerControllerCameraDevice](cameradevice-swift.enum.md): Constants that specify the camera to use for image or movie capture.
