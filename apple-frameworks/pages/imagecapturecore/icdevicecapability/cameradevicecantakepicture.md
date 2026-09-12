> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicecapability/cameradevicecantakepicture](https://developer.apple.com/documentation/imagecapturecore/icdevicecapability/cameradevicecantakepicture)

# cameraDeviceCanTakePicture (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The capability for the client to request to take a picture while the camera is connected.

## Declaration

```swift
static let cameraDeviceCanTakePicture: ICDeviceCapability
```

<a id="Discussion"></a>

## Discussion

When this capability is available, the client can call [requestTakePicture()](../iccameradevice/requesttakepicture%28%29.md) to capture a picture.

## See Also

### Taking Pictures

- [cameraDeviceCanTakePictureUsingShutterReleaseOnCamera](cameradevicecantakepictureusingshutterreleaseoncamera.md): The capability to capture a picture if the user presses the shutter release on the camera while the camera is connected.

# ICCameraDeviceCanTakePicture (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The capability for the client to request to take a picture while the camera is connected.

## Declaration

```objectivec
extern ICDeviceCapability const ICCameraDeviceCanTakePicture;
```

<a id="Discussion"></a>

## Discussion

When this capability is available, the client can call [requestTakePicture](../iccameradevice/requesttakepicture%28%29.md) to capture a picture.

## See Also

### Taking Pictures

- [ICCameraDeviceCanTakePictureUsingShutterReleaseOnCamera](cameradevicecantakepictureusingshutterreleaseoncamera.md): The capability to capture a picture if the user presses the shutter release on the camera while the camera is connected.
