> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput](https://developer.apple.com/documentation/avfoundation/avcaptureinput)

# AVCaptureInput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An abstract superclass for objects that provide input data to a capture session.

## Declaration

```swift
class AVCaptureInput
```

## Mentioned In

- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

You create concrete instances of this class, such as [AVCaptureDeviceInput](avcapturedeviceinput.md), to add inputs to a capture session. An input provides one or more streams of media data. For example, input devices can provide both audio and video data. The framework represents each media stream that an input provides as an [AVCaptureInput.Port](avcaptureinput/port.md) object.

A capture makes connections between capture inputs and capture outputs using a [AVCaptureConnection](avcaptureconnection.md) object. The connection defines the mapping between a set of port objects and an [AVCaptureOutput](avcaptureoutput.md).

## Topics

### Accessing ports

- [ports](avcaptureinput/ports.md): The ports available on a capture input.
- [AVCaptureInput.Port](avcaptureinput/port.md): An object that represents a stream of data that a capture input provides.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureDeviceInput](avcapturedeviceinput.md)
- [AVCaptureMetadataInput](avcapturemetadatainput.md)
- [AVCaptureScreenInput](avcapturescreeninput.md)

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
- [AVCaptureMultiCamSession](avcapturemulticamsession.md): A capture session that supports simultaneous capture from multiple inputs of the same media type.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
- [AVCaptureConnection](avcaptureconnection.md): An object that represents a connection from a capture input to a capture output.

# AVCaptureInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An abstract superclass for objects that provide input data to a capture session.

## Declaration

```objectivec
@interface AVCaptureInput : NSObject
```

## Mentioned In

- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

You create concrete instances of this class, such as [AVCaptureDeviceInput](avcapturedeviceinput.md), to add inputs to a capture session. An input provides one or more streams of media data. For example, input devices can provide both audio and video data. The framework represents each media stream that an input provides as an [AVCaptureInputPort](avcaptureinput/port.md) object.

A capture makes connections between capture inputs and capture outputs using a [AVCaptureConnection](avcaptureconnection.md) object. The connection defines the mapping between a set of port objects and an [AVCaptureOutput](avcaptureoutput.md).

## Topics

### Accessing ports

- [ports](avcaptureinput/ports.md): The ports available on a capture input.
- [AVCaptureInputPort](avcaptureinput/port.md): An object that represents a stream of data that a capture input provides.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureDeviceInput](avcapturedeviceinput.md)
- [AVCaptureMetadataInput](avcapturemetadatainput.md)
- [AVCaptureScreenInput](avcapturescreeninput.md)

## See Also

### Capture sessions

- [Setting up a capture session](setting-up-a-capture-session.md): Configure input devices, output media, preview views, and basic settings before capturing photos or video.
- [Accessing the camera while multitasking on iPad](../avkit/accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.
- [AVCam: Building a camera app](avcam-building-a-camera-app.md): Capture photos and record video using the front and rear iPhone and iPad cameras.
- [Capturing Cinematic video](capturing-cinematic-video.md): Capture video with an adjustable depth of field and focus points.
- [AVMultiCamPiP: Capturing from Multiple Cameras](avmulticampip-capturing-from-multiple-cameras.md): Simultaneously record the output from the front and back cameras into a single movie file by using a multi-camera capture session.
- [AVCamBarcode: detecting barcodes and faces](avcambarcode-detecting-barcodes-and-faces.md): Identify machine readable codes or faces by using the camera.
- [AVCaptureSession](avcapturesession.md): An object that configures capture behavior and coordinates the flow of data from input devices to capture outputs.
- [AVCaptureMultiCamSession](avcapturemulticamsession.md): A capture session that supports simultaneous capture from multiple inputs of the same media type.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
- [AVCaptureConnection](avcaptureconnection.md): An object that represents a connection from a capture input to a capture output.
