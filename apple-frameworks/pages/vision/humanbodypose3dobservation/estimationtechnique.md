> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation/estimationtechnique](https://developer.apple.com/documentation/vision/humanbodypose3dobservation/estimationtechnique)

# HumanBodyPose3DObservation.EstimationTechnique

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Constants that identify body height estimation techniques.

## Declaration

```swift
enum EstimationTechnique
```

## Topics

### Getting estimation techniques

- [HumanBodyPose3DObservation.EstimationTechnique.measured](estimationtechnique/measured.md): A technique that uses LiDAR depth data to measure body height, in meters.
- [HumanBodyPose3DObservation.EstimationTechnique.reference](estimationtechnique/reference.md): A technique that uses a reference height.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [bodyHeight](bodyheight.md): The estimated human body height, in meters.
- [cameraOriginMatrix](cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
- [heightEstimationTechnique](heightestimationtechnique.md): The technique the framework uses to estimate body height.
