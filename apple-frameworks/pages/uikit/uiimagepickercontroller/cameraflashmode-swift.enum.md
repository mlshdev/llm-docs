> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameraflashmode-swift.enum](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameraflashmode-swift.enum)

# UIImagePickerController.CameraFlashMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that specify the flash mode to use with the active camera.

## Declaration

```swift
enum CameraFlashMode
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [cameraFlashMode](cameraflashmode-swift.property.md) property.

The behavior of the flash depends on the camera capture mode.

- For a [cameraCaptureMode](cameracapturemode-swift.property.md) value of [UIImagePickerController.CameraCaptureMode.photo](cameracapturemode-swift.enum/photo.md), flash is used to transiently illuminate the subject during still image capture.
- For a [cameraCaptureMode](cameracapturemode-swift.property.md) value of [UIImagePickerController.CameraCaptureMode.video](cameracapturemode-swift.enum/video.md), flash is used to continuously illuminate the subject during movie capture.

For a given camera on a device, flash may or may not be available. You specify the active camera by way of the [cameraDevice](cameradevice-swift.property.md) property. You can determine if the active camera has flash available by calling the [isFlashAvailable(for:)](isflashavailable%28for_%29.md) class method.

You can manipulate the flash directly to provide effects such as a strobe light. Present a picker interface set to use video capture mode. Then, turn the flash LED on or off by setting the [cameraFlashMode](cameraflashmode-swift.property.md) property to [UIImagePickerController.CameraFlashMode.on](cameraflashmode-swift.enum/on.md) or [UIImagePickerController.CameraFlashMode.off](cameraflashmode-swift.enum/off.md).

## Topics

### Constants

- [UIImagePickerController.CameraFlashMode.off](cameraflashmode-swift.enum/off.md): Specifies that flash illumination is always off, no matter what the ambient light conditions are.
- [UIImagePickerController.CameraFlashMode.auto](cameraflashmode-swift.enum/auto.md): Specifies that the device should consider ambient light conditions to automatically determine whether or not to use flash illumination.
- [UIImagePickerController.CameraFlashMode.on](cameraflashmode-swift.enum/on.md): Specifies that flash illumination is always on, no matter what the ambient light conditions are.

### Initializers

- [init(rawValue:)](cameraflashmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the flash behavior

- [isFlashAvailable(for:)](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [cameraFlashMode](cameraflashmode-swift.property.md): The flash mode used by the active camera.

# UIImagePickerControllerCameraFlashMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that specify the flash mode to use with the active camera.

## Declaration

```objectivec
enum UIImagePickerControllerCameraFlashMode : NSInteger;
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [cameraFlashMode](cameraflashmode-swift.property.md) property.

The behavior of the flash depends on the camera capture mode.

- For a [cameraCaptureMode](cameracapturemode-swift.property.md) value of [UIImagePickerControllerCameraCaptureModePhoto](cameracapturemode-swift.enum/photo.md), flash is used to transiently illuminate the subject during still image capture.
- For a [cameraCaptureMode](cameracapturemode-swift.property.md) value of [UIImagePickerControllerCameraCaptureModeVideo](cameracapturemode-swift.enum/video.md), flash is used to continuously illuminate the subject during movie capture.

For a given camera on a device, flash may or may not be available. You specify the active camera by way of the [cameraDevice](cameradevice-swift.property.md) property. You can determine if the active camera has flash available by calling the [isFlashAvailableForCameraDevice:](isflashavailable%28for_%29.md) class method.

You can manipulate the flash directly to provide effects such as a strobe light. Present a picker interface set to use video capture mode. Then, turn the flash LED on or off by setting the [cameraFlashMode](cameraflashmode-swift.property.md) property to [UIImagePickerControllerCameraFlashModeOn](cameraflashmode-swift.enum/on.md) or [UIImagePickerControllerCameraFlashModeOff](cameraflashmode-swift.enum/off.md).

## Topics

### Constants

- [UIImagePickerControllerCameraFlashModeOff](cameraflashmode-swift.enum/off.md): Specifies that flash illumination is always off, no matter what the ambient light conditions are.
- [UIImagePickerControllerCameraFlashModeAuto](cameraflashmode-swift.enum/auto.md): Specifies that the device should consider ambient light conditions to automatically determine whether or not to use flash illumination.
- [UIImagePickerControllerCameraFlashModeOn](cameraflashmode-swift.enum/on.md): Specifies that flash illumination is always on, no matter what the ambient light conditions are.

## See Also

### Configuring the flash behavior

- [isFlashAvailableForCameraDevice:](isflashavailable%28for_%29.md): Queries whether the specified camera has flash illumination capability.
- [cameraFlashMode](cameraflashmode-swift.property.md): The flash mode used by the active camera.
