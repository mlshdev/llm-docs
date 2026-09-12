> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectcontoursrequest](https://developer.apple.com/documentation/vision/detectcontoursrequest)

# DetectContoursRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that detects the contours of the edges of an image.

## Declaration

```swift
struct DetectContoursRequest
```

<a id="overview"></a>

## Overview

This request generates a [ContoursObservation](contoursobservation.md) object that describes the contours in an image.

## Topics

### Creating a request

- [init(\_:)](detectcontoursrequest/init%28__%29.md): Creates a contour-detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [ContoursObservation](contoursobservation.md): An object that represents the detected contours in an image.

### Configuring a request

- [contrastAdjustment](detectcontoursrequest/contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](detectcontoursrequest/contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](detectcontoursrequest/detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](detectcontoursrequest/maximumimagedimension.md): The maximum image dimension to use for contour detection.

### Getting the revision

- [revision](detectcontoursrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detectcontoursrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectContoursRequest.Revision](detectcontoursrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

- [DetectHorizonRequest](detecthorizonrequest.md): An image-analysis request that determines the horizon angle in an image.
- [DetectRectanglesRequest](detectrectanglesrequest.md): An image-analysis request that finds projected rectangular regions in an image.
