> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameradevice-swift.enum](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameradevice-swift.enum)

# UIImagePickerController.CameraDevice (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that specify the camera to use for image or movie capture.

## Declaration

```swift
enum CameraDevice
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [cameraDevice](cameradevice-swift.property.md) property.

## Topics

### Constants

- [UIImagePickerController.CameraDevice.rear](cameradevice-swift.enum/rear.md): Specifies the camera on the rear of the device.
- [UIImagePickerController.CameraDevice.front](cameradevice-swift.enum/front.md): Specifies the camera on the front of the device.

### Initializers

- [init(rawValue:)](cameradevice-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the camera to use

- [isCameraDeviceAvailable(\_:)](iscameradeviceavailable%28__%29.md): Queries whether the specified camera is available.
- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.

# UIImagePickerControllerCameraDevice (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that specify the camera to use for image or movie capture.

## Declaration

```objectivec
enum UIImagePickerControllerCameraDevice : NSInteger;
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [cameraDevice](cameradevice-swift.property.md) property.

## Topics

### Constants

- [UIImagePickerControllerCameraDeviceRear](cameradevice-swift.enum/rear.md): Specifies the camera on the rear of the device.
- [UIImagePickerControllerCameraDeviceFront](cameradevice-swift.enum/front.md): Specifies the camera on the front of the device.

## See Also

### Configuring the camera to use

- [isCameraDeviceAvailable:](iscameradeviceavailable%28__%29.md): Queries whether the specified camera is available.
- [cameraDevice](cameradevice-swift.property.md): The camera used by the image picker controller.
