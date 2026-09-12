> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trackopticalflowrequest](https://developer.apple.com/documentation/vision/trackopticalflowrequest)

# TrackOpticalFlowRequest

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A request that determines the direction change of vectors for each pixel from a previous to current image.

## Declaration

```swift
final class TrackOpticalFlowRequest
```

<a id="overview"></a>

## Overview

This request generates an [OpticalFlowObservation](opticalflowobservation.md) object that describes the directional change from image to image. The request works at the pixel level, so both images needs to have the same dimensions to successfully perform the request.

> **Important**

>  Optical flow requests are very resource intensive, so perform only one request at a time. Release memory immediately after generating an optical flow.

## Topics

### Creating a request

- [init(\_:frameAnalysisSpacing:)](trackopticalflowrequest/init%28__frameanalysisspacing_%29.md): Creates an optical-flow tracking request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [OpticalFlowObservation](opticalflowobservation.md): An object that represents an optical flow that an image-analysis request produces.

### Configuring a request

- [computationAccuracy](trackopticalflowrequest/computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [TrackOpticalFlowRequest.ComputationAccuracy](trackopticalflowrequest/computationaccuracy-swift.enum.md): A type that describes the computational accuracy.
- [outputPixelFormatType](trackopticalflowrequest/outputpixelformattype.md): The desired pixel format type of the observation.
- [supportedOutputPixelFormatTypes](trackopticalflowrequest/supportedoutputpixelformattypes.md): The collection of supported pixel format types.

### Getting the revision

- [revision](trackopticalflowrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](trackopticalflowrequest/supportedrevisions.md): The collection of revisions the request supports.
- [TrackOpticalFlowRequest.Revision](trackopticalflowrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StatefulRequest](statefulrequest.md)
- [TargetedRequest](targetedrequest.md)
- [VisionRequest](visionrequest.md)

## See Also

### Motion and object tracking

- [DetectTrajectoriesRequest](detecttrajectoriesrequest.md): A request that detects the trajectories of shapes moving along a parabolic path.
- [TrackObjectRequest](trackobjectrequest.md): An image analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [TrackRectangleRequest](trackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
