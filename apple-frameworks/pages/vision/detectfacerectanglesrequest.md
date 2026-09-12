> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectfacerectanglesrequest](https://developer.apple.com/documentation/vision/detectfacerectanglesrequest)

# DetectFaceRectanglesRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that finds faces within an image.

## Declaration

```swift
struct DetectFaceRectanglesRequest
```

<a id="overview"></a>

## Overview

This request returns faces as rectangular bounding boxes with origin and size.

## Topics

### Creating a request

- [init(\_:)](detectfacerectanglesrequest/init%28__%29.md): Creates a face detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [FaceObservation](faceobservation.md): An image-analysis request that identifies facial features in an image.

### Getting the revision

- [revision](detectfacerectanglesrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detectfacerectanglesrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectFaceRectanglesRequest.Revision](detectfacerectanglesrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

### Facial analysis

- [Analyzing a selfie and visualizing its content](analyzing-a-selfie-and-visualizing-its-content.md): Calculate face-capture quality and visualize facial features for a collection of images using the Vision framework.
- [DetectFaceCaptureQualityRequest](detectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [DetectFaceLandmarksRequest](detectfacelandmarksrequest.md): An image analysis request that finds facial features like eyes and mouth in an image.
