> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/iscameradeviceavailable(_:)](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/iscameradeviceavailable(_:))

# isCameraDeviceAvailable(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Queries whether the specified camera is available.

## Declaration

```swift
class func isCameraDeviceAvailable(_ cameraDevice: UIImagePickerController.CameraDevice) -> Bool
```

## Parameters

- `cameraDevice`: A [UIImagePickerController.CameraDevice](cameradevice-swift.enum.md) constant indicating the camera whose availability you want to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the camera indicated by `cameraDevice` is available, or [false](https://developer.apple.com/documentation/swift/false) if it is not available.

## See Also

### Related Documentation

- [isFlashAvailable(for:)](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [availableCaptureModes(for:)](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.

### Configuring the camera to use

- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.
- [UIImagePickerController.CameraDevice](cameradevice-swift.enum.md): Constants that specify the camera to use for image or movie capture.

# isCameraDeviceAvailable: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Queries whether the specified camera is available.

## Declaration

```objectivec
+ (BOOL) isCameraDeviceAvailable:(UIImagePickerControllerCameraDevice) cameraDevice;
```

## Parameters

- `cameraDevice`: A [UIImagePickerControllerCameraDevice](cameradevice-swift.enum.md) constant indicating the camera whose availability you want to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the camera indicated by `cameraDevice` is available, or [false](https://developer.apple.com/documentation/swift/false) if it is not available.

## See Also

### Related Documentation

- [isFlashAvailableForCameraDevice:](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [availableCaptureModesForCameraDevice:](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.

### Configuring the camera to use

- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.
- [UIImagePickerControllerCameraDevice](cameradevice-swift.enum.md): Constants that specify the camera to use for image or movie capture.
