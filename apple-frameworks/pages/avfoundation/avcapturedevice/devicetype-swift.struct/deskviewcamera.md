> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/deskviewcamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/deskviewcamera)

# deskViewCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** macOS 13.0+

A virtual overhead camera that captures a user’s desk.

## Declaration

```swift
static let deskViewCamera: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

This device type provides a distortion-corrected cut out from an ultra wide camera that approximates an overhead view of a user’s physical desktop.

You can use this device type with [AVCaptureMultiCamSession](../../avcapturemulticamsession.md).

# AVCaptureDeviceTypeDeskViewCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** macOS 13.0+

A virtual overhead camera that captures a user’s desk.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeDeskViewCamera;
```

<a id="Discussion"></a>

## Discussion

This device type provides a distortion-corrected cut out from an ultra wide camera that approximates an overhead view of a user’s physical desktop.

You can use this device type with [AVCaptureMultiCamSession](../../avcapturemulticamsession.md).
