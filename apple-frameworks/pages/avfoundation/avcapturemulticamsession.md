> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemulticamsession](https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession)

# AVCaptureMultiCamSession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 2.1+

A capture session that supports simultaneous capture from multiple inputs of the same media type.

## Declaration

```swift
class AVCaptureMultiCamSession
```

<a id="overview"></a>

## Overview

The session preset for a multicamera session is always [inputPriority](avcapturesession/preset/inputpriority.md). Set each capture device’s [activeFormat](avcapturedevice/activeformat.md) value to the desired quality of service.

You can dynamically enable and disable this session’s individual camera inputs without interrupting capture preview. To stop an individual camera, disable all of its connections or connected ports. The camera then stops streaming data to save power and bandwidth. Other inputs that are streaming data through the session are unaffected.

> **Note**

>  If your app only needs to capture from a single camera at a time, use [AVCaptureSession](avcapturesession.md) instead.

## Topics

### Determining multi-camera support

- [isMultiCamSupported](avcapturemulticamsession/ismulticamsupported.md): A Boolean value that indicates whether this device supports multi-camera sessions.

### Managing resources

- [hardwareCost](avcapturemulticamsession/hardwarecost.md): A value that indicates the percentage of the session’s available hardware budget currently in use.
- [systemPressureCost](avcapturemulticamsession/systempressurecost.md): A value that indicates the system pressure cost of the current session configuration.

## Relationships

### Inherits From

- [AVCaptureSession](avcapturesession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture sessions

- [Setting up a capture session](setting-up-a-capture-session.md): Configure input devices, output media, preview views, and basic settings before capturing photos or video.
- [Accessing the camera while multitasking on iPad](../avkit/accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.
- [AVCam: Building a camera app](avcam-building-a-camera-app.md): Capture photos and record video using the front and rear iPhone and iPad cameras.
- [Building a responsive camera app that launches quickly](building-a-responsive-camera-app-that-launches-quickly.md): Show a camera preview sooner by deferring capture output setup and postponing noncritical interface elements.
- [Capturing Cinematic video](capturing-cinematic-video.md): Capture video with an adjustable depth of field and focus points.
- [Supporting Center Stage front camera in your iOS app](supporting-center-stage-front-camera-in-your-ios-app.md): Enable Center Stage for photos and videos on the iPhone front camera.
- [AVMultiCamPiP: Capturing from Multiple Cameras](avmulticampip-capturing-from-multiple-cameras.md): Simultaneously record the output from the front and back cameras into a single movie file by using a multi-camera capture session.
- [AVCamBarcode: detecting barcodes and faces](avcambarcode-detecting-barcodes-and-faces.md): Identify machine readable codes or faces by using the camera.
- [AVCaptureSession](avcapturesession.md): An object that configures capture behavior and coordinates the flow of data from input devices to capture outputs.
- [AVCaptureInput](avcaptureinput.md): An abstract superclass for objects that provide input data to a capture session.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
- [AVCaptureConnection](avcaptureconnection.md): An object that represents a connection from a capture input to a capture output.

# AVCaptureMultiCamSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 2.1+

A capture session that supports simultaneous capture from multiple inputs of the same media type.

## Declaration

```objectivec
@interface AVCaptureMultiCamSession : AVCaptureSession
```

<a id="overview"></a>

## Overview

The session preset for a multicamera session is always [AVCaptureSessionPresetInputPriority](avcapturesession/preset/inputpriority.md). Set each capture device’s [activeFormat](avcapturedevice/activeformat.md) value to the desired quality of service.

You can dynamically enable and disable this session’s individual camera inputs without interrupting capture preview. To stop an individual camera, disable all of its connections or connected ports. The camera then stops streaming data to save power and bandwidth. Other inputs that are streaming data through the session are unaffected.

> **Note**

>  If your app only needs to capture from a single camera at a time, use [AVCaptureSession](avcapturesession.md) instead.

## Topics

### Determining multi-camera support

- [multiCamSupported](avcapturemulticamsession/ismulticamsupported.md): A Boolean value that indicates whether this device supports multi-camera sessions.

### Managing resources

- [hardwareCost](avcapturemulticamsession/hardwarecost.md): A value that indicates the percentage of the session’s available hardware budget currently in use.
- [systemPressureCost](avcapturemulticamsession/systempressurecost.md): A value that indicates the system pressure cost of the current session configuration.

## Relationships

### Inherits From

- [AVCaptureSession](avcapturesession.md)

## See Also

### Capture sessions

- [Setting up a capture session](setting-up-a-capture-session.md): Configure input devices, output media, preview views, and basic settings before capturing photos or video.
- [Accessing the camera while multitasking on iPad](../avkit/accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.
- [AVCam: Building a camera app](avcam-building-a-camera-app.md): Capture photos and record video using the front and rear iPhone and iPad cameras.
- [Capturing Cinematic video](capturing-cinematic-video.md): Capture video with an adjustable depth of field and focus points.
- [AVMultiCamPiP: Capturing from Multiple Cameras](avmulticampip-capturing-from-multiple-cameras.md): Simultaneously record the output from the front and back cameras into a single movie file by using a multi-camera capture session.
- [AVCamBarcode: detecting barcodes and faces](avcambarcode-detecting-barcodes-and-faces.md): Identify machine readable codes or faces by using the camera.
- [AVCaptureSession](avcapturesession.md): An object that configures capture behavior and coordinates the flow of data from input devices to capture outputs.
- [AVCaptureInput](avcaptureinput.md): An abstract superclass for objects that provide input data to a capture session.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
- [AVCaptureConnection](avcaptureconnection.md): An object that represents a connection from a capture input to a capture output.
