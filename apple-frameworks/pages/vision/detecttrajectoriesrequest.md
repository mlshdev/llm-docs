> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecttrajectoriesrequest](https://developer.apple.com/documentation/vision/detecttrajectoriesrequest)

# DetectTrajectoriesRequest

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that detects the trajectories of shapes moving along a parabolic path.

## Declaration

```swift
final class DetectTrajectoriesRequest
```

<a id="overview"></a>

## Overview

After the request detects a trajectory, it produces a collection of [TrajectoryObservation](trajectoryobservation.md) objects that contain the shape’s detected points and an equation describing the parabola.

## Topics

### Creating a request

- [init(trajectoryLength:\_:frameAnalysisSpacing:)](detecttrajectoriesrequest/init%28trajectorylength___frameanalysisspacing_%29.md): Creates a trajectory-detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [TrajectoryObservation](trajectoryobservation.md): An observation that describes a detected trajectory.

### Configuring a request

- [objectMaximumNormalizedRadius](detecttrajectoriesrequest/objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [objectMinimumNormalizedRadius](detecttrajectoriesrequest/objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [targetFrameTime](detecttrajectoriesrequest/targetframetime.md): The requested target frame time for processing trajectory detection.
- [trajectoryLength](detecttrajectoriesrequest/trajectorylength.md): The number of points to detect before calculating a trajectory.

### Getting the revision

- [revision](detecttrajectoriesrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detecttrajectoriesrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectTrajectoriesRequest.Revision](detecttrajectoriesrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

- [TrackObjectRequest](trackobjectrequest.md): An image analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [TrackOpticalFlowRequest](trackopticalflowrequest.md): A request that determines the direction change of vectors for each pixel from a previous to current image.
- [TrackRectangleRequest](trackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
