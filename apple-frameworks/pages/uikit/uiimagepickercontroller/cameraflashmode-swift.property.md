> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameraflashmode-swift.property](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameraflashmode-swift.property)

# cameraFlashMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

The flash mode used by the active camera.

## Declaration

```swift
var cameraFlashMode: UIImagePickerController.CameraFlashMode { get set }
```

<a id="Discussion"></a>

## Discussion

The various flash modes are listed in the [UIImagePickerController.CameraFlashMode](cameraflashmode-swift.enum.md) enumeration. The default value is [UIImagePickerController.CameraFlashMode.auto](cameraflashmode-swift.enum/auto.md).

The value of this property specifies the behavior of the still-image flash when the value of the [cameraCaptureMode](cameracapturemode-swift.property.md) property is [UIImagePickerController.CameraCaptureMode.photo](cameracapturemode-swift.enum/photo.md), and specifies the behavior of the video torch when [cameraCaptureMode](cameracapturemode-swift.property.md) is [UIImagePickerController.CameraCaptureMode.video](cameracapturemode-swift.enum/video.md).

## See Also

### Related Documentation

- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.
- [cameraCaptureMode](cameracapturemode-swift.property.md): The capture mode used by the camera.

### Configuring the flash behavior

- [isFlashAvailable(for:)](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [UIImagePickerController.CameraFlashMode](cameraflashmode-swift.enum.md): Constants that specify the flash mode to use with the active camera.

# cameraFlashMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

The flash mode used by the active camera.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerCameraFlashMode cameraFlashMode;
```

<a id="Discussion"></a>

## Discussion

The various flash modes are listed in the [UIImagePickerControllerCameraFlashMode](cameraflashmode-swift.enum.md) enumeration. The default value is [UIImagePickerControllerCameraFlashModeAuto](cameraflashmode-swift.enum/auto.md).

The value of this property specifies the behavior of the still-image flash when the value of the [cameraCaptureMode](cameracapturemode-swift.property.md) property is [UIImagePickerControllerCameraCaptureModePhoto](cameracapturemode-swift.enum/photo.md), and specifies the behavior of the video torch when [cameraCaptureMode](cameracapturemode-swift.property.md) is [UIImagePickerControllerCameraCaptureModeVideo](cameracapturemode-swift.enum/video.md).

## See Also

### Related Documentation

- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.
- [cameraCaptureMode](cameracapturemode-swift.property.md): The capture mode used by the camera.

### Configuring the flash behavior

- [isFlashAvailableForCameraDevice:](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [UIImagePickerControllerCameraFlashMode](cameraflashmode-swift.enum.md): Constants that specify the flash mode to use with the active camera.
