> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotmanager](https://developer.apple.com/documentation/screencapturekit/scscreenshotmanager)

# SCScreenshotManager (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

An instance for the capture of single frames from a stream.

## Declaration

```swift
class SCScreenshotManager
```

## Topics

### Individual frame capture

- [captureImage(contentFilter:configuration:completionHandler:)](scscreenshotmanager/captureimage%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame from a stream as an image, using a filter.
- [captureSampleBuffer(contentFilter:configuration:completionHandler:)](scscreenshotmanager/capturesamplebuffer%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame directly from a stream’s buffer, using a filter.

### Type Methods

- [captureImage(in:completionHandler:)](scscreenshotmanager/captureimage%28in_completionhandler_%29.md)
- [captureScreenshot(contentFilter:configuration:completionHandler:)](scscreenshotmanager/capturescreenshot%28contentfilter_configuration_completionhandler_%29.md)
- [captureScreenshot(rect:configuration:completionHandler:)](scscreenshotmanager/capturescreenshot%28rect_configuration_completionhandler_%29.md)

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
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCScreenshotManager (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

An instance for the capture of single frames from a stream.

## Declaration

```objectivec
@interface SCScreenshotManager : NSObject
```

## Topics

### Individual frame capture

- [captureImageWithFilter:configuration:completionHandler:](scscreenshotmanager/captureimage%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame from a stream as an image, using a filter.
- [captureSampleBufferWithFilter:configuration:completionHandler:](scscreenshotmanager/capturesamplebuffer%28contentfilter_configuration_completionhandler_%29.md): Captures a single frame directly from a stream’s buffer, using a filter.

### Type Methods

- [captureImageInRect:completionHandler:](scscreenshotmanager/captureimage%28in_completionhandler_%29.md)
- [captureScreenshotWithFilter:configuration:completionHandler:](scscreenshotmanager/capturescreenshot%28contentfilter_configuration_completionhandler_%29.md)
- [captureScreenshotWithRect:configuration:completionHandler:](scscreenshotmanager/capturescreenshot%28rect_configuration_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content capture

- [SCStream](scstream.md): An instance that represents a stream of shareable content.
- [SCStreamConfiguration](scstreamconfiguration.md): An instance that provides the output configuration for a stream.
- [SCContentFilter](sccontentfilter.md): An instance that filters the content a stream captures.
- [SCStreamDelegate](scstreamdelegate.md): A delegate protocol your app implements to respond to stream events.
- [SCScreenshotConfiguration](scscreenshotconfiguration.md): An object that contains screenshot properties such as output width, height, and image quality specifications.
- [SCScreenshotOutput](scscreenshotoutput.md): An object that contains all images requested by the client.
- [SCVideoEffectOutput](scvideoeffectoutput.md)
