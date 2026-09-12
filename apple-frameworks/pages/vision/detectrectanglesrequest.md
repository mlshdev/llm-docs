> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectrectanglesrequest](https://developer.apple.com/documentation/vision/detectrectanglesrequest)

# DetectRectanglesRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image-analysis request that finds projected rectangular regions in an image.

## Declaration

```swift
struct DetectRectanglesRequest
```

<a id="overview"></a>

## Overview

A rectangle-detection request locates regions of an image with a rectangular shape, like credit cards, business cards, documents, and signs. The request returns its observations in the form of [RectangleObservation](https://developer.apple.com/documentation/vision/rectangleobservation) objects, which contain normalized coordinates of bounding boxes containing a rectangle.

Use this type of request to find the bounding boxes of rectangles in an image. Vision returns observations for rectangles found in all orientations and sizes, along with a confidence level to indicate how likely the observation contains an actual rectangle.

To further configure or restrict the types of rectangles found, set properties on the request specifying a range of aspect ratios, sizes, and quadrature tolerance.

## Topics

### Creating a request

- [init(\_:)](detectrectanglesrequest/init%28__%29.md): Creates a rectangle-detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [RectangleObservation](rectangleobservation.md): An object that represents the four vertices of a detected rectangle.

### Configuring a request

- [maximumAspectRatio](detectrectanglesrequest/maximumaspectratio.md): The largest aspect ratio the rectangle request detects.
- [maximumObservations](detectrectanglesrequest/maximumobservations.md): The maximum number of rectangles the request returns.
- [minimumAspectRatio](detectrectanglesrequest/minimumaspectratio.md): The smallest aspect ratio the rectangle request detects.
- [minimumConfidence](detectrectanglesrequest/minimumconfidence.md): The minimum acceptable confidence level for detected rectangles.
- [minimumSize](detectrectanglesrequest/minimumsize.md): The minimum size of the rectangle detected as a proportion of the smallest dimension.
- [quadratureToleranceDegrees](detectrectanglesrequest/quadraturetolerancedegrees.md): The maximum number of degrees a rectangle corner angle deviates from 90°.

### Getting the revision

- [revision](detectrectanglesrequest/revision-swift.property.md): The request’s configured revision.
- [supportedRevisions](detectrectanglesrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectRectanglesRequest.Revision](detectrectanglesrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [DetectHorizonRequest](detecthorizonrequest.md): An image-analysis request that determines the horizon angle in an image.
