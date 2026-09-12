> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanbodyposerequest](https://developer.apple.com/documentation/vision/detecthumanbodyposerequest)

# DetectHumanBodyPoseRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A request that detects a human body pose.

## Declaration

```swift
struct DetectHumanBodyPoseRequest
```

<a id="overview"></a>

## Overview

This type of request produces a collection of [HumanBodyPoseObservation](humanbodyposeobservation.md) objects that describe the body pose.

## Topics

### Creating a request

- [init(\_:)](detecthumanbodyposerequest/init%28__%29.md): Creates a human body pose request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [HumanBodyPoseObservation](humanbodyposeobservation.md): An observation that provides the body points the analysis recognizes.

### Configuring a request

- [detectsHands](detecthumanbodyposerequest/detectshands.md): A Boolean value that detects hands of the body in the results, if they’re visible.
- [supportedJointNames](detecthumanbodyposerequest/supportedjointnames.md): The joint names the request supports.
- [supportedJointsGroupNames](detecthumanbodyposerequest/supportedjointsgroupnames.md): The joint group names the request supports.

### Getting the revision

- [revision](detecthumanbodyposerequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detecthumanbodyposerequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectHumanBodyPoseRequest.Revision](detecthumanbodyposerequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

### Pose analysis

- [DetectAnimalBodyPoseRequest](detectanimalbodyposerequest.md): A request that detects an animal body pose.
- [DetectHumanBodyPose3DRequest](detecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [DetectHumanHandPoseRequest](detecthumanhandposerequest.md): A request that detects a human hand pose.
- [Supporting Pose Types](supporting-pose-types.md): Types you use when working with pose analysis.
