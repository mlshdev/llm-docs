> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthorizonrequest](https://developer.apple.com/documentation/vision/detecthorizonrequest)

# DetectHorizonRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image-analysis request that determines the horizon angle in an image.

## Declaration

```swift
struct DetectHorizonRequest
```

<a id="overview"></a>

## Overview

This request generates a [HorizonObservation](horizonobservation.md) object that describes the horizon the request detects.

## Topics

### Creating a request

- [init(\_:)](detecthorizonrequest/init%28__%29.md): Creates a horizon-detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [HorizonObservation](horizonobservation.md): The horizon angle information that an image-analysis request detects.

### Getting the revision

- [revision](detecthorizonrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detecthorizonrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectHorizonRequest.Revision](detecthorizonrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionRequest](visionrequest.md)

## See Also

### Shape and edge detection

- [DetectContoursRequest](detectcontoursrequest.md): A request that detects the contours of the edges of an image.
- [DetectRectanglesRequest](detectrectanglesrequest.md): An image-analysis request that finds projected rectangular regions in an image.
