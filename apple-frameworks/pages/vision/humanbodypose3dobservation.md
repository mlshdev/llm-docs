> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation](https://developer.apple.com/documentation/vision/humanbodypose3dobservation)

# HumanBodyPose3DObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An observation that provides the 3D body points the request recognizes.

## Declaration

```swift
struct HumanBodyPose3DObservation
```

## Topics

### Creating an observation

- [init(\_:)](humanbodypose3dobservation/init%28__%29.md): Creates a 3D human body pose observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [bodyHeight](humanbodypose3dobservation/bodyheight.md): The estimated human body height, in meters.
- [cameraOriginMatrix](humanbodypose3dobservation/cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
- [HumanBodyPose3DObservation.EstimationTechnique](humanbodypose3dobservation/estimationtechnique.md): Constants that identify body height estimation techniques.
- [heightEstimationTechnique](humanbodypose3dobservation/heightestimationtechnique.md): The technique the framework uses to estimate body height.

### Getting the joints

- [allJoints(in:)](humanbodypose3dobservation/alljoints%28in_%29.md): Retrieves a dictionary of all joints in a joint group.
- [availableJointsGroupNames](humanbodypose3dobservation/availablejointsgroupnames.md): The names of the available joint groupings in the observation.
- [HumanBodyPose3DObservation.JointsGroupName](humanbodypose3dobservation/jointsgroupname.md): The supported joint group names for the body pose.
- [joint(for:)](humanbodypose3dobservation/joint%28for_%29.md): Retrieves a joint for a given joint name.
- [availableJointNames](humanbodypose3dobservation/availablejointnames.md): The names of the available joints in the observation.
- [HumanBodyPose3DObservation.JointName](humanbodypose3dobservation/jointname.md): The supported joint names for the body pose.

### Getting the joint name

- [parentJointName(for:)](humanbodypose3dobservation/parentjointname%28for_%29.md): Returns the parent joint of the joint name you specify.

### Getting the camera position

- [cameraRelativePosition(for:)](humanbodypose3dobservation/camerarelativeposition%28for_%29.md): Returns a position relative to the camera for the body joint you specify.

### Getting the joint position

- [pointInImage(for:)](humanbodypose3dobservation/pointinimage%28for_%29.md): Returns a 2D point for the joint name you specify, relative to the input image.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
