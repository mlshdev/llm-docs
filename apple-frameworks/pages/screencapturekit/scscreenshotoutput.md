> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotoutput](https://developer.apple.com/documentation/screencapturekit/scscreenshotoutput)

# SCScreenshotOutput (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An object that contains all images requested by the client.

## Declaration

```swift
class SCScreenshotOutput
```

## Topics

### Instance Properties

- [fileURL](scscreenshotoutput/fileurl.md): A URL property that specifies the location of the saved image.
- [hdrImage](scscreenshotoutput/hdrimage.md): An output property that specifies the high dynamic range version of the screenshot.
- [sdrImage](scscreenshotoutput/sdrimage.md): An output property that specifies the standard dynamic range version of the screenshot.

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
- [SCVideoEffectOutput](scvideoeffectoutput.md)

# SCScreenshotOutput (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An object that contains all images requested by the client.

## Declaration

```objectivec
@interface SCScreenshotOutput : NSObject
```

## Topics

### Instance Properties

- [fileURL](scscreenshotoutput/fileurl.md): A URL property that specifies the location of the saved image.
- [hdrImage](scscreenshotoutput/hdrimage.md): An output property that specifies the high dynamic range version of the screenshot.
- [sdrImage](scscreenshotoutput/sdrimage.md): An output property that specifies the standard dynamic range version of the screenshot.

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
- [SCVideoEffectOutput](scvideoeffectoutput.md)
