> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection](https://developer.apple.com/documentation/avfoundation/avcaptureconnection)

# AVCaptureConnection (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that represents a connection from a capture input to a capture output.

## Declaration

```swift
class AVCaptureConnection
```

<a id="overview"></a>

## Overview

Capture inputs have one or more input ports (instances of [AVCaptureInput.Port](avcaptureinput/port.md)). Capture outputs can accept data from one or more sources (for example, an [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md) object accepts both video and audio data).

You can add an `AVCaptureConnection` instance to a session using the [addConnection(\_:)](avcapturesession/addconnection%28__%29.md) method only if the [canAddConnection(\_:)](avcapturesession/canaddconnection%28__%29.md) method returns [true](https://developer.apple.com/documentation/swift/true). When using the [addInput(\_:)](avcapturesession/addinput%28__%29.md) or [addOutput(\_:)](avcapturesession/addoutput%28__%29.md) method, the session forms connections automatically between all compatible inputs and outputs. You only need to add connections manually when adding an input or output with no connections. You can also use connections to enable or disable the flow of data from a given input or to a given output.

## Topics

### Creating a connection

- [init(inputPorts:output:)](avcaptureconnection/init%28inputports_output_%29.md): Creates a capture connection that represents a connection between multiple input ports and an output.
- [init(inputPort:videoPreviewLayer:)](avcaptureconnection/init%28inputport_videopreviewlayer_%29.md): Creates a capture connection that represents a connection between an input port and a video preview layer.

### Enabling a connection

- [isEnabled](avcaptureconnection/isenabled.md): Turns the connection on and off.
- [isActive](avcaptureconnection/isactive.md): Indicates whether the connection is active.

### Inspecting a connection

- [inputPorts](avcaptureconnection/inputports.md): An array of the connection’s input ports.
- [output](avcaptureconnection/output.md): The connection’s output port, if applicable.
- [videoPreviewLayer](avcaptureconnection/videopreviewlayer.md): The video preview layer associated with the connection.
- [audioChannels](avcaptureconnection/audiochannels.md): An array of audio channels that the connection provides.

### Rotating a video

- [isVideoRotationAngleSupported(\_:)](avcaptureconnection/isvideorotationanglesupported%28__%29.md): Returns a Boolean value that indicates whether the connection supports a rotation angle.
- [videoRotationAngle](avcaptureconnection/videorotationangle.md): A rotation angle the connection applies to a video flowing through it.

### Mirroring a video

- [isVideoMirroringSupported](avcaptureconnection/isvideomirroringsupported.md): A Boolean value that indicates whether the connection supports video mirroring.
- [isVideoMirrored](avcaptureconnection/isvideomirrored.md): A Boolean value that indicates whether the connection horizontally flips the video flowing through it.
- [automaticallyAdjustsVideoMirroring](avcaptureconnection/automaticallyadjustsvideomirroring.md): A Boolean value that indicates whether you can enable mirroring based on a session’s configuration.

### Stabilizing video

- [isVideoStabilizationSupported](avcaptureconnection/isvideostabilizationsupported.md): A Boolean value that indicates whether this connection supports video stabilization.
- [activeVideoStabilizationMode](avcaptureconnection/activevideostabilizationmode.md): The connection’s current stabilization mode.
- [preferredVideoStabilizationMode](avcaptureconnection/preferredvideostabilizationmode.md): The stabilization mode that’s the most appropriate for a video connection.

### Delivering camera calibration settings

- [isCameraIntrinsicMatrixDeliverySupported](avcaptureconnection/iscameraintrinsicmatrixdeliverysupported.md): A Boolean value that indicates whether the capture connection currently supports delivering camera intrinsics information.
- [isCameraIntrinsicMatrixDeliveryEnabled](avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled.md): A Boolean value that indicates whether the connection can configure the capture pipeline to deliver camera intrinsics information.

### Configuring a video’s frame rate

- [isVideoMinFrameDurationSupported](avcaptureconnection/isvideominframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a minimum frame duration.
- [videoMinFrameDuration](avcaptureconnection/videominframeduration.md): Deprecated. The smallest time interval the connection can apply between consecutive video frames.
- [isVideoMaxFrameDurationSupported](avcaptureconnection/isvideomaxframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a maximum frame duration.
- [videoMaxFrameDuration](avcaptureconnection/videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.

### Scaling a video

- [videoMaxScaleAndCropFactor](avcaptureconnection/videomaxscaleandcropfactor.md): The connection’s maximum video scale and crop factor.
- [videoScaleAndCropFactor](avcaptureconnection/videoscaleandcropfactor.md): The current scale and crop factor the video output uses.

### Interlacing video

- [isVideoFieldModeSupported](avcaptureconnection/isvideofieldmodesupported.md): A Boolean value that indicates whether the connection supports setting a video field mode.
- [videoFieldMode](avcaptureconnection/videofieldmode.md): A setting that tells the connection how to interlace video flowing through it.
- [AVVideoFieldMode](avvideofieldmode.md): Constants that indicate which interlacing modes the connection applies to video flowing through it.

### Deprecated

- [isVideoStabilizationEnabled](avcaptureconnection/isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](avcaptureconnection/enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [isVideoOrientationSupported](avcaptureconnection/isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](avcaptureconnection/videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.

### Instance Properties

- [automaticallyEnablesLowLightVideoNoiseReduction](avcaptureconnection/automaticallyenableslowlightvideonoisereduction.md): Indicates whether the connection should automatically enable low light video noise reduction when the connection supports it.
- [isLowLightVideoNoiseReductionEnabled](avcaptureconnection/islowlightvideonoisereductionenabled.md): Indicates whether low light video noise reduction is enabled for the current session.
- [isLowLightVideoNoiseReductionSupported](avcaptureconnection/islowlightvideonoisereductionsupported.md): Indicates whether the connection supports low light video noise reduction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AVCaptureInput](avcaptureinput.md): An abstract superclass for objects that provide input data to a capture session.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.

# AVCaptureConnection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that represents a connection from a capture input to a capture output.

## Declaration

```objectivec
@interface AVCaptureConnection : NSObject
```

<a id="overview"></a>

## Overview

Capture inputs have one or more input ports (instances of [AVCaptureInputPort](avcaptureinput/port.md)). Capture outputs can accept data from one or more sources (for example, an [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md) object accepts both video and audio data).

You can add an `AVCaptureConnection` instance to a session using the [addConnection:](avcapturesession/addconnection%28__%29.md) method only if the [canAddConnection:](avcapturesession/canaddconnection%28__%29.md) method returns [true](https://developer.apple.com/documentation/swift/true). When using the [addInput:](avcapturesession/addinput%28__%29.md) or [addOutput:](avcapturesession/addoutput%28__%29.md) method, the session forms connections automatically between all compatible inputs and outputs. You only need to add connections manually when adding an input or output with no connections. You can also use connections to enable or disable the flow of data from a given input or to a given output.

## Topics

### Creating a connection

- [initWithInputPorts:output:](avcaptureconnection/init%28inputports_output_%29.md): Creates a capture connection that represents a connection between multiple input ports and an output.
- [connectionWithInputPorts:output:](avcaptureconnection/connectionwithinputports_output_.md): Returns a capture connection that represents a connection between multiple input ports and an output.
- [initWithInputPort:videoPreviewLayer:](avcaptureconnection/init%28inputport_videopreviewlayer_%29.md): Creates a capture connection that represents a connection between an input port and a video preview layer.
- [connectionWithInputPort:videoPreviewLayer:](avcaptureconnection/connectionwithinputport_videopreviewlayer_.md): Returns a capture connection that represents a connection between an input port and a video preview layer.

### Enabling a connection

- [enabled](avcaptureconnection/isenabled.md): Turns the connection on and off.
- [active](avcaptureconnection/isactive.md): Indicates whether the connection is active.

### Inspecting a connection

- [inputPorts](avcaptureconnection/inputports.md): An array of the connection’s input ports.
- [output](avcaptureconnection/output.md): The connection’s output port, if applicable.
- [videoPreviewLayer](avcaptureconnection/videopreviewlayer.md): The video preview layer associated with the connection.
- [audioChannels](avcaptureconnection/audiochannels.md): An array of audio channels that the connection provides.

### Rotating a video

- [isVideoRotationAngleSupported:](avcaptureconnection/isvideorotationanglesupported%28__%29.md): Returns a Boolean value that indicates whether the connection supports a rotation angle.
- [videoRotationAngle](avcaptureconnection/videorotationangle.md): A rotation angle the connection applies to a video flowing through it.

### Mirroring a video

- [supportsVideoMirroring](avcaptureconnection/isvideomirroringsupported.md): A Boolean value that indicates whether the connection supports video mirroring.
- [videoMirrored](avcaptureconnection/isvideomirrored.md): A Boolean value that indicates whether the connection horizontally flips the video flowing through it.
- [automaticallyAdjustsVideoMirroring](avcaptureconnection/automaticallyadjustsvideomirroring.md): A Boolean value that indicates whether you can enable mirroring based on a session’s configuration.

### Stabilizing video

- [supportsVideoStabilization](avcaptureconnection/isvideostabilizationsupported.md): A Boolean value that indicates whether this connection supports video stabilization.
- [activeVideoStabilizationMode](avcaptureconnection/activevideostabilizationmode.md): The connection’s current stabilization mode.
- [preferredVideoStabilizationMode](avcaptureconnection/preferredvideostabilizationmode.md): The stabilization mode that’s the most appropriate for a video connection.

### Delivering camera calibration settings

- [cameraIntrinsicMatrixDeliverySupported](avcaptureconnection/iscameraintrinsicmatrixdeliverysupported.md): A Boolean value that indicates whether the capture connection currently supports delivering camera intrinsics information.
- [cameraIntrinsicMatrixDeliveryEnabled](avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled.md): A Boolean value that indicates whether the connection can configure the capture pipeline to deliver camera intrinsics information.

### Configuring a video’s frame rate

- [supportsVideoMinFrameDuration](avcaptureconnection/isvideominframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a minimum frame duration.
- [videoMinFrameDuration](avcaptureconnection/videominframeduration.md): Deprecated. The smallest time interval the connection can apply between consecutive video frames.
- [supportsVideoMaxFrameDuration](avcaptureconnection/isvideomaxframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a maximum frame duration.
- [videoMaxFrameDuration](avcaptureconnection/videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.

### Scaling a video

- [videoMaxScaleAndCropFactor](avcaptureconnection/videomaxscaleandcropfactor.md): The connection’s maximum video scale and crop factor.
- [videoScaleAndCropFactor](avcaptureconnection/videoscaleandcropfactor.md): The current scale and crop factor the video output uses.

### Interlacing video

- [supportsVideoFieldMode](avcaptureconnection/isvideofieldmodesupported.md): A Boolean value that indicates whether the connection supports setting a video field mode.
- [videoFieldMode](avcaptureconnection/videofieldmode.md): A setting that tells the connection how to interlace video flowing through it.
- [AVVideoFieldMode](avvideofieldmode.md): Constants that indicate which interlacing modes the connection applies to video flowing through it.

### Deprecated

- [videoStabilizationEnabled](avcaptureconnection/isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](avcaptureconnection/enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [supportsVideoOrientation](avcaptureconnection/isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](avcaptureconnection/videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.

### Instance Properties

- [automaticallyEnablesLowLightVideoNoiseReduction](avcaptureconnection/automaticallyenableslowlightvideonoisereduction.md): Indicates whether the connection should automatically enable low light video noise reduction when the connection supports it.
- [lowLightVideoNoiseReductionEnabled](avcaptureconnection/islowlightvideonoisereductionenabled.md): Indicates whether low light video noise reduction is enabled for the current session.
- [lowLightVideoNoiseReductionSupported](avcaptureconnection/islowlightvideonoisereductionsupported.md): Indicates whether the connection supports low light video noise reduction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AVCaptureInput](avcaptureinput.md): An abstract superclass for objects that provide input data to a capture session.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
