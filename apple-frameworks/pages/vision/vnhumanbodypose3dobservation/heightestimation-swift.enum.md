> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/heightestimation-swift.enum](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/heightestimation-swift.enum)

# VNHumanBodyPose3DObservation.HeightEstimation (Swift)

**Framework:** Vision  
**Kind:** Enumeration

Constants that identify body height estimation techniques.

## Declaration

```swift
enum HeightEstimation
```

## Topics

### Techniques

- [VNHumanBodyPose3DObservation.HeightEstimation.measured](heightestimation-swift.enum/measured.md): A technique that uses LiDAR depth data to measure body height, in meters.
- [VNHumanBodyPose3DObservation.HeightEstimation.reference](heightestimation-swift.enum/reference.md): A technique that uses a reference height.
- [VNHumanBodyPose3DObservation.HeightEstimation.measured](heightestimation-swift.enum/measured.md): A technique that uses LiDAR depth data to measure body height, in meters.
- [VNHumanBodyPose3DObservation.HeightEstimation.reference](heightestimation-swift.enum/reference.md): A technique that uses a reference height.

### Creating a Technique

- [init(rawValue:)](heightestimation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Body Height

- [heightEstimation](heightestimation-swift.property.md): The technique the framework uses to estimate body height.
- [bodyHeight](bodyheight.md): The estimated human body height, in meters.

# VNHumanBodyPose3DObservationHeightEstimation (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Constants that identify body height estimation techniques.

## Declaration

```objectivec
enum VNHumanBodyPose3DObservationHeightEstimation : NSInteger;
```

## Topics

### Techniques

- [VNHumanBodyPose3DObservationHeightEstimationMeasured](heightestimation-swift.enum/measured.md): A technique that uses LiDAR depth data to measure body height, in meters.
- [VNHumanBodyPose3DObservationHeightEstimationReference](heightestimation-swift.enum/reference.md): A technique that uses a reference height.
- [VNHumanBodyPose3DObservationHeightEstimationMeasured](heightestimation-swift.enum/measured.md): A technique that uses LiDAR depth data to measure body height, in meters.
- [VNHumanBodyPose3DObservationHeightEstimationReference](heightestimation-swift.enum/reference.md): A technique that uses a reference height.

## See Also

### Getting the Body Height

- [heightEstimation](heightestimation-swift.property.md): The technique the framework uses to estimate body height.
- [bodyHeight](bodyheight.md): The estimated human body height, in meters.
