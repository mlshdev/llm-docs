> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/targetedimagerequesthandler](https://developer.apple.com/documentation/vision/targetedimagerequesthandler)

# TargetedImageRequestHandler

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that performs image-analysis requests on two images.

## Declaration

```swift
final class TargetedImageRequestHandler
```

## Topics

### Creating a request handler

- [init(sourceURL:targetURL:orientation:)](targetedimagerequesthandler/init%28sourceurl_targeturl_orientation_%29.md): Creates a handler for performing requests on an image at the specified URL.
- [init(source:target:orientation:)](targetedimagerequesthandler/init%28source_target_orientation_%29-4wr1c.md): Creates a handler for performing requests on an image contained in a data object.
- [init(source:target:orientation:)](targetedimagerequesthandler/init%28source_target_orientation_%29-66ft9.md): Creates a handler for performing requests on Core Graphics images.
- [init(source:target:orientation:)](targetedimagerequesthandler/init%28source_target_orientation_%29-64lxw.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [init(source:target:orientation:)](targetedimagerequesthandler/init%28source_target_orientation_%29-9u6ta.md): Creates a request handler that performs requests on an image contained within a sample buffer.
- [init(source:target:orientation:)](targetedimagerequesthandler/init%28source_target_orientation_%29-1nk14.md): Creates a handler for performing requests on Core Image images.

### Performing the request

- [perform(\_:)](targetedimagerequesthandler/perform%28__%29-1i4di.md): Performs one or more framework requests on the handler’s image.
- [perform(\_:)](targetedimagerequesthandler/perform%28__%29-2r0k8.md): Performs a framework request on the handler’s image.
- [performAll(\_:)](targetedimagerequesthandler/performall%28__%29.md): Schedules a collection of framework requests to perform on the handler’s image.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request handlers

- [ImageRequestHandler](imagerequesthandler.md): An object that processes one or more image-analysis requests pertaining to a single image.
- [VideoProcessor](videoprocessor.md): An object that performs offline analysis of video content.
