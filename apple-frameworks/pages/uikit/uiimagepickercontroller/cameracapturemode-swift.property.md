> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameracapturemode-swift.property](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameracapturemode-swift.property)

# cameraCaptureMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

The capture mode used by the camera.

## Declaration

```swift
var cameraCaptureMode: UIImagePickerController.CameraCaptureMode { get set }
```

<a id="Discussion"></a>

## Discussion

The various capture modes are listed in the [UIImagePickerController.CameraCaptureMode](cameracapturemode-swift.enum.md) enumeration. The default value is [UIImagePickerController.CameraCaptureMode.photo](cameracapturemode-swift.enum/photo.md).

## See Also

### Related Documentation

- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.

### Configuring the camera capture mode

- [availableCaptureModes(for:)](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.
- [UIImagePickerController.CameraCaptureMode](cameracapturemode-swift.enum.md): Constants that specify the category of media for the camera to capture.

# cameraCaptureMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

The capture mode used by the camera.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerCameraCaptureMode cameraCaptureMode;
```

<a id="Discussion"></a>

## Discussion

The various capture modes are listed in the [UIImagePickerControllerCameraCaptureMode](cameracapturemode-swift.enum.md) enumeration. The default value is [UIImagePickerControllerCameraCaptureModePhoto](cameracapturemode-swift.enum/photo.md).

## See Also

### Related Documentation

- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.

### Configuring the camera capture mode

- [availableCaptureModesForCameraDevice:](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.
- [UIImagePickerControllerCameraCaptureMode](cameracapturemode-swift.enum.md): Constants that specify the category of media for the camera to capture.
