> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scvideoeffectoutput](https://developer.apple.com/documentation/screencapturekit/scvideoeffectoutput)

# SCVideoEffectOutput (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class SCVideoEffectOutput
```

<a id="overview"></a>

## Overview

SCVideoEffectOutput

SCVideoEffectOutput represents a camera video effect session on a SCStream. Create an instance and add it to a stream using addVideoEffectOutput:error: to start the camera video effect. The camera preview is framework-managed and automatically added to the application’s key window. Callbacks for video effect lifecycle events are delivered through the SCStreamDelegate protocol.

## Topics

### Initializers

- [init(cameraDevice:)](scvideoeffectoutput/init%28cameradevice_%29.md)

### Instance Properties

- [cameraDevice](scvideoeffectoutput/cameradevice.md)

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

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.

# SCVideoEffectOutput (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
@interface SCVideoEffectOutput : NSObject
```

<a id="overview"></a>

## Overview

SCVideoEffectOutput

SCVideoEffectOutput represents a camera video effect session on a SCStream. Create an instance and add it to a stream using addVideoEffectOutput:error: to start the camera video effect. The camera preview is framework-managed and automatically added to the application’s key window. Callbacks for video effect lifecycle events are delivered through the SCStreamDelegate protocol.

## Topics

### Instance Properties

- [cameraDevice](scvideoeffectoutput/cameradevice.md)

### Instance Methods

- [initWithCameraDevice:](scvideoeffectoutput/init%28cameradevice_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotManager](scscreenshotmanager.md): An instance for the capture of single frames from a stream.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
