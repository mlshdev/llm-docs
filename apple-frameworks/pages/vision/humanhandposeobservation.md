> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanhandposeobservation](https://developer.apple.com/documentation/vision/humanhandposeobservation)

# HumanHandPoseObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An observation that provides the hand points the analysis recognizes.

## Declaration

```swift
struct HumanHandPoseObservation
```

## Topics

### Creating an observation

- [init(\_:)](humanhandposeobservation/init%28__%29.md): Creates a human hand pose observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [chirality](humanhandposeobservation/chirality-swift.property.md): The chirality, or handedness, of a pose.
- [HumanHandPoseObservation.Chirality](humanhandposeobservation/chirality-swift.enum.md): The hand sidedness of a pose.
- [keypoints](humanhandposeobservation/keypoints.md): The keypoints for the observation.

### Getting the joints

- [HumanHandPoseObservation.JointsGroupName](humanhandposeobservation/jointsgroupname.md): The joint group names available in the observation.
- [HumanHandPoseObservation.JointName](humanhandposeobservation/jointname.md): The supported joint names for the hand pose.

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
