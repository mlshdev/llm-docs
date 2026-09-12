> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectfacelandmarksrequest](https://developer.apple.com/documentation/vision/detectfacelandmarksrequest)

# DetectFaceLandmarksRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image analysis request that finds facial features like eyes and mouth in an image.

## Declaration

```swift
struct DetectFaceLandmarksRequest
```

<a id="overview"></a>

## Overview

By default, a face landmarks request first locates all faces in the input image, then analyzes each to detect facial features. If you’ve already located all the faces in an image, or want to detect landmarks in only a subset of the faces in the image, set the inputFaceObservations property to an array of [FaceObservation](faceobservation.md) objects representing the faces you want to analyze. You can either use face observations output by a [DetectFaceRectanglesRequest](detectfacerectanglesrequest.md) or manually create `FaceObservation` instances with the bounding boxes of the faces you want to analyze.

## Topics

### Creating a request

- [init(\_:)](detectfacelandmarksrequest/init%28__%29.md): Creates a face landmark detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [FaceObservation](faceobservation.md): An image-analysis request that identifies facial features in an image.

### Configuring a request

- [inputFaceObservations](detectfacelandmarksrequest/inputfaceobservations.md): An array of face-observation objects to process as part of the request.

### Getting the revision

- [revision](detectfacelandmarksrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detectfacelandmarksrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectFaceLandmarksRequest.Revision](detectfacelandmarksrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [DetectFaceRectanglesRequest](detectfacerectanglesrequest.md): A request that finds faces within an image.
