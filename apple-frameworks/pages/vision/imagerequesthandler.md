> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imagerequesthandler](https://developer.apple.com/documentation/vision/imagerequesthandler)

# ImageRequestHandler

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that processes one or more image-analysis requests pertaining to a single image.

## Declaration

```swift
final class ImageRequestHandler
```

<a id="overview"></a>

## Overview

Instantiate this handler to perform Vision requests on a single image. You specify the image, and then call [perform(\_:)](imagerequesthandler/perform%28__%29-7b6g5.md) to begin executing the request.

## Topics

### Creating a request handler

- [init(\_:orientation:)](imagerequesthandler/init%28__orientation_%29-6imw8.md): Creates a handler for performing requests on an image at the specified URL.
- [init(\_:orientation:)](imagerequesthandler/init%28__orientation_%29-8cwes.md): Creates a handler for performing requests on an image contained in a data object.
- [init(\_:orientation:)](imagerequesthandler/init%28__orientation_%29-8nodt.md): Creates a handler for performing requests on Core Graphics images.
- [init(\_:depthData:orientation:)](imagerequesthandler/init%28__depthdata_orientation_%29-3ebxg.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [init(\_:depthData:orientation:)](imagerequesthandler/init%28__depthdata_orientation_%29-5itte.md): Creates a request handler that performs requests on an image contained within a sample buffer.
- [init(\_:orientation:)](imagerequesthandler/init%28__orientation_%29-2hvfr.md): Creates a handler for performing requests on Core Image images.
- [init(\_:orientation:)](imagerequesthandler/init%28__orientation_%29-3zrh5.md)
- [init(\_:orientation:)](imagerequesthandler/init%28__orientation_%29-8q7vz.md)

### Performing the request

- [perform(\_:)](imagerequesthandler/perform%28__%29-l6er.md): Performs one or more framework requests on the handler’s image.
- [perform(\_:)](imagerequesthandler/perform%28__%29-7b6g5.md): Performs a framework request on the handler’s image.
- [performAll(\_:)](imagerequesthandler/performall%28__%29.md): Schedules a collection of framework requests to perform on the handler’s image.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request handlers

- [TargetedImageRequestHandler](targetedimagerequesthandler.md): An object that performs image-analysis requests on two images.
- [VideoProcessor](videoprocessor.md): An object that performs offline analysis of video content.
