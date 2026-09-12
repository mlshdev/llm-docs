> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer)

# AVCaptureVideoPreviewLayer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Core Animation layer that displays video from a camera device.

## Declaration

```swift
class AVCaptureVideoPreviewLayer
```

## Mentioned In

- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

Use this layer to provide a preview of the content the camera captures. A convenient way to use this class in iOS is to set it as the backing layer for a view as shown below.

```swift
class PreviewView: UIView {
    // Use a capture video preview layer as the view's backing layer.
    override class var layerClass: AnyClass {
        AVCaptureVideoPreviewLayer.self
    }
    
    var previewLayer: AVCaptureVideoPreviewLayer {
        layer as! AVCaptureVideoPreviewLayer
    }
    
    // Connect the layer to a capture session.
    var session: AVCaptureSession? {
        get { previewLayer.session }
        set { previewLayer.session = newValue }
    }
}
```

## Topics

### Creating a preview layer

- [init(session:)](avcapturevideopreviewlayer/init%28session_%29.md): Creates a layer to preview the visual output of a capture session.
- [init(sessionWithNoConnection:)](avcapturevideopreviewlayer/init%28sessionwithnoconnection_%29.md): Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.

### Layer configuration

- [isPreviewing](avcapturevideopreviewlayer/ispreviewing.md): A Boolean value that indicates whether the layer is rendering video frames from its source.
- [videoGravity](avcapturevideopreviewlayer/videogravity.md): A value that indicates how the layer displays video content within its bounds.

### Configuring deferred start

- [isDeferredStartSupported](avcapturevideopreviewlayer/isdeferredstartsupported.md): A `BOOL` value that indicates whether the preview layer supports deferred start.
- [isDeferredStartEnabled](avcapturevideopreviewlayer/isdeferredstartenabled.md): A `BOOL` value that indicates whether to defer starting this preview layer.

### Session configuration

- [session](avcapturevideopreviewlayer/session.md): A capture session with visual output to preview.
- [connection](avcapturevideopreviewlayer/connection.md): An object that describes the connection from the layer to a particular input port.
- [setSessionWithNoConnection(\_:)](avcapturevideopreviewlayer/setsessionwithnoconnection%28__%29.md): Associates a session with the layer without automatically forming a connection to an eligible input port.

### Converting between coordinate spaces

- [layerPointConverted(fromCaptureDevicePoint:)](avcapturevideopreviewlayer/layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [captureDevicePointConverted(fromLayerPoint:)](avcapturevideopreviewlayer/capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [layerRectConverted(fromMetadataOutputRect:)](avcapturevideopreviewlayer/layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectConverted(fromLayerRect:)](avcapturevideopreviewlayer/metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObject(for:)](avcapturevideopreviewlayer/transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.

### Deprecated

- [Deprecated symbols](avcapturevideopreviewlayer-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [CALayer](../quartzcore/calayer.md)

### Conforms To

- [CAMediaTiming](../quartzcore/camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capture preview

- [AVCaptureAudioPreviewOutput](avcaptureaudiopreviewoutput.md): A capture output that provides a preview of the captured audio.

# AVCaptureVideoPreviewLayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Core Animation layer that displays video from a camera device.

## Declaration

```objectivec
@interface AVCaptureVideoPreviewLayer : CALayer
```

## Mentioned In

- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

Use this layer to provide a preview of the content the camera captures. A convenient way to use this class in iOS is to set it as the backing layer for a view as shown below.

```swift
class PreviewView: UIView {
    // Use a capture video preview layer as the view's backing layer.
    override class var layerClass: AnyClass {
        AVCaptureVideoPreviewLayer.self
    }
    
    var previewLayer: AVCaptureVideoPreviewLayer {
        layer as! AVCaptureVideoPreviewLayer
    }
    
    // Connect the layer to a capture session.
    var session: AVCaptureSession? {
        get { previewLayer.session }
        set { previewLayer.session = newValue }
    }
}
```

## Topics

### Creating a preview layer

- [layerWithSession:](avcapturevideopreviewlayer/layerwithsession_.md): Returns a new layer to preview the visual output of a capture session.
- [initWithSession:](avcapturevideopreviewlayer/init%28session_%29.md): Creates a layer to preview the visual output of a capture session.
- [layerWithSessionWithNoConnection:](avcapturevideopreviewlayer/layerwithsessionwithnoconnection_.md): Returns a new layer to preview the visual output of a capture session, without making connections to eligible video inputs.
- [initWithSessionWithNoConnection:](avcapturevideopreviewlayer/init%28sessionwithnoconnection_%29.md): Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.

### Layer configuration

- [previewing](avcapturevideopreviewlayer/ispreviewing.md): A Boolean value that indicates whether the layer is rendering video frames from its source.
- [videoGravity](avcapturevideopreviewlayer/videogravity.md): A value that indicates how the layer displays video content within its bounds.

### Configuring deferred start

- [deferredStartSupported](avcapturevideopreviewlayer/isdeferredstartsupported.md): A `BOOL` value that indicates whether the preview layer supports deferred start.
- [deferredStartEnabled](avcapturevideopreviewlayer/isdeferredstartenabled.md): A `BOOL` value that indicates whether to defer starting this preview layer.

### Session configuration

- [session](avcapturevideopreviewlayer/session.md): A capture session with visual output to preview.
- [connection](avcapturevideopreviewlayer/connection.md): An object that describes the connection from the layer to a particular input port.
- [setSessionWithNoConnection:](avcapturevideopreviewlayer/setsessionwithnoconnection%28__%29.md): Associates a session with the layer without automatically forming a connection to an eligible input port.

### Converting between coordinate spaces

- [pointForCaptureDevicePointOfInterest:](avcapturevideopreviewlayer/layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [captureDevicePointOfInterestForPoint:](avcapturevideopreviewlayer/capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [rectForMetadataOutputRectOfInterest:](avcapturevideopreviewlayer/layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectOfInterestForRect:](avcapturevideopreviewlayer/metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObjectForMetadataObject:](avcapturevideopreviewlayer/transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.

### Deprecated

- [Deprecated symbols](avcapturevideopreviewlayer-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [CALayer](../quartzcore/calayer.md)

## See Also

### Capture preview

- [AVCaptureAudioPreviewOutput](avcaptureaudiopreviewoutput.md): A capture output that provides a preview of the captured audio.
