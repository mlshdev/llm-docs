> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodyposeobservation](https://developer.apple.com/documentation/vision/humanbodyposeobservation)

# HumanBodyPoseObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An observation that provides the body points the analysis recognizes.

## Declaration

```swift
struct HumanBodyPoseObservation
```

## Topics

### Creating an observation

- [init(\_:)](humanbodyposeobservation/init%28__%29.md): Creates a human body pose observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [leftHand](humanbodyposeobservation/lefthand.md): The observed left hand.
- [rightHand](humanbodyposeobservation/righthand.md): The observed right hand.
- [HumanHandPoseObservation](humanhandposeobservation.md): An observation that provides the hand points the analysis recognizes.
- [keypoints](humanbodyposeobservation/keypoints.md): A multi-array compatible with Core ML that contains normalized point coordinates and confidence scores.

### Getting the joints

- [HumanBodyPoseObservation.JointsGroupName](humanbodyposeobservation/jointsgroupname.md): The joint group names available in the observation.
- [HumanBodyPoseObservation.JointName](humanbodyposeobservation/jointname.md): The supported joint names for the body pose.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [PoseProviding](poseproviding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
