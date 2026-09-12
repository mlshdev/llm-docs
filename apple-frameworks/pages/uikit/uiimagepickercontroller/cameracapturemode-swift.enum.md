> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameracapturemode-swift.enum](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameracapturemode-swift.enum)

# UIImagePickerController.CameraCaptureMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that specify the category of media for the camera to capture.

## Declaration

```swift
enum CameraCaptureMode
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [cameraCaptureMode](cameracapturemode-swift.property.md) property.

## Topics

### Constants

- [UIImagePickerController.CameraCaptureMode.photo](cameracapturemode-swift.enum/photo.md): Specifies that the camera captures still images.
- [UIImagePickerController.CameraCaptureMode.video](cameracapturemode-swift.enum/video.md): Specifies that the camera captures movies.

### Initializers

- [init(rawValue:)](cameracapturemode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the camera capture mode

- [availableCaptureModes(for:)](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.
- [cameraCaptureMode](cameracapturemode-swift.property.md): The capture mode used by the camera.

# UIImagePickerControllerCameraCaptureMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that specify the category of media for the camera to capture.

## Declaration

```objectivec
enum UIImagePickerControllerCameraCaptureMode : NSInteger;
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [cameraCaptureMode](cameracapturemode-swift.property.md) property.

## Topics

### Constants

- [UIImagePickerControllerCameraCaptureModePhoto](cameracapturemode-swift.enum/photo.md): Specifies that the camera captures still images.
- [UIImagePickerControllerCameraCaptureModeVideo](cameracapturemode-swift.enum/video.md): Specifies that the camera captures movies.

## See Also

### Configuring the camera capture mode

- [availableCaptureModesForCameraDevice:](availablecapturemodes%28for_%29.md): Retrieves the capture modes supported by the specified camera device.
- [cameraCaptureMode](cameracapturemode-swift.property.md): The capture mode used by the camera.
