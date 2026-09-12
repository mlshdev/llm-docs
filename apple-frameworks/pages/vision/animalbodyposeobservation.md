> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/animalbodyposeobservation](https://developer.apple.com/documentation/vision/animalbodyposeobservation)

# AnimalBodyPoseObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An observation that provides the animal body points the analysis recognizes.

## Declaration

```swift
struct AnimalBodyPoseObservation
```

## Topics

### Creating an observation

- [init(\_:)](animalbodyposeobservation/init%28__%29.md): Creates an animal body pose observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.

### Getting the joints

- [AnimalBodyPoseObservation.JointName](animalbodyposeobservation/jointname.md): The joint names for an animal body pose.
- [AnimalBodyPoseObservation.JointsGroupName](animalbodyposeobservation/jointsgroupname.md): The joint group names for an animal body pose.

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
