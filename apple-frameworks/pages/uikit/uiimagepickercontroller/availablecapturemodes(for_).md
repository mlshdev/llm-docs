> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/availablecapturemodes(for:)](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/availablecapturemodes(for:))

# availableCaptureModes(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Retrieves the capture modes supported by the specified camera device.

## Declaration

```swift
class func availableCaptureModes(for cameraDevice: UIImagePickerController.CameraDevice) -> [NSNumber]?
```

## Parameters

- `cameraDevice`: A [UIImagePickerController.CameraDevice](cameradevice-swift.enum.md) constant indicating the camera you want to interrogate.

<a id="return-value"></a>

## Return Value

An array of [NSNumber](../../foundation/nsnumber.md) objects indicating the capture modes supported by `cameraDevice`.

<a id="Discussion"></a>

## Discussion

See [UIImagePickerController.CameraCaptureMode](cameracapturemode-swift.enum.md) for possible values.

## See Also

### Configuring the camera capture mode

- [cameraCaptureMode](cameracapturemode-swift.property.md): The capture mode used by the camera.
- [UIImagePickerController.CameraCaptureMode](cameracapturemode-swift.enum.md): Constants that specify the category of media for the camera to capture.

# availableCaptureModesForCameraDevice: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Retrieves the capture modes supported by the specified camera device.

## Declaration

```objectivec
+ (NSArray<NSNumber *> *) availableCaptureModesForCameraDevice:(UIImagePickerControllerCameraDevice) cameraDevice;
```

## Parameters

- `cameraDevice`: A [UIImagePickerControllerCameraDevice](cameradevice-swift.enum.md) constant indicating the camera you want to interrogate.

<a id="return-value"></a>

## Return Value

An array of [NSNumber](../../foundation/nsnumber.md) objects indicating the capture modes supported by `cameraDevice`.

<a id="Discussion"></a>

## Discussion

See [UIImagePickerControllerCameraCaptureMode](cameracapturemode-swift.enum.md) for possible values.

## See Also

### Configuring the camera capture mode

- [cameraCaptureMode](cameracapturemode-swift.property.md): The capture mode used by the camera.
- [UIImagePickerControllerCameraCaptureMode](cameracapturemode-swift.enum.md): Constants that specify the category of media for the camera to capture.
