> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanbodypose3drequest](https://developer.apple.com/documentation/vision/detecthumanbodypose3drequest)

# DetectHumanBodyPose3DRequest

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A request that detects points on human bodies in 3D space, relative to the camera.

## Declaration

```swift
final class DetectHumanBodyPose3DRequest
```

<a id="overview"></a>

## Overview

This request generates a collection of [HumanBodyPose3DObservation](humanbodypose3dobservation.md) objects that describe the position of each body the request detects. If the system allows it, the request uses [AVDepthData](../avfoundation/avdepthdata.md) information to improve the accuracy.

## Topics

### Creating a request

- [init(\_:frameAnalysisSpacing:)](detecthumanbodypose3drequest/init%28__frameanalysisspacing_%29.md): Creates a 3D human body pose request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [HumanBodyPose3DObservation](humanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.

### Configuring a request

- [supportedJointNames](detecthumanbodypose3drequest/supportedjointnames.md): The joint names the request supports.
- [supportedJointsGroupNames](detecthumanbodypose3drequest/supportedjointsgroupnames.md): The joint group names the request supports.

### Getting the revision

- [revision](detecthumanbodypose3drequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detecthumanbodypose3drequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectHumanBodyPose3DRequest.Revision](detecthumanbodypose3drequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

### Pose analysis

- [DetectAnimalBodyPoseRequest](detectanimalbodyposerequest.md): A request that detects an animal body pose.
- [DetectHumanBodyPoseRequest](detecthumanbodyposerequest.md): A request that detects a human body pose.
- [DetectHumanHandPoseRequest](detecthumanhandposerequest.md): A request that detects a human hand pose.
- [Supporting Pose Types](supporting-pose-types.md): Types you use when working with pose analysis.
