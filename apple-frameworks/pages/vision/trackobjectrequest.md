> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trackobjectrequest](https://developer.apple.com/documentation/vision/trackobjectrequest)

# TrackObjectRequest

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image analysis request that tracks the movement of a previously identified object across multiple images or video frames.

## Declaration

```swift
final class TrackObjectRequest
```

<a id="overview"></a>

## Overview

Use this type of request to track the bounding boxes around objects previously identified in an image. Vision attempts to locate the same object from the input observation throughout the sequence. Each time the request runs, it produces a [DetectedObjectObservation](detectedobjectobservation.md) that holds the tracked object’s updated bounding box.

## Topics

### Creating a request

- [init(detectedObject:\_:frameAnalysisSpacing:)](trackobjectrequest/init%28detectedobject___frameanalysisspacing_%29.md): Creates an object tracking request.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [DetectedObjectObservation](detectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image-analysis request detects.

### Configuring a request

- [inputObservation](trackobjectrequest/inputobservation.md): The object to track.

### Getting the revision

- [revision](trackobjectrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](trackobjectrequest/supportedrevisions.md): The collection of revisions the request supports.
- [TrackObjectRequest.Revision](trackobjectrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StatefulRequest](statefulrequest.md)
- [VisionRequest](visionrequest.md)

## See Also

### Motion and object tracking

- [DetectTrajectoriesRequest](detecttrajectoriesrequest.md): A request that detects the trajectories of shapes moving along a parabolic path.
- [TrackOpticalFlowRequest](trackopticalflowrequest.md): A request that determines the direction change of vectors for each pixel from a previous to current image.
- [TrackRectangleRequest](trackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
